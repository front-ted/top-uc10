$(document).ready(function () {
  criarBody();
  $('#page-1').show();
  cliqueAudio();
  iniciarNavegacao();
});

function criarBody() {
  const $container = $('<div>').addClass('container-fluid');
  const $introDiv = $('<div class="header-hq">').addClass('intro-hq');
  const $titulo = $('<h1 class=h1-introducaoHQ>').text(hqTitulo);
  const $textoIntrodutorio = $('<p class="p-introducaoHQ">').text(hqIntroTexto);

  $introDiv.append($titulo);
  if (hqIntroTexto) {
    $introDiv.append($textoIntrodutorio);
  }

  const $fundo = $('<div>').addClass('fundo');
  $container.append($introDiv);


  hqConfig.forEach((pagina, indice) => {
    const numeroPagina = indice + 1;
    const $secao = $('<div>').addClass('section-hq').attr('id', `page-${numeroPagina}`).hide();
    if(pagina.caminhoImagem != "" && pagina.caminhoImagem != null){
      const $imagem = $('<img>').attr('src', pagina.caminhoImagem).addClass('img-fluid').attr('alt', 'História em quadrinho');
      $secao.append($imagem);
    }

    if (pagina.pergunta) {
      const $divPergunta = $('<div>').addClass('question-div mt-2');
      const $textoPergunta = $('<h3>').addClass("mb-3 mt-3").text(pagina.pergunta);
      $divPergunta.append($textoPergunta);
      $divAlternativas = $("<div class='oda-alternativas row'></div>")
      
      pagina.opcoes.forEach(opcao => {
        const $botaoOpcao = $('<button>').addClass('btn btn-primary mx-1 bto-resposta').text(opcao).on('click', function () {
          verificarResposta($(this), opcao, numeroPagina, pagina);
        });
        $divAlternativaCol = $("<div class='oda-alternativa col-sm-6'></div>");
        $divAlternativaCol.append();
        $divAlternativas.append($botaoOpcao);
        
      });
      $divPergunta.append($divAlternativas)
      $secao.append($divPergunta);
    }

    if (numeroPagina < hqConfig.length) {
      const $botaoProximaPagina = $('<a>').attr('href', `#page-${numeroPagina + 1}`).addClass('seta som-clique text-center').attr('id', `seta${numeroPagina}`);
      const $imagemSeta = $('<img>').attr('src', 'oda/quiz-hq/assets/img/seta.png').addClass('img-arrow');
      const $p = $('<p>').addClass('fonte proximo').text('Próximo');
      $botaoProximaPagina.append($p).append($imagemSeta);
      $secao.append($botaoProximaPagina);
    }

    $fundo.append($secao);
  });

  $container.append($fundo);
  $('.body-hq').append($container);
}

function verificarResposta($botao, respostaSelecionada, numeroPagina, pagina) {
  const isCorrect = respostaSelecionada === pagina.respostaCorreta;
  const feedbackText = isCorrect ? pagina.feedbackPositivo : pagina.feedbackNegativo;


  $botao.siblings().removeClass('positivo negativo');
  $botao.removeClass('positivo negativo').addClass(isCorrect ? 'positivo' : 'negativo');

  if (isCorrect) {
    $('#audio-acerto')[0].play();
  } else {
    $('#audio-errado')[0].play();
  }

  mostrarModalFeedback(numeroPagina, feedbackText, isCorrect);
}

function mostrarModalFeedback(numeroPagina, textoFeedback, isCorrect) {
  const modalId = `feedbackModal${numeroPagina}`;
  const caminhoImagem = isCorrect ? caminhoImagemPositiva : caminhoImagemNegativa;
  const htmlModal = `
    <div class="modal fade" id="${modalId}" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
           <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
          <h5 class="modal-title">Feedback </h5>
          
          </div>
          <div class="modal-body body-feedback">
            <img src="${caminhoImagem}" class="icone-feedback" alt="${isCorrect ? 'sinal positivo' : 'sinal negativo'}">
            <p>${textoFeedback}</p>
          </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
            </div>
        </div>
      </div>
    </div>
  `;

  $('body').append(htmlModal);
  $(`#${modalId}`).modal('show').on('hidden.bs.modal', function () {
    $(this).remove();
  });

}

function cliqueAudio() {
  $('.som-clique').on('click', function () {
    $('#somBotao')[0].play();
  });
}

function iniciarNavegacao() {
  $(".seta").click(function (e) {
    e.preventDefault();
    let destinoId = $(this).attr("href");
    $(destinoId).show();
    $('html, body').animate({
      scrollTop: $(destinoId).offset().top
    }, 1000);

    $(this).closest('.section-hq').find('.seta').hide();
  });
}