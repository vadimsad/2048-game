import { BOARD_SIZE, CANVAS_SIZE, SPACE_BETWEEN_TILES, TILE_COLORS } from "./constants";
import Tile from "./tile";

export default class Renderer {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    private tileSize: number;
    private cornerRadius: number;
    private scoreElement: HTMLSpanElement;

    constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D, cornerRadius: number = 10) {
        this.canvas = canvas;
        this.context = context;
        this.scoreElement = document.querySelector('#gameScore')!;
        this.tileSize = (CANVAS_SIZE - SPACE_BETWEEN_TILES * (BOARD_SIZE + 1)) / BOARD_SIZE;
        this.cornerRadius = cornerRadius;
    }

    public render(grid: Tile[][]) {

        let width = this.canvas.width;
        let height = this.canvas.height;

        // Очищаем сцену
        this.context.clearRect(0, 0, width, height);

        // Отрисовываем сетку
        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[row].length; col++) {
                const tile = grid[row][col];
                const cellValue = tile.getValue();

                const y = row * (this.tileSize + SPACE_BETWEEN_TILES) + SPACE_BETWEEN_TILES;
                const x = col * (this.tileSize + SPACE_BETWEEN_TILES) + SPACE_BETWEEN_TILES;

                this.context.fillStyle = TILE_COLORS[cellValue as keyof typeof TILE_COLORS].background;
                this.createRoundedRect(x, y, this.tileSize, this.tileSize, this.cornerRadius);
                this.context.fill();

                if (cellValue === 0) continue;

                this.context.font = `bold 40px Montserrat`;
                this.context.fillStyle = TILE_COLORS[cellValue as keyof typeof TILE_COLORS].text;
                this.context.textAlign = 'center';
                this.context.textBaseline = 'middle';
                this.context.fillText(cellValue.toString(), x + this.tileSize / 2, y + this.tileSize / 2);
            }
        }
    }

    public updateScore(score: number) {
        this.scoreElement.textContent = score.toString();
    }

    private createRoundedRect(x: number, y: number, width: number, height: number, radius: number) {
        this.context.beginPath();
        this.context.moveTo(x + radius, y);
        this.context.lineTo(x + width - radius, y);
        this.context.arcTo(x + width, y, x + width, y + radius, radius);
        this.context.lineTo(x + width, y + height - radius);
        this.context.arcTo(x + width, y + height, x + width - radius, y + height, radius);
        this.context.lineTo(x + radius, y + height);
        this.context.arcTo(x, y + height, x, y + height - radius, radius);
        this.context.lineTo(x, y + radius);
        this.context.arcTo(x, y, x + radius, y, radius);
        this.context.closePath();
    }
}