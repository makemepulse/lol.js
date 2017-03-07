'use strict'

// SOURCE: http://www.html5canvastutorials.com/advanced/html5-canvas-ovals/
function drawEllipse(ctx, centerX, centerY, width, height) {
  ctx.save()

  ctx.scale(width / width, height / width)
  ctx.arc(centerX, centerY, width * 0.5, 0, Math.PI * 2, false)

  ctx.restore()
}

module.exports = {
  drawEllipse: drawEllipse
}