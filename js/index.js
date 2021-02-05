$(document).ready(function () {
  init();
});

function init() {
  initToggler();
  
  $('#intro')[0].style.marginTop = -intro.offsetHeight / 2 + 'px';
  
  initAnimations();

  $('#particles').show();
  particleground(document.getElementById('particles'), {
    dotColor: '#5cbdaa',
    lineColor: '#076956',
    density: 7000
  });

  if (isNight()) {
    $('.toggler').click();
  } else {
    createSocialElements();
  }
  
  setTimeout(() => {
    $('body').animate({
      opacity: 1
    });
  }, 300);
}

function initAnimations() {
  // Wrap every letter in a span
  var textWrapper = document.querySelector('.ml14 .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    '<span class="letter">$&</span>'
  );

  anime
    .timeline({ loop: false })
    .add({
      targets: '.ml14 .line',
      scaleX: [0, 1],
      opacity: [0.5, 1],
      easing: 'easeInOutExpo',
      duration: 900
    })
    .add({
      targets: '.ml14 .letter',
      opacity: [0, 1],
      translateX: [40, 0],
      translateZ: 0,
      scaleX: [0.3, 1],
      easing: 'easeOutExpo',
      duration: 800,
      offset: '-=600',
      delay: (el, i) => 150 + 25 * i
    })
    .add({
      targets: '#bottom .social',
      scaleY: [0, 1],
      opacity: [0.5, 1],
      easing: 'easeInOutExpo',
      duration: 900,
    });
}

function initToggler() {
  $('.toggler').on('click', function () {
    setTimeout(() => {
      $(this).toggleClass('toggler--on');
      $('.toggle-btn').toggleClass('toggle-btn--on');
      $('.toggle-btn').toggleClass('toggle-btn--scale');
      $('#particles').toggle();
      $('body').toggleClass('background--white');
      $('#bottom').toggleClass('fancy');

      if (isFancy()) {
        $('#fancy-intro').hide();
        document.getElementById('image-fixed').src = '';
        $('#intro').fadeIn();
      } else {
        $('#intro').hide();
        document.getElementById('image-fixed').src = 'assets/images/tenor.gif';
        $('#fancy-intro').fadeIn();

        // $()
      }
      createSocialElements();
    }, 200);
  });
}

function createSocialElements() {
  const html = `<a class="social-element" target="_blank" href="https://github.com/nkarampi">
    <span class="fab fa-github"></span>
  </a>
  <a class="social-element" target="_blank" href="https://gitlab.com/nkarampi">
    <span class="fab fa-gitlab"></span>
  </a>
  <a class="social-element" target="_blank" href="https://www.linkedin.com/in/nikolaos-karampinas/">
    <span class="fab fa-linkedin"></span>
  </a>
  <a class="social-element" href="mailto:nkarampi@gmail.com">
    <span class="fas fa-envelope"></span>
  </a>
  <a class="social-element" href="https://drive.google.com/uc?id=1Ca1bKzsxd_5i5aqLWomvaC1aDMNcNHcs&export=download">
    <span class="fas fa-file-alt"></span>
  </a>`;

  if (isFancy()) {
    $('#fancy-intro-social-container').append(html);
    $('#intro-social-container').empty();
    randomizeSocialElements();
  } else {
    $('#intro-social-container').append(html);
    $('#fancy-intro-social-container').empty();
  }
}

function randomizeSocialElements() {
  $('#fancy-intro-social-container a').each(function (i) {
    $($('#fancy-intro-social-container a')[i]).css({
      'color': getRandomColor(),
      'top': getRandomArbitrary(-170, 0),
      'right': getRandomArbitrary(-140 + i * 50, 140 - (i + 1) * 50 )
    });
    const animation = `MoveUpDown ${i * 0.2 + 1}s linear infinite`;
    $($('#fancy-intro-social-container a')[i]).css('animation', animation);
  })
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '';
  for (let i = 0; i < 6; i++) {
    color += letters[getRandomInt(16)];
  }
  return `#${color}`;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function isNight() {
  const date = new Date();
  return date.getHours() >= 21 || date.getHours() <= 5;
}

function isFancy() {
  return $('#fancy-intro').is(':visible');
}
