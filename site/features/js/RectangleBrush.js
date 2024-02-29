'use strict';

import {Brush} from "./Brush.js";

export default class RectangleBrush extends Brush {

    static paint()
    {

        this.ctx.fillStyle = this.fillColor;
        this.ctx.strokeStyle = this.strokeColor;
        this.ctx.lineWidth = this.lineWidth;

        this.ctx.beginPath();
        this.ctx.rect(this.pos.x-this.size/2, this.pos.y-this.size/2, this.size, this.size);
        this.ctx.fill();
        this.ctx.stroke();

    }

}