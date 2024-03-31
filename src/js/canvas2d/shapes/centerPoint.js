export class CenterPoint {
    constructor(centerX, centerY, drawingContext, fillColor) {
        this.centerX = centerX;
        this.centerY = centerY;
        this.drawingContext = drawingContext;
        this.fillColor = fillColor;
    }

    draw() {
        this.drawingContext.save();
        this.drawingContext.beginPath();
        this.drawingContext.arc(this.centerX / 2, this.centerY / 2, 4, 0, 2 * Math.PI, false);
        this.drawingContext.fillStyle = this.fillColor;
        this.drawingContext.fill();
        this.drawingContext.closePath();
        this.drawingContext.restore();
    }
}
