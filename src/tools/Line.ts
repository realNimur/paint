import Tool from "./Tool";

export default class Line extends Tool {
    private mouseDown = false;
    private saved = '';
    private startX = 0;
    private startY = 0;


    constructor(canvas: HTMLCanvasElement) {
        super(canvas);
        this.listen();
    }

    listen() {
        this.canvas.onmouseup = this.mouseUpHandler.bind(this);
        this.canvas.onmousedown = this.mouseDownHandler.bind(this);
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
    }

    mouseUpHandler(e: MouseEvent) {
        this.mouseDown = false
    }

    mouseDownHandler(e: MouseEvent) {
        this.mouseDown = true
        this.ctx?.beginPath();
        this.startX = e.pageX - this.canvas.offsetLeft;
        this.startY = e.pageY - this.canvas.offsetTop;
        this.saved = this.canvas.toDataURL()
    }

    mouseMoveHandler(e: MouseEvent) {
        if (this.mouseDown && e.target instanceof HTMLCanvasElement) {
            this.draw(e.pageX - this.canvas.offsetLeft, e.pageY - this.canvas.offsetTop)
        }
    }

    draw(x: number, y: number) {
        const img = new Image();
        img.src = this.saved;
        img.onload = () => {
            this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx?.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
            this.ctx?.beginPath();
            this.ctx?.moveTo(this.startX, this.startY);
            this.ctx?.lineTo(x, y);
            this.ctx?.stroke();
        }
    }
}

