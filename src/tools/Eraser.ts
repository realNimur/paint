import Brush from "./Brush";

export default class Eraser extends Brush {
    draw(x: number, y: number) {
        if (this.ctx) {
            this.ctx.strokeStyle = '#fff';
            this.ctx.lineTo(x, y);
            this.ctx.stroke();
        }
    }
}