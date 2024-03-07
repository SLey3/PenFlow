'use strict';

export class Brush {

    static color = 'black';
    static fillColor = 'transparent';
    static strokeColor = 'black';
    static lineWidth = 2;
    static size = 10;
    static mirror = false;
    static cnv;
    static ctx;
    static pos = {
        x: null,
        y: null
    }

    static paint() {}

}