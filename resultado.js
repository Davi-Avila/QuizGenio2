const acertos = localStorage.getItem("acertos");
const questoes = JSON.parse(localStorage.getItem("questoes"));

document.getElementById("resultadoQuiz").textContent =
    `Você acertou ${acertos} de 10 questões!`;

const lista = document.getElementById("listaResultados");

questoes.forEach(questao => {

    const resultado = document.createElement("div");

    resultado.classList.add("resultado-questao");

    if (questao.acertou) {
        resultado.textContent = `Questão ${questao.numero}: Acertou`;
    } else {
        resultado.textContent = `Questão ${questao.numero}: Errou`;
    }

    lista.appendChild(resultado);
});

const acertosNum = Number(localStorage.getItem("acertos"));

switch (acertosNum) {

    case 10:
        document.getElementById("mensagemFinal").textContent =
            "Parabéns!";
        break;

    case 9:
        document.getElementById("mensagemFinal").textContent =
            "Quase...";
        break;

    case 8:
        document.getElementById("mensagemFinal").textContent =
            "Mandou bem!";
        break;

    case 7:
    case 6:
        document.getElementById("mensagemFinal").textContent =
            "Valeu a tentativa.";
        break;

    case 5:
    case 4:
    case 3:
    case 2:
    case 1:
        document.getElementById("mensagemFinal").textContent =
            "Melhore.";
        break;

    case 0:
        document.getElementById("mensagemFinal").textContent =
            "Você fez isso por querer.";
        break;
}

