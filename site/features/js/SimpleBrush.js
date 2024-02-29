'use strict';

import {Brush} from "./Brush.js";

export class SimpleBrush extends Brush {

    static paint()
    {
        this.ctx.fillStyle = this.ctx.strokeStyle = this.color;

        this.ctx.lineWidth = this.size * 2;
        this.ctx.lineTo(this.pos.x, this.pos.y);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.arc(this.pos.x, this.pos.y, this.size, 0, Math.PI * 2);
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.moveTo(this.pos.x, this.pos.y);

    }

}