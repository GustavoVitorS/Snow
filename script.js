window.onload = function () {

  var canvas = document.getElementById("sky");
  var ctx = canvas.getContext("2d");

  var W = window.innerWidth;
  var H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;

  var mf = 200;
  var flakes = [];

  for (var i = 0; i < mf; i++) {
    flakes.push({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 8 + 4,
      d: Math.random() + 2,
    })
  }

  function drawFlakes() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = "white";
    ctx.beginPath();
    for (var i = 0; i < mf; i++) {
      var f = flakes[i];
      ctx.moveTo(f.x, f.y);
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 4, true);
    }
    ctx.fill();
    moveFlakes();

  }

  var angle = 0;

  function moveFlakes() {
    angle += 0.01;
    for (var i = 0; i < mf; i++) {
      var f = flakes[i];
      f.y += Math.pow(f.d, 4) + 2;
      f.x += Math.sin(angle) * 4;
      if (f.y > H) {
        flakes[i] = { x: Math.random() * W, y: 0, r: f.r, d: f.d };
      }

    }


  }



  setInterval(drawFlakes, 55);


}