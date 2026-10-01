/* =========================================
   QUESTÕES DO 1º ANO
========================================= */

const questoes1Ano = [

    {
        pergunta: "Qual é o valor de x na equação 3x + 6 = 21?",
        alternativas: ["3", "4", "5", "6"],
        correta: 2,
        dicas: [
            "Primeiro, subtraia 6 dos dois lados da equação.",
            "Você terá 3x = 15.",
            "Agora divida 15 por 3."
        ]
    },

    {
        pergunta: "Quanto é 2⁴?",
        alternativas: ["8", "12", "16", "24"],
        correta: 2,
        dicas: [
            "O expoente 4 significa multiplicar o 2 quatro vezes.",
            "Faça 2 × 2 × 2 × 2.",
            "O resultado é maior que 12 e menor que 20."
        ]
    },

    {
        pergunta: "Qual é a raiz quadrada de 169?",
        alternativas: ["11", "12", "13", "14"],
        correta: 2,
        dicas: [
            "Procure um número que multiplicado por ele mesmo dê 169.",
            "12² = 144.",
            "13² = 169."
        ]
    },

    {
        pergunta: "Se f(x) = 3x + 2, qual é o valor de f(4)?",
        alternativas: ["10", "12", "14", "16"],
        correta: 2,
        dicas: [
            "Substitua x por 4.",
            "Calcule 3 × 4 + 2.",
            "3 × 4 é igual a 12."
        ]
    },

    {
        pergunta: "Qual é o resultado de 5² - 4²?",
        alternativas: ["7", "8", "9", "10"],
        correta: 2,
        dicas: [
            "Calcule primeiro 5².",
            "Calcule depois 4².",
            "Subtraia 16 de 25."
        ]
    },

    {
        pergunta: "Qual é a solução positiva da equação x² = 64?",
        alternativas: ["6", "7", "8", "9"],
        correta: 2,
        dicas: [
            "Você precisa encontrar a raiz quadrada de 64.",
            "7² é igual a 49.",
            "8² é igual a 64."
        ]
    },

    {
        pergunta: "Quanto é 25% de 240?",
        alternativas: ["40", "50", "60", "70"],
        correta: 2,
        dicas: [
            "25% corresponde a um quarto.",
            "Divida 240 por 4.",
            "240 ÷ 4 = 60."
        ]
    },

    {
        pergunta: "Qual é a área de um quadrado com lado de 7 cm?",
        alternativas: [
            "14 cm²",
            "28 cm²",
            "49 cm²",
            "56 cm²"
        ],
        correta: 2,
        dicas: [
            "A área do quadrado é lado × lado.",
            "O lado mede 7 cm.",
            "Calcule 7 × 7."
        ]
    },

    {
        pergunta: "Qual é o valor de 2x - 5 = 15?",
        alternativas: ["8", "9", "10", "12"],
        correta: 2,
        dicas: [
            "Some 5 aos dois lados.",
            "Você terá 2x = 20.",
            "Divida 20 por 2."
        ]
    },

    {
        pergunta: "Qual é o resultado de 4² + 3²?",
        alternativas: ["20", "23", "25", "28"],
        correta: 2,
        dicas: [
            "Calcule 4².",
            "Calcule 3².",
            "Some 16 + 9."
        ]
    }

];


/* =========================================
   QUESTÕES DO 2º ANO
========================================= */

