var estruturageral = {
    mensagemfinal: {
        positiva: {
            texto: [
                "Parabéns, você concluiu com sucesso o quiz.", "Se quiser, você pode recomeçar clicando no botão abaixo."
            ],

        },
        negativa: {
            texto: [
                "Foi por pouco!",
                "É sempre uma boa ideia revisar o material e tentar novamente.",
                "Para recomeçar, basta clicar ou tocar no botão abaixo."
            ],

        }

    },
    introducao: {
        texto: [
            "Sejam bem-vindos ao <em>quiz</em> efêmero.",
            "Antes de começar, lembre-se de ler cuidadosamente cada pergunta e escolher a opção que você acredita ser a correta. Após responder, você receberá <em>feedbacks</em> positivos para acertos e construtivos para erros, de modo a ajudar no seu aprendizado.",
            "Sem mais delongas, boa sorte e aproveite o <em>quiz</em>!"
        ],
        // imagem: {
        //     src: "",
        //     title: "",
        //     alt:"",
        //     fonte: ""
        // },
    },
    config: {
        acertos_para_vitoria: 5,
        globalType: "quiz"
    }
}


var lista_feedbacks_genericos = {

    positivo: ["Muito bem! Você acertou", "É isso mesmo, você está certo."],
    negativo: ["Quase lá! Mas não é esta a resposta correta.", "<em>Oops</em>, não é bem isso."]

}


