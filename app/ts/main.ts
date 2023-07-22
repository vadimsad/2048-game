import { CANVAS_SIZE } from './constants';
import Game from './game';
import '../style.css';

window.addEventListener("DOMContentLoaded", () => {
    const canvas = document.querySelector('#gameCanvas') as HTMLCanvasElement;
    if (!canvas) return;

    let PIXEL_RATIO = window.devicePixelRatio || 1;

    const createHiDPICanvas = function (w: number, h: number, ratio?: number) {
        if (!ratio) {
            ratio = PIXEL_RATIO;
        };

        canvas.width = w * ratio;
        canvas.height = h * ratio;
        canvas.style.width = w + "px";
        canvas.style.height = h + "px";
        canvas.getContext("2d")!.setTransform(ratio, 0, 0, ratio, 0, 0);
        return canvas;
    }

    createHiDPICanvas(CANVAS_SIZE, CANVAS_SIZE);

    const game = new Game(canvas);
    game.start();

    const gameModeButton = document.querySelector('#gameMode') as HTMLButtonElement;
    gameModeButton.onclick = () => handleGameModeToggle(gameModeButton, game);
});

function handleGameModeToggle(gameModeButton: HTMLButtonElement, game: Game) {
    game.endlessGame = !game.endlessGame;

    if (game.endlessGame) {
        gameModeButton.innerHTML = 'endless';
    } else {
        gameModeButton.textContent = '2048';
    }
}
