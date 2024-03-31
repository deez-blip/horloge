export class Hands {
    constructor(pivotX, pivotY, handLength, handWidth){
        this.pivotX = pivotX;
        this.pivotY = pivotY;
        this.handLength = handLength;
        this.handWidth = handWidth;
    }

    draw(drawingContext, unitOfTime, length, speed = 1, color = 'white') { // Ajout du paramètre `color` avec une valeur par défaut 'white'
        this.currentTime = new Date();
        let unitTime;
        switch(unitOfTime) {
            case 'hours':
                unitTime = this.currentTime.getHours() % 12 + this.currentTime.getMinutes() / 60;
                break;
            case 'minutes':
                unitTime = this.currentTime.getMinutes() + this.currentTime.getSeconds() / 60;
                break;
            case 'seconds':
                unitTime = this.currentTime.getSeconds() + this.currentTime.getMilliseconds() / 1000;
                break;
        }
        const handAngle = (unitTime * 2 * Math.PI / (unitOfTime === 'hours' ? 12 : 60) - Math.PI / 2) * speed;

        drawingContext.save();
        drawingContext.beginPath();
        drawingContext.moveTo(this.pivotX / 2, this.pivotY / 2);
        drawingContext.lineTo(this.pivotX / 2 + this.handLength * length * Math.cos(handAngle), this.pivotY / 2 + this.handLength * length * Math.sin(handAngle));
        drawingContext.strokeStyle = color; // Utilisation de la couleur spécifiée
        drawingContext.lineWidth = this.handWidth;
        drawingContext.stroke();
        drawingContext.closePath();
        drawingContext.restore();
    }
    
    updateTimeWithTimeZone(offset) {
        const now = new Date();
        const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
        const newTime = new Date(utc + (3600000 * offset));
        this.date = newTime;
    }
}