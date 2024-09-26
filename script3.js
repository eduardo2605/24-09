function sortearCarta() {
    const naipes = ['Copas', 'Ouros', 'Espadas', 'Paus'];
    const numero = Math.floor(Math.random() * 10) + 1;
    return `${numero} de ${naipes[Math.floor(Math.random() * naipes.length)]}`;
}

const quantidade = parseInt(prompt("Quantas cartas você deseja virar?"), 10);
for (let i = 0; i < quantidade; i++) {
    console.log(sortearCarta());
}