const questoes2Ano = [

    {
        pergunta: "Qual é o valor de sen(90°)?",
        alternativas: ["0", "0,5", "1", "2"],
        correta: 2,
        dicas: [
            "Pense no círculo trigonométrico.",
            "O seno de 90° está no ponto mais alto.",
            "O valor máximo do seno é 1."
        ]
    },

    {
        pergunta: "Qual é o próximo termo da sequência 3, 6, 9, 12...?",
        alternativas: ["13", "14", "15", "16"],
        correta: 2,
        dicas: [
            "Observe a diferença entre os termos.",
            "A sequência aumenta sempre pelo mesmo valor.",
            "A razão é 3."
        ]
    },

    {
        pergunta: "Qual é o valor de cos(0°)?",
        alternativas: ["0", "0,5", "1", "2"],
        correta: 2,
        dicas: [
            "Lembre-se dos valores básicos da trigonometria.",
            "O cosseno começa no ponto 1.",
            "cos(0°) = 1."
        ]
    },

    {
        pergunta: "Qual é a área de um círculo de raio 3 cm, considerando π = 3,14?",
        alternativas: [
            "18,84 cm²",
            "28,26 cm²",
            "30,14 cm²",
            "36 cm²"
        ],
        correta: 1,
        dicas: [
            "A fórmula é A = πr².",
            "O raio é 3, então r² = 9.",
            "Faça 3,14 × 9."
        ]
    },

    {
        pergunta: "Qual é o valor de log₁₀(1000)?",
        alternativas: ["2", "3", "4", "10"],
        correta: 1,
        dicas: [
            "Pergunte: 10 elevado a qual número resulta em 1000?",
            "10² = 100.",
            "10³ = 1000."
        ]
    },

    {
        pergunta: "Quanto é 2⁶?",
        alternativas: ["32", "48", "64", "72"],
        correta: 2,
        dicas: [
            "Multiplique 2 por ele mesmo seis vezes.",
            "2⁵ = 32.",
            "2⁶ é o dobro de 32."
        ]
    },

    {
        pergunta: "Em uma PA, o primeiro termo é 4 e a razão é 5. Qual é o segundo termo?",
        alternativas: ["8", "9", "10", "11"],
        correta: 1,
        dicas: [
            "Na PA, some a razão ao termo anterior.",
            "O primeiro termo é 4.",
            "4 + 5 = 9."
        ]
    },

    {
        pergunta: "Qual é o valor de sen(30°)?",
        alternativas: ["0", "0,5", "1", "√3"],
        correta: 1,
        dicas: [
            "É um dos valores básicos da trigonometria.",
            "O seno de 30° é metade.",
            "O resultado é 1/2."
        ]
    },

    {
        pergunta: "Um triângulo retângulo possui catetos 6 e 8. Qual é sua hipotenusa?",
        alternativas: ["9", "10", "12", "14"],
        correta: 1,
        dicas: [
            "Use o Teorema de Pitágoras.",
            "Calcule 6² + 8².",
            "A raiz quadrada de 100 é 10."
        ]
    },

    {
        pergunta: "Qual é o próximo termo da PG 2, 6, 18, 54...?",
        alternativas: ["81", "108", "162", "216"],
        correta: 2,
        dicas: [
            "Observe como cada termo é obtido.",
            "Cada termo é multiplicado por 3.",
            "54 × 3 = 162."
        ]
    }

];


/* =========================================
   QUESTÕES DO 3º ANO
========================================= */

const questoes3Ano = [

    {
        pergunta: "Qual é a probabilidade de obter cara ao lançar uma moeda justa?",
        alternativas: ["1/4", "1/3", "1/2", "2/3"],
        correta: 2,
        dicas: [
            "Uma moeda possui dois resultados possíveis.",
            "A moeda é justa, então os resultados têm a mesma chance.",
            "A probabilidade é 1 dividido por 2."
        ]
    },

    {
        pergunta: "Qual é a distância entre os pontos (0,0) e (3,4)?",
        alternativas: ["3", "4", "5", "7"],
        correta: 2,
        dicas: [
            "Use a fórmula da distância entre dois pontos.",
            "Você pode utilizar o Teorema de Pitágoras.",
            "√(3² + 4²) = √25."
        ]
    },

    {
        pergunta: "Qual é a média dos números 5, 7 e 9?",
        alternativas: ["6", "7", "8", "9"],
        correta: 1,
        dicas: [
            "Some todos os números.",
            "Depois divida pela quantidade de números.",
            "São três números."
        ]
    },

    {
        pergunta: "Qual é o valor de log₂(16)?",
        alternativas: ["2", "3", "4", "5"],
        correta: 2,
        dicas: [
            "Pergunte: 2 elevado a qual número dá 16?",
            "2³ = 8.",
            "2⁴ = 16."
        ]
    },

    {
        pergunta: "Qual é o determinante da matriz [[2,0],[0,4]]?",
        alternativas: ["4", "6", "8", "10"],
        correta: 2,
        dicas: [
            "Para uma matriz 2×2, use ad - bc.",
            "a = 2, d = 4 e os outros elementos são zero.",
            "2 × 4 - 0 × 0 = 8."
        ]
    },

    {
        pergunta: "Qual é a derivada de f(x) = x²?",
        alternativas: ["x", "2x", "x²", "2"],
        correta: 1,
        dicas: [
            "Use a regra da potência.",
            "O expoente desce multiplicando.",
            "A derivada de x² é 2x."
        ]
    },

    {
        pergunta: "Qual é a equação da reta com coeficiente angular 3 e coeficiente linear 2?",
        alternativas: [
            "y = 2x + 3",
            "y = 3x + 2",
            "y = 3x - 2",
            "y = x + 3"
        ],
        correta: 1,
        dicas: [
            "A forma da reta é y = ax + b.",
            "a representa o coeficiente angular.",
            "b representa o coeficiente linear."
        ]
    },

    {
        pergunta: "Qual é a probabilidade de retirar um ás de um baralho de 52 cartas?",
        alternativas: ["1/13", "1/26", "1/4", "4/13"],
        correta: 0,
        dicas: [
            "Um baralho possui 52 cartas.",
            "Existem 4 ases.",
            "A probabilidade é 4/52, que pode ser simplificada."
        ]
    },

    {
        pergunta: "Qual é o valor de √144 + √25?",
        alternativas: ["15", "16", "17", "18"],
        correta: 2,
        dicas: [
            "Calcule √144.",
            "Calcule √25.",
            "Depois some os dois resultados."
        ]
    },

    {
        pergunta: "Quais são as raízes da função f(x) = x² - 9?",
        alternativas: [
            "0 e 9",
            "-3 e 3",
            "-9 e 9",
            "1 e 9"
        ],
        correta: 1,
        dicas: [
            "Iguale a função a zero.",
            "Você terá x² = 9.",
            "Lembre-se de considerar a raiz positiva e a negativa."
        ]
    }

];


