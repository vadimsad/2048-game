import { CANVAS_SIZE } from './constants';
import '../style.css';
import Game from './game';
import Renderer from './renderer';

window.addEventListener("DOMContentLoaded", () => {
    const canvas = document.querySelector('#gameCanvas') as HTMLCanvasElement;
    if (!canvas) return;

    canvas.width = CANVAS_SIZE;
    canvas.height = CANVAS_SIZE;

    const game = new Game(canvas);
    game.start();

})