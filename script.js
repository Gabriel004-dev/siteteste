// ========================================
// MENU MOBILE
// ========================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});


// Fecha o menu ao clicar em um link

document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    });
});


// ========================================
// TEMA ESCURO
// ========================================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const icon = themeToggle.querySelector("i");

    if (document.body.classList.contains("dark")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

        localStorage.setItem("theme", "dark");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

        localStorage.setItem("theme", "light");
    }
});


// Mantém o tema escolhido após atualizar a página

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");

    const icon = themeToggle.querySelector("i");

    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
}


// ========================================
// BOTÃO VOLTAR AO TOPO
// ========================================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// ========================================
// ANO AUTOMÁTICO NO FOOTER
// ========================================

const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();


// ========================================
// FORMULÁRIO DE CONTATO
// ========================================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    alert(
        `Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`
    );

    contactForm.reset();

});


// ========================================
// ANIMAÇÃO AO APARECER NA TELA
// ========================================

const animatedElements = document.querySelectorAll(
    ".skill-card, .project-card, .education-card, .timeline-item"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.1
    }
);


animatedElements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);

});
