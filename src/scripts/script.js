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
