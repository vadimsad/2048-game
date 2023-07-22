import Renderer from './renderer';
import Board, { ArrowKeyDirection } from './board';
import InputManager from './inputManager';
import { BOARD_SIZE } from './constants';
import { readGridFromLS, readScoreFromLS } from './functions';

export default class Game {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    public board: Board;
    private renderer: Renderer;
    private inputManager: InputManager;

    public endlessGame: boolean = false;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d')!;
        this.board = new Board(BOARD_SIZE);
        this.renderer = new Renderer(this.canvas, this.context);
        this.inputManager = new InputManager(canvas);
    }

    public start() {
        const restoredGrid = readGridFromLS();
        const restoredScore = readScoreFromLS();

        this.board.init(restoredGrid, restoredScore);
        this.renderer.drawGrid(this.board.getGrid());
        this.renderer.updateScore(this.board.score);

        this.inputManager.on('arrowKeyDown', this.handleMove);
        this.inputManager.on('swipe', this.handleMove);
    }

    public restart() {
        this.board.init();
        this.renderer.drawGrid(this.board.getGrid());
        this.renderer.updateScore(this.board.score);
    }

    private handleMove = (direction: ArrowKeyDirection) => {
        if (this.board.isTilesMoving()) return;

        this.board.move(direction);

        // Обновление отображения игры после перемещения плиток
        this.renderer.render(this.board.getGrid());
        this.renderer.updateScore(this.board.score);

        if (this.board.isGameOver()) {
            setTimeout(() => {
                alert('No possible move');
                this.restart();
            }, 300)
        }

        if (!this.endlessGame && this.board.isWin()) {
            setTimeout(() => {
                alert('You won!');
                this.restart();
            }, 300);
        }
    }
}