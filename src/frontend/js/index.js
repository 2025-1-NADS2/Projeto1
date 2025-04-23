// index.js

// Recupera o token salvo (foi salvo no login.js)
const token = localStorage.getItem("token");

// Se não houver token, redireciona para login
if (!token) {
    window.location.href = "login.html";
}

// Se houver, tenta buscar os dados do usuário
async function carregarUsuario() {
    try {
        const resposta = await fetch("http://localhost:3000/api/usuarios/me", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (resposta.ok) {
            const usuario = await resposta.json();
            // Exibe no console (ou você pode mostrar na interface se quiser)
            console.log("Usuário logado:", usuario);

            // Exemplo: Mostrar nome se tiver um span com id "nome-usuario"
            const spanNome = document.getElementById("nome-usuario");
            if (spanNome) {
                spanNome.textContent = usuario.nome;
            }
        } else {
            // Token inválido ou expirado
            localStorage.removeItem("token");
            window.location.href = "login.html";
        }
    } catch (erro) {
        console.error("Erro ao buscar dados do usuário:", erro);
        window.location.href = "login.html";
    }
}

// Chama ao carregar a página
carregarUsuario();

// index.js

// Função para logout
const botaoLogout = document.getElementById("logout-btn");
if (botaoLogout) {
    botaoLogout.addEventListener("click", () => {
        localStorage.removeItem("token"); // Remove o token
        window.location.href = "login.html"; // Redireciona para login
    });
}