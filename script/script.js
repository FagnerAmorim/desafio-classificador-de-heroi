const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        // 1. Captura os dados (mesma lógica anterior)
        const nomeHeroi = card.querySelector('h2').innerText.replace('Nome do Herói: ', '').trim();
        const xpTexto = card.querySelector('p:nth-of-type(2)').innerText;
        const xp = parseInt(xpTexto.replace('Nível: ', '').trim());
        
        let nivel = "";

        // 2. Lógica de decisão
        if (xp <= 1000) nivel = "Ferro";
        else if (xp <= 2000) nivel = "Bronze";
        else if (xp <= 5000) nivel = "Prata";
        else if (xp <= 7000) nivel = "Ouro";
        else if (xp <= 8000) nivel = "Platina";
        else if (xp <= 9000) nivel = "Ascendente";
        else if (xp <= 10000) nivel = "Imortal";
        else nivel = "Radiante";

        // 3. Insere a mensagem no verso do card
        const displayResultado = card.querySelector('.resultado-nivel');
        displayResultado.innerHTML = `O Herói de nome <strong>${nomeHeroi}</strong> está no nível de <strong>${nivel}</strong>`;

        // 4. Alterna a classe para girar o card
        card.classList.toggle('flipped');
    });
});