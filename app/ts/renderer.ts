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
        // const anyTileMoving = grid.some(row => row.some(tile => tile.currentX !== tile.targetX || tile.currentY !== tile.targetY));

        // if (anyTileMoving) {
        //     this.animate(grid);
        // } else {
        //     this.clearCanvas();
        //     this.init(grid);
        // }
        this.animate(grid);
    }

    public drawGrid(grid: Tile[][]) {
        const nonEmptyTiles: Tile[] = [];

        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[row].length; col++) {
                const tile = grid[row][col];
                const tileValue = tile.getValue();

                if (tileValue !== 0) {
                    nonEmptyTiles.push(tile);
                }
            }
        }

        this.drawBackgroundGrid();

        // Отрисовываем пустые плитки
        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[row].length; col++) {
                const tile = grid[row][col];
                const x = tile.currentX;
                const y = tile.currentY;

                if (tile.getValue() === 0) {
                    this.drawTile(x, y, 0, tile.scale);
                }
            }
        }

        // Отрисовываем непустые плитки
        nonEmptyTiles.forEach((tile) => {
            this.drawTile(tile.currentX, tile.currentY, tile.getValue(), tile.scale);
        });
    }

    public updateScore(score: number) {
        this.scoreElement.textContent = score.toString();
    }

    private drawTile(x: number, y: number, tileValue: number, scale: number) {
        this.context.fillStyle = TILE_COLORS[tileValue as keyof typeof TILE_COLORS].background;

        // Умножаем размер плитки на масштаб
        const scaledTileSize = this.tileSize * scale;
        const scaledX = x + (this.tileSize - scaledTileSize) / 2;
        const scaledY = y + (this.tileSize - scaledTileSize) / 2;

        this.createRoundedRect(scaledX, scaledY, scaledTileSize, scaledTileSize, this.cornerRadius);
        this.context.fill();

        if (tileValue !== 0) {
            // Устанавливаем размер шрифта с учетом масштаба
            const scaledFontSize = 28 * scale;
            this.context.font = `bold ${scaledFontSize}px Montserrat`;

            this.context.fillStyle = TILE_COLORS[tileValue as keyof typeof TILE_COLORS].text;
            this.context.textAlign = 'center';
            this.context.textBaseline = 'middle';

            // Умножаем координаты текста на масштаб, чтобы текст был выровнен по центру плитки
            const scaledTextX = x + this.tileSize / 2;
            const scaledTextY = y + this.tileSize / 2;

            this.context.fillText(tileValue.toString(), scaledTextX, scaledTextY);
        }
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

    private clearCanvas() {
        let width = this.canvas.width;
        let height = this.canvas.height;

        this.context.clearRect(0, 0, width, height);
    }

    private animate(grid: Tile[][]) {
        // Обновляем координаты плиток
        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[row].length; col++) {
                const tile = grid[row][col];
                const isTileMoving = tile.currentX !== tile.targetX || tile.currentY !== tile.targetY;
                const isTileFading = tile.scale !== 1;

                if (isTileMoving || isTileFading) {
                    tile.update();
                }

                // if (isTileFading || isTileMoving) {
                //     const animationStartTime = tile.update();

                //     if (animationStartTime === null) {
                //         const { row: newRow, col: newCol } = tile.getPosition();

                //         // grid[newRow][newCol] = tile;
                //         // grid[row][col] = new Tile(0, { row, col });

                //         grid[newRow][newCol].setValue(grid[newRow][newCol].targetValue);
                //     }
                // }
            }
        }

        this.clearCanvas();
        this.drawGrid(grid);

        const anyTileMoving = grid.some(row => row.some(tile => tile.currentX !== tile.targetX || tile.currentY !== tile.targetY));
        const anyTileFading = grid.some(row => row.some(tile => tile.scale !== 1));

        if (anyTileMoving || anyTileFading) {
            requestAnimationFrame(() => this.animate(grid))
        }
    }

    public drawBackgroundGrid() {
        for (let row = 0; row < BOARD_SIZE; row++) {
            for (let col = 0; col < BOARD_SIZE; col++) {
                const x = col * (this.tileSize + SPACE_BETWEEN_TILES) + SPACE_BETWEEN_TILES;
                const y = row * (this.tileSize + SPACE_BETWEEN_TILES) + SPACE_BETWEEN_TILES;

                this.drawTile(x, y, 0, 1);
            }
        }
    }
}