/* =========================================
   VARIÁVEIS
========================================= */

let nomeAluno = "";

let serieAluno = 0;

let questoes = [];

let questaoAtual = 0;

let pontos = 0;

let respostaSelecionada = null;

let respostas = [];

let dicasUsadas = [];

let telaAnterior = "inicial";


/* =========================================
   EMBARALHAR QUESTÕES
========================================= */

/*
   Fisher-Yates Shuffle.

   Cria uma cópia da lista e embaralha
   somente essa cópia.

   Dessa forma, a ordem original das
   questões não é modificada.
*/

function embaralharQuestoes(lista) {

    const copia = [...lista];

    for (let i = copia.length - 1; i > 0; i--) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            copia[i],
            copia[j]
        ] = [
            copia[j],
            copia[i]
        ];

    }

    return copia;

}


/* =========================================
   ESCONDER TELAS
========================================= */

function esconderTelas() {

    document
        .querySelectorAll(".tela")
        .forEach(function (tela) {

            tela.classList.add("escondido");

        });

}


/* =========================================
   TELA DE CADASTRO
========================================= */

function mostrarCadastro() {

    telaAnterior = "inicial";

    esconderTelas();

    document
        .getElementById("telaCadastro")
        .classList
        .remove("escondido");

}


/* =========================================
   SELECIONAR SÉRIE
========================================= */

function selecionarSerie(serie, botao) {

    serieAluno = serie;

    document
        .querySelectorAll(".serie")
        .forEach(function (item) {

            item.classList.remove(
                "selecionada"
            );

        });

    botao.classList.add(
        "selecionada"
    );

}


/* =========================================
   CONTINUAR CADASTRO
========================================= */

function continuarCadastro() {

    nomeAluno =
        document
            .getElementById("nome")
            .value
            .trim();


    if (nomeAluno === "") {

        alert(
            "Por favor, digite seu nome."
        );

        return;

    }


    if (serieAluno === 0) {

        alert(
            "Por favor, selecione sua série."
        );

        return;

    }


    document
        .getElementById("boasVindas")
        .textContent =
        "Olá, " + nomeAluno + "!";


    document
        .getElementById("textoSerie")
        .textContent =
        "Você escolheu o " +
        serieAluno +
        "º ano do Ensino Médio.";


    esconderTelas();


    document
        .getElementById("telaPreparacao")
        .classList
        .remove("escondido");

}


/* =========================================
   INICIAR QUIZ
========================================= */

function iniciarQuiz() {

    /*
       Primeiro escolhe o banco de questões
       correspondente à série.
    */

    if (serieAluno === 1) {

        questoes = [...questoes1Ano];

    } else if (serieAluno === 2) {

        questoes = [...questoes2Ano];

    } else {

        questoes = [...questoes3Ano];

    }


    /*
       AQUI ACONTECE O EMBARALHAMENTO.

       Toda vez que uma nova partida começa,
       as 10 questões recebem uma nova ordem.
    */

    questoes =
        embaralharQuestoes(questoes);


    /*
       Reinicia os dados da partida.
    */

    questaoAtual = 0;

    pontos = 0;

    respostaSelecionada = null;


    respostas =
        new Array(
            questoes.length
        ).fill(null);


    dicasUsadas =
        new Array(
            questoes.length
        ).fill(0);


    esconderTelas();


    document
        .getElementById("telaQuiz")
        .classList
        .remove("escondido");


    carregarQuestao();

}


