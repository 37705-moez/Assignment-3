let angle = 0;

setInterval(() => {
  angle += 10;
  document.querySelector("#smiley img").style.transform =
    "rotate(" + angle + "deg)";
}, 200);
