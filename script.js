import Ball from './classes/Ball.js'


window.addEventListener("load", function () {
  console.log("load...")

  const b = new Ball(this.document.getElementById("ball"))

  let lastTime = 0
  function render(time) {
    if (lastTime) {
      const delta = time - lastTime
      b.update(delta)
    }
    lastTime = time
    window.requestAnimationFrame(render)
  }

  window.requestAnimationFrame(render)

})
