document.getElementById('toggle-dark-mode').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    const icon = this.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon-o');
        icon.classList.add('fa-sun-o');
    } else {
        icon.classList.remove('fa-sun-o');
        icon.classList.add('fa-moon-o');
    }
});

const translations = {
    en: {
        navbarBrand: "My Site",
        navHome: "Home",
        navAbout: "About",
        navProjects: "Projects",
        navContact: "Contact",
        heroTitle: "Welcome to My Personal Website",
        heroDescription: "Here you will find all my information and projects.",
        heroLearnMore: "Learn More",
        aboutTitle: "About Me",
        aboutDescription: "Hello! My name is [Your Name]. I am [Your Profession] and here is a bit about me. Add your personal information, hobbies, and what you want to share.",
        footerText: "My Personal Website",
        toggleLanguage: "Language"
    },
    pt: {
        navbarBrand: "Meu Site",
        navHome: "Home",
        navAbout: "Sobre",
        navProjects: "Projetos",
        navContact: "Contato",
        heroTitle: "Bem-vindo ao Meu Website Pessoal",
        heroDescription: "Aqui você encontrará todas as minhas informações e projetos.",
        heroLearnMore: "Saiba Mais",
        aboutTitle: "Sobre Mim",
        aboutDescription: "Olá! Meu nome é [Seu Nome]. Sou [Sua Profissão] e aqui está um pouco sobre mim. Adicione suas informações pessoais, hobbies, e o que mais desejar compartilhar.",
        footerText: "Meu Website Pessoal",
        toggleLanguage: "Idioma"
    },
    es: {
        navbarBrand: "Mi Sitio",
        navHome: "Inicio",
        navAbout: "Acerca de",
        navProjects: "Proyectos",
        navContact: "Contacto",
        heroTitle: "Bienvenido a Mi Sitio Web Personal",
        heroDescription: "Aquí encontrarás toda mi información y proyectos.",
        heroLearnMore: "Saber Más",
        aboutTitle: "Acerca de Mí",
        aboutDescription: "¡Hola! Mi nombre es [Tu Nombre]. Soy [Tu Profesión] y aquí hay un poco sobre mí. Añade tu información personal, pasatiempos, y lo que quieras compartir.",
        footerText: "Mi Sitio Web Personal",
        toggleLanguage: "Idioma"
    },
    zh: {
        navbarBrand: "我的网站",
        navHome: "主页",
        navAbout: "关于",
        navProjects: "项目",
        navContact: "联系",
        heroTitle: "欢迎来到我的个人网站",
        heroDescription: "在这里你可以找到我的所有信息和项目。",
        heroLearnMore: "了解更多",
        aboutTitle: "关于我",
        aboutDescription: "你好！我的名字是[你的名字]。我是[你的职业]，这里是我的一些信息。添加你的个人信息、爱好和你想分享的内容。",
        footerText: "我的个人网站",
        toggleLanguage: "语言"
    }
};

let currentLanguage = 'pt'; // Default language

function setLanguage(language) {
    currentLanguage = language;
    const texts = translations[language];

    document.getElementById('navbar-brand').textContent = texts.navbarBrand;
    document.getElementById('nav-home').textContent = texts.navHome;
    document.getElementById('nav-about').textContent = texts.navAbout;
    document.getElementById('nav-projects').textContent = texts.navProjects;
    document.getElementById('nav-contact').textContent = texts.navContact;
    document.getElementById('hero-title').textContent = texts.heroTitle;
    document.getElementById('hero-description').textContent = texts.heroDescription;
    document.getElementById('hero-learn-more').textContent = texts.heroLearnMore;
    document.getElementById('about-title').textContent = texts.aboutTitle;
    document.getElementById('about-description').textContent = texts.aboutDescription;
    document.getElementById('footer-text').textContent = texts.footerText;

    const languageButton = document.querySelector('button[data-target="#languageModal"]');
    languageButton.textContent = texts.toggleLanguage;

    $('#languageModal').modal('hide');
}
