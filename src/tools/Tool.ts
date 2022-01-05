export default class Tool {
    protected canvas: HTMLCanvasElement;
    protected ctx: CanvasRenderingContext2D | null;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas
        this.ctx = canvas.getContext('2d')
        this.destroyEvents();
    }

    set fillColor(color: string) {
        if(this.ctx){
            this.ctx.fillStyle = color;
        }
    }

    set strokeColor(color: string) {
        if(this.ctx){
            this.ctx.strokeStyle = color;
        }
    }

    set lineWidth(width: number) {
        if(this.ctx){
            this.ctx.lineWidth = width;
        }
    }

    destroyEvents() {
        this.canvas.onmouseup = null;
        this.canvas.onmousedown = null;
        this.canvas.onmousemove = null;
    }
}