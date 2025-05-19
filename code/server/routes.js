import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import db from './db.js'

const router = express.Router()
const SECRET = process.env.SECRET;


//#region ROTAS USUÁRIO


//#region CREATE USUÁRIO
router.post("/usuario", async (req, res) => {
    try {
        console.log("Body recebido:", req.body);
        const { nome_usuario, sobrenome_usuario, telefone, email, cpf, senha } = req.body;

        if (!nome_usuario || !sobrenome_usuario || !telefone || !email || !cpf || !senha) {
            return res.status(400).json({ error: "O usuário não preencheu todas as informações necessárias. Por favor, revise o formulário" });
        }

        // 🔎 Verificação de duplicidade de e-mail
        const [userExistente] = await db.execute("SELECT * FROM usuario WHERE email = ?", [email]);

        if (userExistente.length > 0) {
            return res.status(409).json({ error: "E-mail já cadastrado. Tente outro." });
        }

        // 🔐 Criptografando a senha
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(senha, salt);

        // ✅ Inserção no banco com a senha criptografada
        const [result] = await db.execute(
            "INSERT INTO usuario (nome_usuario, sobrenome_usuario, telefone, email, cpf, senha) VALUES (?, ?, ?, ?, ?, ?)",
            [nome_usuario, sobrenome_usuario, telefone, email, cpf, hashedPassword]
        );

        // ✅ Retorno para o frontend
        // ✅ Retorno para o frontend (dentro de um objeto usuario)
        res.status(201).json({
            usuario: {
                id: result.insertId,
                nome_usuario,
                sobrenome_usuario,
                telefone,
                email,
                cpf
            }
        });


    } catch (error) {
        console.error("Erro no backend:", error.message);
        res.status(500).json({ error: error.message });
    }
});

//#endregion

//#region READ USUÁRIO
router.get("/usuario", async (req, res) => { //trocar app por router
    try {
        const [usuario] = await db.execute("SELECT * FROM usuario")
        res.status(200).json(usuario) //Inserir essa linha
    } catch (error) {
        console.error("Erro ao buscar itens:", error)
        res.status(500).json({ error: error.message })
    }
})
//#endregion

