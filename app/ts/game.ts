import Renderer from './renderer';
import Board, { ArrowKeyDirection } from './board';
import InputManager from './inputManager';
import { BOARD_SIZE } from './constants';

export default class Game {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    private board: Board;
    private renderer: Renderer;
    private inputManager: InputManager;


    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d')!;
        this.board = new Board(BOARD_SIZE);
        this.renderer = new Renderer(this.canvas, this.context);
        this.inputManager = new InputManager(canvas);
    }

    start() {
        this.board.init();
        this.renderer.render(this.board.getGrid());
        this.inputManager.on('arrowKeyDown', this.handleMove);
        this.inputManager.on('swipe', this.handleMove)
    }

    restart() {
        this.board.init();
        this.renderer.render(this.board.getGrid());
        this.renderer.updateScore(this.board.score);
    }

    private handleMove = (direction: ArrowKeyDirection) => {
        this.board.move(direction);

        // Обновление отображения игры после перемещения плиток
        this.renderer.render(this.board.getGrid());
        this.renderer.updateScore(this.board.score);

        if (this.board.isGameOver()) {
            setTimeout(() => {
                alert('No possible move');
                this.restart();
            }, 200)
        }

        if (this.board.isWin()) {
            setTimeout(() => {
                alert('You won!');
                this.restart();
            }, 200);
        }
    }
}