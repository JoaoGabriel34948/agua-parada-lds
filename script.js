let pontuacao = 0;

document.querySelectorAll('.foco').forEach(foco => {
    foco.addEventListener('click', () => {
        foco.style.backgroundColor = '#004d40'; // muda a cor para indicar que foi "limpo"
        foco.style.pointerEvents = 'none'; // desativa o clique para evitar cliques repetidos
        pontuacao += 10;
        document.getElementById('pontuacao').innerText = `Pontuação: ${pontuacao}`;
    });
});
