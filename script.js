let angle = 0;
setInterval(() => {
 angle += 10;
 document.getElementById("smiley").style.transform =
 "rotate(" + angle + "deg)";
}, 200);
