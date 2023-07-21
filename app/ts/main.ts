import { CANVAS_SIZE } from './constants';
import '../style.css';
import Game from './game';

window.addEventListener("DOMContentLoaded", () => {
    const canvas = document.querySelector('#gameCanvas') as HTMLCanvasElement;
    if (!canvas) return;

    canvas.width = CANVAS_SIZE;
    canvas.height = CANVAS_SIZE;

    const game = new Game(canvas);
    game.start();

    const gameModeButton = document.querySelector('#gameMode') as HTMLButtonElement;
    gameModeButton.onclick = () => {
        game.endlessGame = !game.endlessGame;

        if (game.endlessGame) {
            gameModeButton.innerHTML = 'endless';
        } else {
            gameModeButton.textContent = '2048';
        }
    }
});