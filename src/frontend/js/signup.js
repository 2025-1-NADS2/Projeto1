// signup.js

// Seleciona o formulário de cadastro
const form = document.querySelector("form");

// Adiciona o ouvinte para envio do formulário
form.addEventListener("submit", async (event) => {
    event.preventDefault(); // Evita recarregar a página

    // Captura os dados preenchidos no formulário
    const nome = document.querySelector("#nome").value;
    const email = document.querySelector("#email").value;
    const senha = document.querySelector("#senha").value;

    try {
        // Envia os dados para o backend
        const resposta = await fetch("http://localhost:3000/api/usuarios", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ nome, email, senha }),
        });

        // Se tudo der certo, redireciona para a tela de login
        if (resposta.ok) {
            alert("Cadastro realizado com sucesso!");
            window.location.href = "login.html";
        } else {
            const erro = await resposta.json();
            alert("Erro ao cadastrar: " + erro.mensagem);
        }
    } catch (erro) {
        alert("Erro na requisição: " + erro.message);
    }
});