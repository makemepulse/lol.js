import { PI2 } from "./number";

export function drawEllipse(ctx: CanvasRenderingContext2D, centerX: number, centerY: number, width: number, height: number) {
  ctx.save()

  ctx.scale(width / width, height / width)
  ctx.arc(centerX, centerY, width * 0.5, 0, PI2, false)

  ctx.restore()
}