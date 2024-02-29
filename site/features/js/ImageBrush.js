'use strict';

import {Brush} from "./Brush.js";

export default class ImageBrush extends Brush{

    static imageURL = '';

    static paint()
    {

        let image = new Image();
        image.src = this.imageURL;

        this.ctx.drawImage(image, this.pos.x-this.size/2, this.pos.y-this.size/2, this.size*2, this.size*2);
    }

}