/* =========================================
   VALOR DA QUESTÃO
========================================= */

function valorDaQuestao(indice) {

    const quantidadeDicas =
        dicasUsadas[indice] || 0;


    return 1 -
        (quantidadeDicas * 0.25);

}


/* =========================================
   CARREGAR QUESTÃO
========================================= */

function carregarQuestao() {

    respostaSelecionada =
        respostas[questaoAtual];


    const questao =
        questoes[questaoAtual];


    document
        .getElementById("numeroQuestao")
        .textContent =
        "QUESTÃO " +
        (questaoAtual + 1) +
        " / " +
        questoes.length;


    atualizarValorVisual();


    document
        .getElementById("pergunta")
        .textContent =
        questao.pergunta;


    const area =
        document
            .getElementById(
                "alternativas"
            );


    area.innerHTML = "";


    questao.alternativas.forEach(
        function (
            alternativa,
            indice
        ) {

            const botao =
                document.createElement(
                    "button"
                );


            botao.classList.add(
                "alternativa"
            );


            botao.textContent =
                alternativa;


            if (
                respostas[
                    questaoAtual
                ] === indice
            ) {

                botao.classList.add(
                    "selecionada"
                );

            }


            botao.onclick =
                function () {

                    selecionarResposta(
                        indice,
                        botao
                    );

                };


            area.appendChild(
                botao
            );

        }
    );


    atualizarBotoesDicas();

    atualizarTextoDica();

    atualizarBotaoVoltar();

    atualizarBotaoProximo();

}


/* =========================================
   SELECIONAR RESPOSTA
========================================= */

function selecionarResposta(
    indice,
    botao
) {

    respostaSelecionada =
        indice;


    respostas[
        questaoAtual
    ] = indice;


    document
        .querySelectorAll(
            ".alternativa"
        )
        .forEach(
            function (item) {

                item.classList.remove(
                    "selecionada"
                );

            }
        );


    botao.classList.add(
        "selecionada"
    );


    atualizarBotaoProximo();

}


/* =========================================
   USAR DICA
========================================= */

function usarDica(numeroDica) {

    const quantidadeAtual =
        dicasUsadas[
            questaoAtual
        ];


    if (
        numeroDica <=
        quantidadeAtual
    ) {

        return;

    }


    /*
       Obriga o jogador a usar
       as dicas na ordem.
    */

    if (
        numeroDica !==
        quantidadeAtual + 1
    ) {

        alert(
            "Você precisa usar as dicas na ordem: Dica 1, Dica 2 e Dica 3."
        );

        return;

    }


    dicasUsadas[
        questaoAtual
    ]++;


    atualizarValorVisual();

    atualizarBotoesDicas();

    atualizarTextoDica();

}


/* =========================================
   TEXTO DA DICA
========================================= */

function atualizarTextoDica() {

    const area =
        document.getElementById(
            "textoDica"
        );


    const quantidade =
        dicasUsadas[
            questaoAtual
        ];


    if (
        quantidade === 0
    ) {

        area.classList.add(
            "escondido"
        );

        area.textContent = "";

        return;

    }


    const dica =
        questoes[
            questaoAtual
        ].dicas[
            quantidade - 1
        ];


    area.textContent =
        "💡 " + dica;


    area.classList.remove(
        "escondido"
    );

}


/* =========================================
   BOTÕES DE DICA
========================================= */

function atualizarBotoesDicas() {

    const quantidade =
        dicasUsadas[
            questaoAtual
        ];


    const botao1 =
        document.getElementById(
            "btnDica1"
        );

    const botao2 =
        document.getElementById(
            "btnDica2"
        );

    const botao3 =
        document.getElementById(
            "btnDica3"
        );


    botao1.disabled =
        quantidade >= 1;


    botao2.disabled =
        quantidade < 1 ||
        quantidade >= 2;


    botao3.disabled =
        quantidade < 2 ||
        quantidade >= 3;

}


/* =========================================
   ATUALIZAR VALOR
========================================= */

function atualizarValorVisual() {

    const valor =
        valorDaQuestao(
            questaoAtual
        );


    document
        .getElementById(
            "valorQuestao"
        )
        .textContent =
        "Valor: " +
        valor
            .toFixed(2)
            .replace(
                ".",
                ","
            );

}


