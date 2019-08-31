$(document).ready(function() {
  particleground(document.getElementById("particles"), {
    dotColor: "#5cbdaa",
    lineColor: "#5cbdaa"
  });

  var intro = $("#intro")[0];
  intro.style.marginTop = -intro.offsetHeight / 2 + "px";
});
