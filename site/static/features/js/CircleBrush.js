'use strict';

import {Brush} from "./Brush.js";

export default class CircleBrush extends Brush {

    static paint()
    {

        this.ctx.fillStyle = this.fillColor;
        this.ctx.strokeStyle = this.strokeColor;
        this.ctx.lineWidth = this.lineWidth;

        this.ctx.beginPath();
        this.ctx.arc(this.pos.x, this.pos.y, this.size, 0, Math.PI*2);
        this.ctx.fill();
        this.ctx.stroke();

    }

}