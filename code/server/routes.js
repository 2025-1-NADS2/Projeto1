import express from 'express'
import db from './db.js'

const router = express.Router()

//#region ROTAS USUÁRIO


//#region CREATE USUÁRIO
router.post("/usuario", async (req, res) => {
    try {
        console.log("Body recebido:", req.body); // Adicionei este console.log
        const { nome_usuario, sobrenome_usuario, telefone, email, cpf, senha } = req.body;

        if (!nome_usuario || !sobrenome_usuario || !telefone || !email || !cpf || !senha) {
            return res.status(400).json({ error: "O usuário não preencheu todas as informações necessárias. Por favor, revise o formulário" });
        }

        const [userExistente] = await db.execute("SELECT * FROM usuario WHERE email = ?", [email]);

        if (userExistente.length > 0) {
            return res.status(409).json({ error: "E-mail já cadastrado. Tente outro." });
        }

        const [result] = await db.execute(
            "INSERT INTO usuario(nome_usuario, sobrenome_usuario, telefone, email, cpf, senha) VALUES (?, ?, ?, ?, ?, ?)",
            [nome_usuario, sobrenome_usuario, telefone, email, cpf, senha]
        );
        res.json({ id: result.insertId, nome_usuario, sobrenome_usuario, telefone, email, cpf, senha });
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
        console.log("Body recebido:", req.body);

        // ✅ Desestruturação dos dados
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

        // ✅ Verificação se todos os campos foram preenchidos
        if (!nome_adm || !sobrenome_adm || !email || !cpf_adm || !atuacao_adm || !cargo_adm || !nome_empresa || !cnpj || !cep_empresa || !senha) {
            return res.status(400).json({ error: "Preencha todas as informações necessárias." });
        }

        // ✅ Verificação de duplicidade: email, cpf, cnpj, cep
        const [admExistente] = await db.execute(
            "SELECT * FROM adm WHERE email = ? OR cpf_adm = ? OR cnpj = ? OR cep_empresa = ?",
            [email, cpf_adm, cnpj, cep_empresa]
        );

        if (admExistente.length > 0) {
            return res.status(409).json({ error: "Dados duplicados. Verifique e-mail, CPF, CNPJ e CEP." });
        }

        // ✅ Inserção no banco de dados
        const [result] = await db.execute(
            "INSERT INTO adm (nome_adm, sobrenome_adm, email, cpf_adm, atuacao_adm, cargo_adm, nome_empresa, cnpj, cep_empresa, senha) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [nome_adm, sobrenome_adm, email, cpf_adm, atuacao_adm, cargo_adm, nome_empresa, cnpj, cep_empresa, senha]
        );

        // ✅ Retorno de sucesso
        res.status(201).json({ 
            id: result.insertId,
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
        const { email, senha } = req.body;

        if (!email || !senha) {
            return res.status(400).json({ error: "E-mail e senha são obrigatórios" });
        }

        // 1. Primeiro verifica na tabela de ADMs
        const [adm] = await db.execute(
            "SELECT * FROM adm WHERE email = ? AND senha = ?", 
            [email, senha]
        );

        if (adm.length > 0) {
            return res.json({ 
                id: adm[0].id_adm,
                nome: adm[0].nome_adm,
                tipo: "admin",
                redirect: "/homepage" 
            });
        }

        // 2. Se não encontrou como ADM, verifica na tabela de usuários comuns
        const [usuario] = await db.execute(
            "SELECT * FROM usuario WHERE email = ? AND senha = ?", 
            [email, senha]
        );

        if (usuario.length > 0) {
            return res.json({ 
                id: usuario[0].id_usuario,
                nome: usuario[0].nome_usuario,
                tipo: "user",
                redirect: "/homepage" 
            });
        }

        // 3. Se não encontrou em nenhuma tabela
        return res.status(401).json({ error: "Credenciais inválidas" });

    } catch (error) {
        console.error("Erro no login:", error);
        res.status(500).json({ error: "Erro interno no servidor" });
    }
});

console.log("Rota criada")
export default router