/* =========================================
   BOTÃO VOLTAR
========================================= */

function atualizarBotaoVoltar() {

    const botao =
        document.getElementById(
            "btnVoltar"
        );


    botao.disabled =
        questaoAtual === 0;

}


/* =========================================
   BOTÃO PRÓXIMO
========================================= */

function atualizarBotaoProximo() {

    const botao =
        document.getElementById(
            "btnProximo"
        );


    botao.disabled =
        respostaSelecionada === null;


    if (
        questaoAtual ===
        questoes.length - 1
    ) {

        botao.textContent =
            "Finalizar Quiz ✓";

    } else {

        botao.textContent =
            "Próxima →";

    }

}


/* =========================================
   QUESTÃO ANTERIOR
========================================= */

function questaoAnterior() {

    if (
        questaoAtual <= 0
    ) {

        return;

    }


    questaoAtual--;


    carregarQuestao();

}


/* =========================================
   PRÓXIMA QUESTÃO
========================================= */

function proximaQuestao() {

    if (
        respostaSelecionada === null
    ) {

        alert(
            "Escolha uma alternativa antes de continuar."
        );

        return;

    }


    if (
        questaoAtual <
        questoes.length - 1
    ) {

        questaoAtual++;

        carregarQuestao();

    } else {

        finalizarQuiz();

    }

}


/* =========================================
   CALCULAR PONTUAÇÃO
========================================= */

function calcularPontuacao() {

    let total = 0;


    questoes.forEach(
        function (
            questao,
            indice
        ) {

            const resposta =
                respostas[indice];


            if (
                resposta ===
                questao.correta
            ) {

                total +=
                    valorDaQuestao(
                        indice
                    );

            }

        }
    );


    return Number(
        total.toFixed(2)
    );

}


/* =========================================
   FINALIZAR QUIZ
========================================= */

function finalizarQuiz() {

    pontos =
        calcularPontuacao();


    salvarNoRanking();


    mostrarResultado();

}


/* =========================================
   MENSAGEM DA NOTA
========================================= */

function obterMensagem(nota) {

    if (
        nota <= 2.5
    ) {

        return (
            "Você precisa estudar mais. " +
            "Não desanime! Revise os conteúdos, " +
            "faça exercícios e continue praticando. " +
            "Com dedicação, você pode melhorar bastante!"
        );

    }


    if (
        nota <= 5
    ) {

        return (
            "Você está no caminho certo! " +
            "Agora é hora de se esforçar um pouco mais, " +
            "revisar os assuntos em que teve dificuldade " +
            "e continuar praticando."
        );

    }


    if (
        nota <= 7.5
    ) {

        return (
            "Muito bem! Você está em um bom nível. " +
            "Continue mantendo o ritmo de estudos " +
            "e procure novos desafios para aumentar " +
            "ainda mais seus conhecimentos."
        );

    }


    return (
        "Parabéns! Seu desempenho foi excelente! " +
        "Continue estudando, praticando e buscando " +
        "novos conhecimentos. Continue assim e " +
        "não pare de evoluir!"
    );

}


/* =========================================
   MOSTRAR RESULTADO
========================================= */

function mostrarResultado() {

    esconderTelas();


    document
        .getElementById(
            "telaResultado"
        )
        .classList
        .remove(
            "escondido"
        );


    document
        .getElementById(
            "nomeResultado"
        )
        .textContent =
        nomeAluno;


    document
        .getElementById(
            "pontuacao"
        )
        .textContent =
        pontos
            .toFixed(2)
            .replace(
                ".",
                ","
            ) +
        " / 10";


    document
        .getElementById(
            "mensagemFinal"
        )
        .textContent =
        obterMensagem(
            pontos
        );

}


/* =========================================
   OBTER RANKING
========================================= */

function obterRanking() {

    try {

        const dados =
            localStorage.getItem(
                "rankingQuizMatematico"
            );


        if (!dados) {

            return [];

        }


        const ranking =
            JSON.parse(
                dados
            );


        if (
            !Array.isArray(
                ranking
            )
        ) {

            return [];

        }


        return ranking;

    } catch (erro) {

        console.error(
            "Erro ao carregar ranking:",
            erro
        );

        return [];

    }

}


/* =========================================
   SALVAR NO RANKING
========================================= */

