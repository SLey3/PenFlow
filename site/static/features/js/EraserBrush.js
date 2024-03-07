'use strict';

import {Brush} from "./Brush.js";

export class EraserBrush extends Brush {

    static paint()
    {
        this.ctx.clearRect(this.pos.x-this.size*2, this.pos.y-this.size*2, this.size*4, this.size*4);
    }

}