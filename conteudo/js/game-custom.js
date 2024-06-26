// Aqui você adiciona ou remove os containers pra onde devem ir os cards
var containers = [
  // Container com os cards que serão realocados
  // Não mexer
  document.querySelector("#cardPile"),

  // Containers que irão receber os cards
  document.querySelector("#slot-1"),
  document.querySelector('#slot-2'),
  document.querySelector('#slot-3'),
  document.querySelector('#slot-4'),
  document.querySelector('#slot-5'),
  document.querySelector('#slot-6'),
  document.querySelector('#slot-7'),
  document.querySelector('#slot-8'),
  document.querySelector('#slot-9'),
  document.querySelector('#slot-10'),
  document.querySelector('#slot-11')
];

var containers6 = [
  // Container com os cards que serão realocados
  // Não mexer
  document.querySelector("#cardPilej2"),

  // Containers que irão receber os cards
  document.querySelector("#slot-5"),
  document.querySelector('#slot-6'),
  document.querySelector('#slot-7'),
  document.querySelector('#slot-8'),
  document.querySelector('#slot-9')
];

var containers8 = [
  // Container com os cards que serão realocados
  // Não mexer
  document.querySelector("#cardPilej3"),

  // Containers que irão receber os cards
  document.querySelector("#slot-10"),
  document.querySelector('#slot-11')
];

var audio = new Audio();
var erro = 0;

// Solução ao dragindrop
var scrollable = true;

var listener = function (e) {
  console.log(scrollable)
  if (!scrollable) {
    e.preventDefault();
  }
}

document.addEventListener('touchmove', listener, { passive: false });

// Solução ao dragindrop

dragula({
  containers: containers,
  revertOnSpill: true,
  direction: 'vertical',
  accepts: function (el, target, source, sibling) {
    return el.dataset.target == target.id;
  }
}).on('drag', function (el, source) {
  // On mobile this prevents the default page scrolling while dragging an item.
  scrollable = false;
}).on("drop", function () {
  scrollable = true;

  $('#bgmodal-acerto').modal('show')
  $('#feedback-acerto').css('display','block');
  $('#feedback-erro').css('display', 'none'); 
  audio.setAttribute('src', 'audios/acerto.mp3'); //change the source
  audio.load(); //load the new source
  audio.play(); //play

}).on("cancel", function () {
  scrollable = true;

  // Executa o áudio e a modal necessária
  // Também é possível fazer algum teste aqui caso necessário.
  $('#bgmodal-erro').modal('show')
  $('#feedback-erro').css('display','block');
  $('#feedback-acerto').css('display', 'none'); 
  audio.setAttribute('src', 'audios/erro.mp3'); //change the source
  audio.load(); //load the new source
  audio.play(); //play
});

dragula({
  containers: containers6,
  revertOnSpill: true,
  direction: 'vertical',
  accepts: function (el, target, source, sibling) {
    return el.dataset.target == target.id;
  }
}).on('drag', function (el, source) {
  // On mobile this prevents the default page scrolling while dragging an item.
  scrollable = false;
}).on("drop", function () {
  scrollable = true;

  $('#bgmodal-acerto1').modal('show')
  audio.setAttribute('src', 'audios/acerto.mp3'); //change the source
  audio.load(); //load the new source
  audio.play(); //play

}).on("cancel", function () {
  scrollable = true;

  $('#bgmodal-erro1').modal('show')
  audio.setAttribute('src', 'audios/erro.mp3'); //change the source
  audio.load(); //load the new source
  audio.play(); //play
});

dragula({
  containers: containers8,
  revertOnSpill: true,
  direction: 'vertical',
  accepts: function (el, target, source, sibling) {
    return el.dataset.target == target.id;
  }
}).on('drag', function (el, source) {
  // On mobile this prevents the default page scrolling while dragging an item.
  scrollable = false;
}).on("drop", function () {
  scrollable = true;

  $('#bgmodal-acerto2').modal('show')
  audio.setAttribute('src', 'audios/acerto.mp3'); //change the source
  audio.load(); //load the new source
  audio.play(); //play

}).on("cancel", function () {
  scrollable = true;

  $('#bgmodal-erro2').modal('show')
  audio.setAttribute('src', 'audios/erro.mp3'); //change the source
  audio.load(); //load the new source
  audio.play(); //play
});

