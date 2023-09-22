function calcularMedia() {
    // Obter os valores das notas e do nome do aluno
    const nomeAluno = document.getElementById("nomeAluno").value;
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const nota4 = parseFloat(document.getElementById("nota4").value);

    // Calcular a média
    const media = (nota1 + nota2 + nota3 + nota4) / 4;

    // Exibir o resultado com base nas condições
    const resultado = document.getElementById("resultado");

    if (media > 9) {
        resultado.textContent = `Parabéns, ${nomeAluno}! Excelente.`;
    } else if (media >= 7) {
        resultado.textContent = `Parabéns, ${nomeAluno}!`;
    } else if (media > 5 && media < 7) {
        resultado.textContent = `Ops! ${nomeAluno}, você está de recuperação.`;
    } else {
        resultado.textContent = `Infelizmente, ${nomeAluno}, você não passou.`;
    }
}