var perguntas = [
    {

        titulo: "Situação problema 1",
        type: "quiz",
        pergunta: {
            texto: "Um usuário retorna ao setor de adaptação relatando que suas lentes de contato gelatinosas esféricas estão causando desconforto e vermelhidão nos olhos após 30 dias de uso."
        },
        respostas: [{
                ordem: "a",
                validacao: true,
                texto: "Oferecer uma avaliação minuciosa das lentes e fornecer orientações adicionais sobre o uso correto das lentes de contato.",
            },
            {
                ordem: "b",
                validacao: false,
                texto: "Antes de mais nada, providenciar troca das lentes de contato para evitar qualquer tipo de problema.",
            },
        ],
        feedbacks: {

            positivo: {
                texto: "Parabéns por oferecer uma avaliação minuciosa das lentes e fornecer orientações adicionais sobre o uso correto das lentes. Isso demonstra um compromisso com o bem-estar do cliente e um cuidado com sua saúde ocular."
            },
            negativo: {
                texto: "Seria importante garantir que o cliente recebeu instruções detalhadas sobre o uso correto das lentes no momento da compra para evitar desconfortos futuros. Além disso, uma revisão precoce das lentes poderia ter sido agendada para identificar e corrigir quaisquer problemas antes que se tornassem mais sérios."
            }
        }
    },
    {

        titulo: "Situação problema 2",
        type: "quiz",
        pergunta: {
            texto: "Um usuário relata dificuldade de visão nítida ao usar suas lentes de contato gelatinosas tóricas após 15 dias de uso."
        },
        respostas: [{
                ordem: "a",
                validacao: false,
                texto: "Orientar que o usuário volte para casa e retorne em 10 dias para ver se o incômodo persiste.",
            },
            {
                ordem: "b",
                validacao: true,
                texto: "Realizar uma avaliação completa da adaptação das lentes de contato e oferecer a oportunidade de troca das lentes se elas requererem ajuste no grau.",
            },
        ],
        feedbacks: {

            positivo: {
                texto: "Excelente trabalho ao realizar uma avaliação completa da adaptação das lentes e fornecer a oportunidade de troca quando as lentes merecerem ajustes no grau. Quanto mais rápido esse problema for identificado, maior será a facilidade da troca com o fabricante."
            },
            negativo: {
                texto: "Pode ser útil oferecer uma revisão de acompanhamento mais precoce para clientes que usam lentes tóricas, dada a sua complexidade de adaptação. Isso poderia ajudar a identificar e corrigir problemas de visão mais rapidamente."
            }
        }
    },
    {

        titulo: "Situação problema 3",
        type: "quiz",
        pergunta: {
            texto: "Um usuário que utiliza lentes de contato especiais para ceratocone entra em contato com o setor de adaptação reportando dificuldade de adaptação após 20 dias de uso das lentes."
        },
        respostas: [{
                ordem: "a",
                validacao: false,
                texto: "Informar ao paciente que aguarde mais alguns dias para ver se o incômodo desaparece e que entre em contato novamente.",
            },
            {
                ordem: "b",
                validacao: true,
                texto: "Agendar imediatamente uma revisão de retorno para rever ajustes necessários a serem realizados nas lentes de contato, além de avaliar a superfície ocular do usuário e a integridade física das lentes de contato.",
            },
        ],
        feedbacks: {

            positivo: {
                texto: "É louvável realizar uma avaliação minuciosa das lentes e dos olhos do usuário, fornecer orientações detalhadas sobre o manuseio correto das lentes especiais e agendar uma revisão de acompanhamento para ajustes necessários. Isso demonstra um alto nível de cuidado e profissionalismo."
            },
            negativo: {
                texto: "Seria ideal revisar a superfície ocular do usuário e as possibilidades de ajustes necessários das lentes de contato. Além disso, uma comunicação mais clara sobre os possíveis sintomas e desconfortos que o usuário poderia enfrentar durante o período de adaptação seria benéfica."
            }
        }
    },
    {

        titulo: "Situação problema 4",
        type: "quiz",
        pergunta: {
            texto: "Um usuário retorna ao setor de adaptação reclamando de visão turva e desconforto ao usar suas lentes de contato gelatinosas esféricas após apenas uma semana de uso."
        },
        respostas: [{
                ordem: "a",
                validacao: true,
                texto: "Realizar todos os passos de avaliação da superfície ocular e da integridade física das lentes de contato a fim de constatar algum imprevisto ocorrido pelo manuseio das lentes de contato.",
            },
            {
                ordem: "b",
                validacao: false,
                texto: "Indicar que o usuário procure outro local para realizar a revisão das suas lentes de contato.",
            },
        ],
        feedbacks: {

            positivo: {
                texto: "É ótimo que o usuário tenha retornado ao setor de adaptação para relatar seus sintomas precocemente. Isso demonstra confiança no serviço oferecido pela empresa e permite uma intervenção rápida para resolver qualquer problema que possa surgir."
            },
            negativo: {
                texto: "Pode ser necessário realizar os passos de avaliação da superfície ocular e da integridade física das lentes de contato. Além disso, fornecer orientações mais detalhadas sobre os sintomas comuns durante a adaptação das lentes de contato pode ajudar os usuários a gerenciarem suas expectativas e cuidarem melhor de seus olhos."
            }
        }
    },
    {

        titulo: "Situação problema 5",
        type: "quiz",
        pergunta: {
            texto: "Um usuário de lentes de contato especiais pós-cirurgia relata desconforto e sensação de corpo estranho nos olhos após 20 dias de uso."
        },
        respostas: [{
                ordem: "a",
                validacao: true,
                texto: "Agendar uma revisão de acompanhamento para o usuário, com ênfase na avaliação da integridade das lentes e lhe passar orientações adicionais do manuseio correto de suas lentes de contato especiais.",
            },
            {
                ordem: "b",
                validacao: false,
                texto: "Trocar as lentes antes que ultrapasse do prazo de troca do fabricante.",
            },
        ],
        feedbacks: {

            positivo: {
                texto: "Parabéns por agendar uma revisão de acompanhamento para o usuário e oferecer orientações adicionais sobre o manuseio correto das lentes especiais. Isso demonstra um compromisso contínuo com o cuidado do paciente e com sua saúde ocular."
            },
            negativo: {
                texto: "É importante revisar a integridade física das lentes de contato e passar orientações adicionais dos cuidados com o manuseio delas, a fim de evitar complicações durante a adaptação. Além disso, é importante ressaltar ao usuário que lentes de contato especiais merecem cuidado redobrado – pela complexidade da sua adaptação e pelo alto custo empregado – e zelo por uma boa saúde visual."
            }
        }
    },
  
]