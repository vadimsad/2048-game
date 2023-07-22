import { CANVAS_SIZE } from './constants';
import Game from './game';
import { saveGridToLS, saveScoreToLS } from './functions';
import '../style.css';

window.addEventListener("DOMContentLoaded", () => {
    const canvas = document.querySelector('#gameCanvas') as HTMLCanvasElement;
    if (!canvas) return;

    const PIXEL_RATIO = window.devicePixelRatio || 1;
    createHiDPICanvas(canvas, CANVAS_SIZE, CANVAS_SIZE, PIXEL_RATIO);

    const game = new Game(canvas);
    game.start();

    const gameModeButton = document.querySelector('#gameMode') as HTMLButtonElement;
    gameModeButton.onclick = () => handleGameModeToggle(gameModeButton, game);

    const restartButton = document.querySelector('#gameRestart') as HTMLButtonElement;
    restartButton.onclick = () => handleGameRestart(game);

    window.addEventListener('beforeunload', () => {
        saveGridToLS(game.board.getGrid());
        saveScoreToLS(game.board.score);
    })
});

function createHiDPICanvas(canvas: HTMLCanvasElement, w: number, h: number, ratio: number) {
    canvas.width = w * ratio;
    canvas.height = h * ratio;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    canvas.getContext("2d")!.setTransform(ratio, 0, 0, ratio, 0, 0);
    return canvas;
}

function handleGameModeToggle(gameModeButton: HTMLButtonElement, game: Game) {
    game.endlessGame = !game.endlessGame;

    if (game.endlessGame) {
        gameModeButton.innerHTML = 'endless';
    } else {
        gameModeButton.textContent = '2048';
    }
}

function handleGameRestart(game: Game) {
    const confirmRestart = confirm('Restart the game?');

    if (confirmRestart) {
        game.restart();
    }
}
