let angle = 0;

setInterval(function () {
  angle += 10;
  document.getElementById("smiley").style.transform =
    "rotate(" + angle + "deg)";
}, 200);
