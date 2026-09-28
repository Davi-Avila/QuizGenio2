let acertos = 0;
let i = 0;

const questoes = [
    {
        numero: 1,
        tipo: "Teórica",
        pergunta: "Qual conceito matemático pode ser utilizado para determinar a chance de um jogador conseguir determinado resultado em um jogo?",
        respostas: [
            "Probabilidade",
            "Geometria",
            "Gramática",
            "História"
        ],
        correta: 0,
        acertou: false
    },
    {
        numero: 2,
        tipo: "Teórica",
        pergunta: "Se um jogo utiliza o formato e o tamanho de peças, tabuleiros ou áreas de movimentação, qual conceito matemático está sendo aplicado?",
        respostas: [
            "Estatística",
            "Probabilidade",
            "Geometria ",
            "Porcentagem"
        ],
        correta: 2,
        acertou: false
    },
    {
        numero: 3,
        tipo: "Teórica",
        pergunta: "Se uma mecânica de jogo utiliza uma relação entre duas quantidades, como 2 moedas para cada 5 pontos, qual conceito matemático está sendo aplicado?",
        respostas: [
            "Geometria espacial",
            "Probabilidade",
            "Estatística",
            "Razão e proporção"
        ],
        correta: 3,
        acertou: false
    },
    {
        numero: 4,
        tipo: "Probabilidade",
        pergunta: "Uma moeda é lançada uma vez. Qual é a probabilidade de sair cara?",
        respostas: [
            "1/4",
            "1/2",
            "2/3",
            "1/3"
        ],
        correta: 1,
        acertou: false
    },

    {
        numero: 5,
        tipo: "Probabilidade",
        pergunta: "Um dado comum de 6 faces é lançado. Qual é a probabilidade de sair um número par?",
        respostas: [
            "1/6",
            "1/3",
            "1/2",
            "2/3"
        ],
        correta: 2,
        acertou: false
    },
    {
        numero: 6,
        tipo: "Números imaginários",
        pergunta: "Qual é o valor de i²?",
        respostas: [
            "1",
            "-1",
            "i",
            "-i"
        ],
        correta: 1,
        acertou: false
    },
    {
        numero: 7,
        tipo: "Números imaginários",
        pergunta: "Qual é o resultado de 3i + 5i?",
        respostas: [
            "8",
            "15i",
            "8i",
            "2i"
        ],
        correta: 2,
        acertou: false
    },
    {
        numero: 8,
        tipo: "Números Imaginários",
        pergunta: "Qual é o resultado de i⁴?",
        respostas: [
            "-1",
            "-i",
            "1",
            "i"
        ],
        correta: 2,
        acertou: false
    },
    {
        numero: 9,
        tipo: "Estatística",
        pergunta: "As notas de um aluno foram 6, 7, 8 e 9. Qual é a média aritmética dessas notas?",
        respostas: [
            "7",
            "7,5",
            "8",
            "8,5"
        ],
        correta: 1,
        acertou: false
    },
    {
        numero: 10,
        tipo: "Estatística",
        pergunta: " Um jogador fez 10, 15, 20, 25 e 30 pontos em cinco partidas. Qual foi a média de pontos por partida?",
        respostas: [
            "18",
            "20",
            "22",
            "25"
        ],
        correta: 1,
        acertou: false
    }
];


function mostrarQuestao() {

    document.getElementById("numeroQuestao").textContent =
        `Questão ${questoes[i].numero}`;

    document.getElementById("materia").textContent =
        questoes[i].tipo;

    document.getElementById("pergunta").textContent =
        questoes[i].pergunta;

    document.getElementById("respostaA").textContent =
        questoes[i].respostas[0];

    document.getElementById("respostaB").textContent =
        questoes[i].respostas[1];

    document.getElementById("respostaC").textContent =
        questoes[i].respostas[2];

    document.getElementById("respostaD").textContent =
        questoes[i].respostas[3];
}


function responder(resposta) {

    if (resposta === questoes[i].correta) {
        acertos++;
        questoes[i].acertou = true;
    }

    i++;

    if (i < questoes.length) {
        mostrarQuestao();
    } else {
        localStorage.setItem("acertos", acertos);
        localStorage.setItem("questoes", JSON.stringify(questoes));
        window.location.href = "resultado.html";
    }
}


mostrarQuestao();



function desistir() {
    if (confirm("Você realmente deseja desistir do quiz?")) {
        window.location.href = "index.html";
    }

}
