'use strict';

import {Canvas} from './Canvas.js';

/* Brushes */
import {Brush} from './Brush.js';
import {EraserBrush} from "./EraserBrush.js";
import {SimpleBrush} from "./SimpleBrush.js";
import RainbowBrush from "./RainbowBrush.js";
import CircleBrush from "./CircleBrush.js";
import RectangleBrush from "./RectangleBrush.js";
import ImageBrush from "./ImageBrush.js";

/* Toolbar buttons */
const brushSize     = document.getElementById('brushSize'),
      brushColor    = document.getElementById('brushColor'),
      eraserBrush   = document.getElementById('eraserBrush'),
      rainbowBrush  = document.getElementById('rainbowBrush'),
      circleBrush   = document.getElementById('circleBrush'),
      rectBrush     = document.getElementById('rectBrush'),
      imageBrush    = document.getElementById('image'),
      mirror        = document.getElementById('mirror'),
      fillColor     = document.getElementById('fillColor'),
      borderColor   = document.getElementById('borderColor'),
      borderWidth   = document.getElementById('borderWidth'),

      checkBoxes    = document.querySelectorAll("input[type='checkbox']");

/* Size & Color of Brush */
brushSize.addEventListener('input', () => Brush.size = brushSize.value );
brushColor.addEventListener('input', () => {
    brushColor.previousElementSibling.style.color = brushColor.value;
    Brush.color = brushColor.value
});

checkBoxes.forEach(checkBox =>
   checkBox.addEventListener('input', evt =>
       checkBox.previousElementSibling.style.color = (checkBox.checked) ? '#0075FF' : 'white'
   )
);

/* Mirror mode */
mirror.addEventListener('input', ev => {
    Brush.mirror = mirror.checked;
});

/* Eraser brush */
eraserBrush.addEventListener('input', ev => {

    if(eraserBrush.checked) {

        Canvas.brush = (eraserBrush.checked) ? EraserBrush : SimpleBrush;

        [rainbowBrush, rectBrush, circleBrush].forEach(brush => {
           brush.checked = false;
           brush.previousElementSibling.style.color = 'white';
        });

    } else Canvas.brush = SimpleBrush;

});

/* Rainbow brush */
rainbowBrush.addEventListener('input', ev => {
    if(rainbowBrush.checked) {

        Canvas.brush = RainbowBrush;

        [eraserBrush, rectBrush, circleBrush, imageBrush].forEach(brush => {
           brush.checked = false;
           brush.previousElementSibling.style.color = 'white';
        });

    } else Canvas.brush = SimpleBrush;
});

/* Rectangle brush */
rectBrush.addEventListener('input', ev => {
    if(rectBrush.checked) {

        Canvas.brush = RectangleBrush;

        [eraserBrush, rainbowBrush, circleBrush, imageBrush].forEach(brush => {
           brush.checked = false;
           brush.previousElementSibling.style.color = 'white';
        });

    } else Canvas.brush = SimpleBrush;
});

/* Circle brush */
circleBrush.addEventListener('input', ev => {
    if(circleBrush.checked) {

        Canvas.brush = CircleBrush;

        [eraserBrush, rainbowBrush, rectBrush, imageBrush].forEach(brush => {
           brush.checked = false;
           brush.previousElementSibling.style.color = 'white';
        });

    } else Canvas.brush = SimpleBrush;
});

/* Image brush */
imageBrush.addEventListener('input', ev => {

    Canvas.brush = ImageBrush;
    Canvas.brush.imageURL = URL.createObjectURL(imageBrush.files[0]);

    imageBrush.value = '';

    imageBrush.previousElementSibling.style.color = '#0075FF';

    [eraserBrush, rainbowBrush, rectBrush, circleBrush].forEach(brush => {
       brush.checked = false;
       brush.previousElementSibling.style.color = 'white';
    });

});

fillColor.addEventListener('input', ev => {
    fillColor.previousElementSibling.style.color = fillColor.value;
    RectangleBrush.fillColor = fillColor.value;
    CircleBrush.fillColor = fillColor.value;
});

borderColor.addEventListener('input', ev => {
    borderColor.previousElementSibling.style.color = borderColor.value;
    RectangleBrush.strokeColor = borderColor.value;
    CircleBrush.strokeColor = borderColor.value;
});

borderWidth.addEventListener('input', ev => {
    CircleBrush.lineWidth = borderWidth.value;
    RectangleBrush.lineWidth = borderWidth.value;
});