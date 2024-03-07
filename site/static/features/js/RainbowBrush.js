'use strict';

import {Brush} from "./Brush.js";

export default class RainbowBrush extends Brush {

    static paint()
    {

        this.ctx.fillStyle = this.ctx.strokeStyle = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;

        this.ctx.lineWidth = this.size * 2;
        this.ctx.lineTo(this.pos.x, this.pos.y);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.arc(this.pos.x, this.pos.y, this.size, 0, Math.PI*2);
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.moveTo(this.pos.x, this.pos.y);

    }

}