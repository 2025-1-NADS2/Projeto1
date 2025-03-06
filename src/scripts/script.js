const token = "ff61fa0498f30380e199c757380bc234ab427db37b44b311307daff6c39322b2"; // Substitua pelo seu token
const url = "https://api.sympla.com.br/public/v4/events"; // Endpoint para listar eventos

fetch(url, {
    method: "GET",
    headers: {
        "s_token": token, // Cabeçalho exigido pela Sympla
        "Content-Type": "application/json"
    }
})
    .then(response => response.json()) // Converte a resposta para JSON
    .then(data => {
        console.log(data); // Exibe os eventos no console
    })
    .catch(error => console.error("Erro ao buscar eventos:", error));
