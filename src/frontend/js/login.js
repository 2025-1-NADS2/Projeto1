// login.js

// Seleciona o formulário de login
const form = document.querySelector("form");

// Adiciona o ouvinte de evento para envio do formulário
form.addEventListener("submit", async (event) => {
    event.preventDefault(); // Impede o recarregamento da página

    // Pega os dados do formulário
    const email = document.querySelector("#email").value;
    const senha = document.querySelector("#senha").value;

    try {
        // Envia os dados para o backend
        const resposta = await fetch("http://localhost:3000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, senha }),
        });

        // Verifica se o login foi bem-sucedido
        if (resposta.ok) {
            const dados = await resposta.json();

            // Armazena o token no localStorage (ou sessionStorage)
            localStorage.setItem("token", dados.token);

            // Redireciona para a página inicial
            window.location.href = "index.html";
        } else {
            const erro = await resposta.json();
            alert("Erro ao fazer login: " + erro.mensagem);
        }
    } catch (erro) {
        alert("Erro na requisição: " + erro.message);
    }
});