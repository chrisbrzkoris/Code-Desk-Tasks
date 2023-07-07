var animationId = null;
var currentPosition = 0;
var direction = 1;

function animateObject() {
  var container = document.getElementById("container");

  function move() {
    currentPosition += direction;
    container.style.transform = "translateX(" + currentPosition + "px)";
    
    if (currentPosition >= 200) {
      direction = -1;
    } else if (currentPosition <= 0) {
      direction = 1;
    }
    
    animationId = requestAnimationFrame(move);
  }

  move();
}

function stopAnimation() {
  if (animationId) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }
}