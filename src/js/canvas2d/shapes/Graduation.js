export class Graduation{
    constructor(posX, posY, rotAngle, lineLength, strokeWidth, rotationSpeed) {
        this.posX = posX;
        this.posY = posY;
        this.rotAngle = rotAngle;
        this.lineLength = lineLength;
        this.strokeWidth = strokeWidth;
        this.rotationSpeed = rotationSpeed;
    }

    draw(context, color) {
        context.save();
        context.beginPath();

        context.translate(this.posX, this.posY);
        context.rotate(this.rotAngle);

        context.moveTo(0, 0);
        context.lineTo(-this.lineLength, 0);

        context.strokeStyle = color;
        context.width = this.strokeWidth;
        context.stroke();
        context.closePath();
        context.restore();
    }
}
