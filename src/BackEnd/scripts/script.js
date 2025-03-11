// Classe que controla o menu mobile
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        // Seleciona os elementos do menu mobile
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active"; // Classe usada para ativar/desativar o menu

        // Garante que o "this" dentro de handleClick se refira à classe
        this.handleClick = this.handleClick.bind(this);
    }

    // Anima os links do menu quando o menu é aberto
    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                // Se já tiver animação, remove
                ? (link.style.animation = "")
                // Se não tiver, adiciona um efeito de fade-in com um pequeno atraso entre os itens
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    // Função chamada ao clicar no menu mobile
    handleClick() {
        // Alterna a classe "active" no menu e na lista de links
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks(); // Chama a animação dos links
    }

    // Adiciona o evento de clique no menu mobile
    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    // Inicializa o menu mobile
    init() {
        if (this.mobileMenu) {
            this.addClickEvent(); // Adiciona o evento de clique se o menu existir
        }
        return this;
    }
}

// Cria uma instância da classe, passando os seletores dos elementos do menu
const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);

// Inicia o menu mobile
mobileNavbar.init();

// Função para pegar um número aleatório da API
function getRandomNumber() {
    return fetch('https://www.random.org/integers/?num=1&min=1&max=3&col=1&base=10&format=plain&rnd=new') // API que gera um número aleatório entre 1 e 3
        .then(response => response.text()) // Converte a resposta em texto
        .then(data => parseInt(data)) // Converte o texto para inteiro
        .catch(error => console.error('Erro ao buscar número aleatório:', error)); // Trata qualquer erro
}

// Função para alterar a imagem de fundo com base no número aleatório
function changeBackground() {
    getRandomNumber().then(number => {
        // Definindo o caminho da imagem com base no número retornado
        let imageUrl = '';
        switch (number) {
            case 1:
                imageUrl = '../../../images/cortella.jpg';
                break;
            case 2:
                imageUrl = '../../../images/explicando.jpg';
                break;
            case 3:
                imageUrl = '../../../images/interacao_descontraida.jpg';
                break;
            default:
                imageUrl = '../../../images/interacao_descontraida.jpg'; // Caso nenhum número seja retornado corretamente
                break;
        }

        // Alterando o fundo da página
        document.body.style.backgroundImage = `url(${imageUrl})`;
        document.body.style.backgroundSize = 'cover'; // Faz a imagem cobrir toda a tela
        document.body.style.backgroundPosition = 'center'; // Centraliza a imagem
    });
}

// Chama a função assim que a página for carregada
window.onload = changeBackground;


function olaProfessor() {
    let nome = `Chico`;
    console.log(`Olá, professor ${nome}. Aqui está o console.log que foi solicitado. Sem erros :D`);
}

olaProfessor();
