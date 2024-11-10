// Seleciona todas as seções com a classe 'fade-in'
const sections = document.querySelectorAll('.fade-in');

// Função para adicionar classe 'visible' quando a seção está visível na janela
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

// Observa cada seção para aplicar o efeito de rolagem
sections.forEach(section => {
    observer.observe(section);
});
