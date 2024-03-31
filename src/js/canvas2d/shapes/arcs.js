import {randomRange} from "../../utils/MathUtils";

export class RotatingArc{
    constructor(centerX, centerY, arcRadius, beginAngle, stopAngle) {
        this.centerX = centerX;
        this.centerY = centerY;
        this.arcRadius = arcRadius;
        this.beginAngle = beginAngle;
        this.stopAngle = stopAngle;

        this.angularVelocity = randomRange(-5, 5);
    }

    update(delta = 16, speed = 1) {
        this.beginAngle += speed * this.angularVelocity * delta / 1000;
        this.stopAngle += speed * this.angularVelocity * delta / 1000;
    }

    draw(context, color) {
        context.save();
        context.beginPath();
        context.translate(this.centerX, this.centerY);
        context.arc(0, 0,
            this.arcRadius,
            this.beginAngle,
            this.stopAngle);
        context.strokeStyle = color;
        context.stroke();
        context.closePath();
        context.restore();
    }
}
