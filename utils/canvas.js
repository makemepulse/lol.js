"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var number_1 = require("./number");
function drawEllipse(ctx, centerX, centerY, width, height) {
    ctx.save();
    ctx.scale(width / width, height / width);
    ctx.arc(centerX, centerY, width * 0.5, 0, number_1.PI2, false);
    ctx.restore();
}
exports.drawEllipse = drawEllipse;