//#region UPDATE USUÁRIO
router.put("/usuario/:id", async (req, res) => { //trocar app por router
    try {
        const { id } = req.params
        const { nome_usuario, sobrenome_usuario, telefone, email, cpf, senha } = req.body
        await db.execute("UPDATE usuario SET nome_usuario=?, sobrenome_usuario=?, telefone=?, email=?, cpf=?, senha=? WHERE id=?", [
            nome_usuario,
            sobrenome_usuario,
            telefone,
            email,
            cpf,
            senha,
            id,
        ])
        res.json({ message: "Item atualizado com sucesso!" })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})
//#endregion

//#region DELETE USUÁRIO
router.delete("/usuario/:id", async (req, res) => { //trocar app por router
    try {
        const { id } = req.params
        await db.execute("DELETE FROM usuario WHERE id=?", [id])
        res.json({ message: "Item excluído com sucesso!" })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})
//#endregion


//#endregion


//#region ROTAS ADMINISTRADOR


//#region CREATE ADM
router.post("/admin", async (req, res) => {
    try {
        const {
            nome_adm,
            sobrenome_adm,
            email,
            cpf_adm,
            atuacao_adm,
            cargo_adm,
            nome_empresa,
            cnpj,
            cep_empresa,
            senha
        } = req.body;

        // Verifica se os campos estão preenchidos
        if (!nome_adm || !sobrenome_adm || !email || !cpf_adm || !atuacao_adm || !cargo_adm || !nome_empresa || !cnpj || !cep_empresa || !senha) {
            return res.status(400).json({ error: "Preencha todas as informações necessárias." });
        }

        // Criptografa a senha
        const salt = await bcrypt.genSalt(10); // Gera um "sal" para aumentar a segurança
        const hashedPassword = await bcrypt.hash(senha, salt);

        // ✅ Insere no banco com a senha criptografada
        const [result] = await db.execute(
            "INSERT INTO adm (nome_adm, sobrenome_adm, email, cpf_adm, atuacao_adm, cargo_adm, nome_empresa, cnpj, cep_empresa, senha) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [nome_adm, sobrenome_adm, email, cpf_adm, atuacao_adm, cargo_adm, nome_empresa, cnpj, cep_empresa, hashedPassword]
        );

        res.status(201).json({
            id: result.insertId,
            nome_adm,
            sobrenome_adm,
            email
        });
    } catch (error) {
        console.error("Erro no backend:", error.message);
        res.status(500).json({ error: error.message });
    }
});
//#endregion

//#region READ ADM
router.get("/admin", async (req, res) => { //trocar app por router
    try {
        const [admin] = await db.execute("SELECT * FROM adm")
        res.status(200).json(admin) //Inserir essa linha
    } catch (error) {
        console.error("Erro ao buscar itens:", error)
        res.status(500).json({ error: error.message })
    }
})
//#endregion

//#region UPDATE ADM
router.put("/admin/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const {
            nome_adm,
            sobrenome_adm,
            email,
            cpf_adm,
            atuacao_adm,
            cargo_adm,
            nome_empresa,
            cnpj,
            cep_empresa,
            senha
        } = req.body;

        // 1. Verifica se o admin existe
        const [existingAdmin] = await db.execute(
            "SELECT id_adm FROM adm WHERE id_adm = ?",
            [id]
        );

        if (existingAdmin.length === 0) {
            return res.status(404).json({ error: "Administrador não encontrado" });
        }

        // 2. Verifica se novos valores únicos já existem (exceto no próprio registro)
        const checkUniqueFields = await db.execute(
            `SELECT id_adm FROM adm 
             WHERE (cpf_adm = ? OR cnpj = ? OR cep_empresa = ?) 
             AND id_adm != ?`,
            [cpf_adm, cnpj, cep_empresa, id]
        );

        if (checkUniqueFields[0].length > 0) {
            return res.status(409).json({
                error: "CPF, CNPJ ou CEP já estão em uso por outro administrador"
            });
        }

        // 3. Atualização (senha em texto puro - apenas para desenvolvimento!)
        await db.execute(
            `UPDATE adm SET 
                nome_adm=?, 
                sobrenome_adm=?, 
                email=?, 
                cpf_adm=?, 
                atuacao_adm=?, 
                cargo_adm=?, 
                nome_empresa=?, 
                cnpj=?, 
                cep_empresa=?, 
                senha=? 
             WHERE id_adm=?`,
            [
                nome_adm,
                sobrenome_adm,
                email,
                cpf_adm,
                atuacao_adm,
                cargo_adm,
                nome_empresa,
                cnpj,
                cep_empresa,
                senha,
                id
            ]
        );

        res.json({
            success: true,
            message: "Administrador atualizado com sucesso"
        });

    } catch (error) {
        console.error("Erro ao atualizar administrador:", error);
        res.status(500).json({
            error: "Erro interno no servidor",
            details: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
});
//#endregion

//#region DELETE ADM
router.delete("/admin/:id_adm", async (req, res) => {
    try {
        const { id_adm } = req.params;

        // 1. Validação básica do ID
        if (!id_adm || isNaN(id_adm)) {
            return res.status(400).json({ error: "ID inválido" });
        }

        // 2. Verificar se o admin existe antes de deletar
        const [admin] = await db.execute(
            "SELECT id_adm FROM adm WHERE id_adm = ?",
            [id_adm]
        );

        if (admin.length === 0) {
            return res.status(404).json({ error: "Administrador não encontrado" });
        }

        // 3. Executar a exclusão
        const [result] = await db.execute(
            "DELETE FROM adm WHERE id_adm = ?",
            [id_adm]
        );

        // 4. Verificar se realmente foi deletado
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Nenhum registro foi excluído" });
        }

        res.json({
            success: true,
            message: "Administrador excluído com sucesso",
            deletedId: id_adm
        });

    } catch (error) {
        console.error("Erro ao excluir administrador:", error);

        // Tratamento específico para erro de FK constraint
        if (error.code === 'ER_ROW_IS_REFERENCED_2') {
            return res.status(409).json({
                error: "Não é possível excluir - administrador possui registros vinculados"
            });
        }

        res.status(500).json({
            error: "Erro interno no servidor ao excluir administrador",
            details: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
});
//#endregion


//#endregion


//LOGIN GLOBAL
router.post("/login", async (req, res) => {
    try {
        console.log("🔍 Recebendo dados de login:", req.body);

        const { email, senha } = req.body;

        if (!email || !senha) {
            console.log("⚠️  Campos obrigatórios faltando");
            return res.status(400).json({ error: "E-mail e senha são obrigatórios" });
        }

        // 1️⃣ Verifica primeiro na tabela de ADMs
        console.log("🔍 Buscando ADM no banco...");
        const [adm] = await db.execute("SELECT * FROM adm WHERE email = ?", [email]);

        if (adm.length > 0) {
            console.log("✅ Administrador encontrado:", adm[0].nome_adm);

            // 🔍 Compara a senha usando bcrypt
            console.log("🔐 Comparando senha do Administrador...");
            const senhaValida = await bcrypt.compare(senha, adm[0].senha);

            if (!senhaValida) {
                console.log("❌ Senha incorreta para o Administrador");
                return res.status(401).json({ error: "Senha incorreta" });
            }

            console.log("🔓 Senha correta! Gerando token...");
            const token = jwt.sign({ id: adm[0].id_adm, tipo: "admin" }, SECRET, { expiresIn: '1h' });

            console.log("✅ Login de Administrador bem-sucedido.");
            return res.json({
                usuario: {
                    id: adm[0].id_adm,
                    nome: adm[0].nome_adm,
                    tipo: "admin"
                },
                token,
                redirect: "/homepage"
            });
        } else {
            console.log("⚠️  Nenhum administrador encontrado com esse e-mail.");
        }

        // 2️⃣ Se não for ADM, verifica na tabela de usuários comuns
        console.log("🔍 Buscando usuário comum no banco...");
        const [usuario] = await db.execute("SELECT * FROM usuario WHERE email = ?", [email]);

        if (usuario.length > 0) {
            console.log("✅ Usuário encontrado:", usuario[0].nome_usuario);

            // 🔍 Compara a senha usando bcrypt
            console.log("🔐 Comparando senha do usuário...");
            const senhaValida = await bcrypt.compare(senha, usuario[0].senha);

            if (!senhaValida) {
                console.log("❌ Senha incorreta para o Usuário");
                return res.status(401).json({ error: "Senha incorreta" });
            }

            console.log("🔓 Senha correta! Gerando token...");
            const token = jwt.sign({ id: usuario[0].id_usuario, tipo: "user" }, SECRET, { expiresIn: '1h' });

            console.log("✅ Login de usuário bem-sucedido.");
            return res.json({
                usuario: {
                    id: usuario[0].id_usuario,
                    nome: usuario[0].nome_usuario,
                    tipo: "user"
                },
                token,
                redirect: "/homepage"
            });
        } else {
            console.log("⚠️  Nenhum usuário encontrado com esse e-mail.");
        }

        // 3️⃣ Se não encontrou em nenhuma tabela
        console.log("❌ Credenciais inválidas");
        return res.status(401).json({ error: "Credenciais inválidas" });

    } catch (error) {
        console.error("🔥 Erro no login:", error.message);
        res.status(500).json({ error: "Erro interno no servidor" });
    }
});

console.log("Rota criada")
export default router