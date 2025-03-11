class MobileNavbar {
    // O construtor recebe os seletores para o menu mobile, a lista de navegação e os links de navegação
    constructor(mobileMenu, navList, navLinks) {
        // Seleciona os elementos do DOM com base nos seletores fornecidos
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active"; // Classe CSS que será adicionada/removida para ativar/desativar o menu

        // Garante que a função `handleClick` sempre terá o contexto correto quando for chamada
        this.handleClick = this.handleClick.bind(this);
    }

    // Anima os links do menu com um efeito de fade-in quando o menu for ativado
    animateLinks() {
        this.navLinks.forEach((link, index) => {
            // Se o link já tiver uma animação, remove; se não, adiciona uma nova animação
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    // Função chamada ao clicar no botão do menu mobile
    handleClick() {
        this.navList.classList.toggle(this.activeClass); // Ativa/desativa a classe no menu de navegação
        this.mobileMenu.classList.toggle(this.activeClass); // Ativa/desativa a classe no botão do menu
        this.animateLinks(); // Chama a função para animar os links do menu
    }

    // Adiciona um evento de clique ao menu mobile para ativar/desativar a navegação
    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    // Método que inicializa a funcionalidade do menu
    init() {
        if (this.mobileMenu) { // Verifica se o menu mobile existe antes de adicionar o evento
            this.addClickEvent();
        }
        return this;
    }
}

// Cria uma instância da classe MobileNavbar, passando os seletores CSS necessários
const mobileNavbar = new MobileNavbar(
    ".mobile-menu", // Botão do menu mobile
    ".nav-list", // Lista de navegação
    ".nav-list li" // Itens da lista de navegação
);

// Inicializa a funcionalidade do menu
mobileNavbar.init();