function salvarNoRanking() {

    try {

        const ranking =
            obterRanking();


        ranking.push({

            nome:
                nomeAluno,

            pontos:
                pontos,

            serie:
                serieAluno,

            data:
                new Date()
                    .toLocaleDateString(
                        "pt-BR"
                    )

        });


        /*
           Maior pontuação primeiro.
        */

        ranking.sort(
            function (
                a,
                b
            ) {

                return (
                    b.pontos -
                    a.pontos
                );

            }
        );


        /*
           Guarda os 20 melhores.
        */

        const rankingFinal =
            ranking.slice(
                0,
                20
            );


        localStorage.setItem(
            "rankingQuizMatematico",
            JSON.stringify(
                rankingFinal
            )
        );


    } catch (erro) {

        console.error(
            "Não foi possível salvar o ranking:",
            erro
        );

    }

}


/* =========================================
   MOSTRAR RANKING
========================================= */

function mostrarRanking() {

    telaAnterior =
        document
            .getElementById(
                "telaResultado"
            )
            .classList
            .contains(
                "escondido"
            )
            ? "inicial"
            : "resultado";


    esconderTelas();


    document
        .getElementById(
            "telaRanking"
        )
        .classList
        .remove(
            "escondido"
        );


    carregarRanking();

}


/* =========================================
   CARREGAR RANKING
========================================= */

function carregarRanking() {

    const area =
        document.getElementById(
            "listaRanking"
        );


    const ranking =
        obterRanking();


    area.innerHTML = "";


    if (
        ranking.length === 0
    ) {

        area.innerHTML =
            `
            <div class="item-ranking">
                <span class="nome-ranking">
                    Ainda não existem resultados.
                    Seja o primeiro a jogar!
                </span>
            </div>
            `;

        return;

    }


    ranking.forEach(
        function (
            jogador,
            indice
        ) {

            let medalha = "";


            if (
                indice === 0
            ) {

                medalha = "🥇";

            } else if (
                indice === 1
            ) {

                medalha = "🥈";

            } else if (
                indice === 2
            ) {

                medalha = "🥉";

            } else {

                medalha =
                    (
                        indice + 1
                    ) + "º";

            }


            const item =
                document.createElement(
                    "div"
                );


            item.classList.add(
                "item-ranking"
            );


            item.innerHTML =
                `
                <span class="posicao-ranking">
                    ${medalha}
                </span>

                <span class="nome-ranking">
                    ${escaparHTML(
                        jogador.nome
                    )}
                </span>

                <span class="pontos-ranking">
                    ${jogador.pontos
                        .toFixed(2)
                        .replace(
                            ".",
                            ","
                        )}
                    / 10
                </span>
                `;


            area.appendChild(
                item
            );

        }
    );

}


/* =========================================
   PROTEGER RANKING CONTRA HTML
========================================= */

function escaparHTML(texto) {

    const div =
        document.createElement(
            "div"
        );


    div.textContent =
        texto;


    return div.innerHTML;

}


/* =========================================
   VOLTAR DO RANKING
========================================= */

function voltarDoRanking() {

    esconderTelas();


    if (
        telaAnterior ===
        "resultado"
    ) {

        document
            .getElementById(
                "telaResultado"
            )
            .classList
            .remove(
                "escondido"
            );

    } else {

        document
            .getElementById(
                "telaInicial"
            )
            .classList
            .remove(
                "escondido"
            );

    }

}


/* =========================================
   LIMPAR RANKING
========================================= */

function limparRanking() {

    const confirmar =
        confirm(
            "Tem certeza que deseja apagar todo o ranking?"
        );


    if (!confirmar) {

        return;

    }


    try {

        localStorage.removeItem(
            "rankingQuizMatematico"
        );


        carregarRanking();

    } catch (erro) {

        console.error(
            "Erro ao limpar ranking:",
            erro
        );

    }

}


/* =========================================
   JOGAR NOVAMENTE
========================================= */

function jogarNovamente() {

    nomeAluno = "";

    serieAluno = 0;

    questoes = [];

    questaoAtual = 0;

    pontos = 0;

    respostaSelecionada = null;

    respostas = [];

    dicasUsadas = [];


    document
        .getElementById(
            "nome"
        )
        .value = "";


    document
        .querySelectorAll(
            ".serie"
        )
        .forEach(
            function (botao) {

                botao.classList.remove(
                    "selecionada"
                );

            }
        );


    esconderTelas();


    document
        .getElementById(
            "telaInicial"
        )
        .classList
        .remove(
            "escondido"
        );

}
