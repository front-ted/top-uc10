// NÃO APAGUE A INSTRUÇÃO DA config.js 
// insira quantas imagens desejar e perguntas desejar
// inclua o titulo e texto de introdução se houver
// quando houver imagem com pergunta use o código 

// exemplo
//   {
//     caminhoImagem: "assets/img/Quadros_1_Colorido.jpg",
//     pergunta: "Qual é a cor do céu?",
//     opcoes: ["Azul", "Verde", "Vermelho"],
//     respostaCorreta: "Azul",
//     feedbackPositivo: "Resposta correta! O céu é azul.",
//     feedbackNegativo: "Ops, resposta errada. O céu é azul."
//   },

// se for somente imagem, página sem pergunta use

//   {
//     caminhoImagem: "assets/img/Quadros_2_Colorido.jpg",
//   },

const hqTitulo = "Agenda de um especialista de lentes";
const hqIntroTexto = "Você é um técnico em óptica especialista em lentes de contato e trabalha no setor de adaptação. Hoje, no seu turno da manhã, você receberá três usuários para avaliação das lentes. ";

const caminhoImagemPositiva = "oda/quiz-hq/assets/img/thumb-up.png"; 
const caminhoImagemNegativa = "oda/quiz-hq/assets/img/thumb-down.png";

const hqConfig = [{
        caminhoImagem: "",
        pergunta: "Qual é a melhor orientação a ser dada à usuária de como remover as lentes? ",
        opcoes: ["Remova as lentes com uma ventosa extratora.","Utilize sempre o dedo indicador e o polegar para a remoção e um espelho. Além disso, mantenha as unhas curtas e as mãos limpas."],
        respostaCorreta: "Remova as lentes com uma ventosa extratora.",
        feedbackPositivo: "Parabéns! Sua orientação para a senhora Ana está correta! ",
        feedbackNegativo: "Tente novamente! A ventosa é indicada para lente RGP, não para gelatinosas. Se você sugerir a ventosa, a usuária não conseguirá remover a lente e precisará de um novo retorno à óptica. "
    },
    {
        caminhoImagem: "",
        pergunta: "Conferindo no lensômetro o grau de Rafael, você percebe que a lente do olho direito está de acordo com o indicado, no entanto, a do olho esquerdo está com 0,50 a menos do que o grau que deveria estar. Considerando isso, qual é a sua atitude? ",
        opcoes: ["Você envia a lente ao fabricante para trocá-la pela lente com grau correto. ", "Sugere que o usuário aguarde mais 20 dias para ver se consegue se adaptar."],
        respostaCorreta: "Sugere que o usuário aguarde mais 20 dias para ver se consegue se adaptar.",
        feedbackPositivo: " Isso mesmo! Ao enviar ao fabricante, o ajuste será realizado e o usuário conseguirá fazer a utilização da lente corretamente. ",
        feedbackNegativo: "Você não deve orientar o usuário para que aguarde adaptação considerando que o grau não está correto. Sendo assim, é importante enviar a lente ao fabricante para a realização de alteração técnica. "
    },
    {
        caminhoImagem: "",
        pergunta: "Ao realizar a avaliação de integridade física das lentes, você identifica que há pontos de cálcio na superfície das lentes de contato. Considerando isso, qual seria sua atitude?  ",
        opcoes: ["Envia as lentes ao fabricante para verificação.","Inutiliza as lentes e realiza uma reciclagem com o usuário, esclarecendo as indicações de uso e fazendo novas lentes."],
        respostaCorreta: "Envia as lentes ao fabricante para verificação.",
        feedbackPositivo: "Isso mesmo! Considerando que os pontos de cálcio na superfície ocorrem por mal uso, é adequado fazer novas lentes.",
        feedbackNegativo: "Oops! Considerando o mal uso das lentes pela usuária, o defeito não é de responsabilidade do fabricante."
    }
]