$(document).ready(function() {
  $("#particles").show();

  particleground(document.getElementById("particles"), {
    dotColor: "#5cbdaa",
    lineColor: "#076956"
  });

  var intro = $("#intro")[0];
  intro.style.marginTop = -intro.offsetHeight / 2 + "px";

  initAnimations();
});

/**
 *
 */
function initAnimations() {
  // Wrap every letter in a span
  var textWrapper = document.querySelector(".ml14 .letters");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime
    .timeline({ loop: false })
    .add({
      targets: ".ml14 .line",
      scaleX: [0, 1],
      opacity: [0.5, 1],
      easing: "easeInOutExpo",
      duration: 900
    })
    .add({
      targets: ".ml14 .letter",
      opacity: [0, 1],
      translateX: [40, 0],
      translateZ: 0,
      scaleX: [0.3, 1],
      easing: "easeOutExpo",
      duration: 800,
      offset: "-=600",
      delay: (el, i) => 150 + 25 * i
    })
    .add({
      targets: "#bottom .social",
      scaleX: [0, 1],
      opacity: [0.5, 1],
      easing: "easeInOutExpo",
      duration: 900
    });
}
