import { ANIMATION_DURATION, SPACE_BETWEEN_TILES, SPAWN_2_PROBABILITY, TARGET } from "./constants";
import { delayAnimation, getTileByPosition } from "./functions";
import Tile from "./tile";

export default class Board {
    private size: number;
    private grid: Tile[][];

    public maxTileValue: number;
    public score: number;

    constructor(size = 4) {
        this.size = size;
        this.grid = [];
        this.score = 0;
        this.maxTileValue = 0;
    }

    public init() {
        this.score = 0;
        this.maxTileValue = 0;
        this.fillGridWithEmptyTiles()

        this.spawnRandomTile(1);
        this.spawnRandomTile(1);

        // this.grid[0][0].setValue(2);
        // this.grid[2][0].setValue(2);
    }

    public move(direction: ArrowKeyDirection) {
        let addToScore = 0;

        const handleMoveMeta = (meta: { madeMove: boolean, mergeOccured: boolean, mergeSum: number }) => {
            if (meta.madeMove) {
                this.spawnRandomTile();
            }

            if (meta.mergeOccured) {
                addToScore = meta.mergeSum;
                this.maxTileValue = Math.max(this.maxTileValue, meta.mergeSum);
            }
        }

        switch (direction) {
            case ArrowKeyDirection.UP: {
                handleMoveMeta(this.moveUp());

                break;
            }
            case ArrowKeyDirection.DOWN: {
                handleMoveMeta(this.moveDown());

                break;
            }
            case ArrowKeyDirection.LEFT: {
                handleMoveMeta(this.moveLeft());

                break;
            }
            case ArrowKeyDirection.RIGHT: {
                handleMoveMeta(this.moveRight());

                break;
            }
        }

        this.updateScore(addToScore);
    }

    private spawnRandomTile(scale: number = 0) {
        const emptyTile = this.getRandomEmptyTile();

        if (emptyTile) {
            const { row, col } = emptyTile;
            const tileValue = Math.random() < SPAWN_2_PROBABILITY ? 2 : 4;
            this.grid[row][col] = new Tile(tileValue, { row, col }, scale);
            this.grid[row][col].fadeIn();
        }
    }

    private getRandomEmptyTile() {
        const emptyTiles: { row: number, col: number }[] = [];

        // Находим все пустые клетки
        for (let row = 0; row < this.grid.length; row++) {
            for (let col = 0; col < this.grid.length; col++) {
                if (this.grid[row][col].getValue() === 0) {
                    emptyTiles.push({ row, col })
                }
            }
        }

        if (emptyTiles.length === 0) {
            return null;
        }

        const randomIndex = Math.floor(Math.random() * emptyTiles.length);
        return emptyTiles[randomIndex];
    }

    private fillGridWithEmptyTiles() {
        this.grid = [];
        for (let row = 0; row < this.size; row++) {
            const gridRow: Tile[] = [];
            for (let col = 0; col < this.size; col++) {
                gridRow.push(new Tile(0, { row, col }));
            }
            this.grid.push(gridRow);
        }
    }

    private updateScore(value: number) {
        this.score += value;
        return this.score;
    }

    private moveUp() {
        let moveData = {
            madeMove: false,
            mergeOccured: false,
            mergeSum: 0,
        };

        for (let col = 0; col < this.size; col++) {
            for (let row = 1; row < this.size; row++) {
                const currentTile = this.grid[row][col];

                if (currentTile.isEmpty()) {
                    continue;
                }

                let prevRow = row - 1;

                while (prevRow >= 0 && this.grid[prevRow][col].isEmpty()) {
                    // Перемещаем текущую плитку вверх на пустую позицию
                    this.grid[prevRow][col] = this.grid[prevRow + 1][col];
                    this.grid[prevRow + 1][col] = new Tile(0, { row: prevRow + 1, col });
                    this.grid[prevRow][col].moveTo(prevRow, col);
                    moveData.madeMove = true;
                    prevRow--;
                }

                if (prevRow >= 0 && this.grid[prevRow][col].getValue() === currentTile.getValue() && !this.grid[prevRow][col].hasMerged) {
                    // Объединяем две плитки с одинаковыми значениями
                    const mergedValue = currentTile.getValue() * 2;
                    this.grid[prevRow][col].setValue(mergedValue);
                    this.grid[prevRow][col].hasMerged = true;
                    this.grid[prevRow][col].moveTo(prevRow, col);

                    currentTile.moveTo(prevRow, col);
                    currentTile.setValue(0);

                    moveData.madeMove = true;
                    moveData.mergeOccured = true;
                    moveData.mergeSum += mergedValue;
                }
            }
        }

        // Сбрасываем флаг объединения плиток
        for (let row = 0; row < this.size; row++) {
            for (let col = 0; col < this.size; col++) {
                if (!this.grid[row][col].isEmpty()) {
                    this.grid[row][col].hasMerged = false;
                }
            }
        }

        return moveData;
    }

    private moveDown() {
        let moveData = {
            madeMove: false,
            mergeOccured: false,
            mergeSum: 0,
        };

        for (let col = 0; col < this.size; col++) {
            for (let row = this.size - 2; row >= 0; row--) {
                const currentTile = this.grid[row][col];

                if (currentTile.isEmpty()) {
                    continue;
                }

                let nextRow = row + 1;

                while (nextRow < this.size && this.grid[nextRow][col].isEmpty()) {
                    // Перемещаем текущую плитку вниз на пустую позицию
                    this.grid[nextRow][col] = this.grid[nextRow - 1][col];
                    this.grid[nextRow - 1][col] = new Tile(0, { row: nextRow - 1, col });
                    this.grid[nextRow][col].moveTo(nextRow, col);
                    moveData.madeMove = true;
                    nextRow++;
                }

                if (nextRow < this.size && this.grid[nextRow][col].getValue() === currentTile.getValue() && !this.grid[nextRow][col].hasMerged) {
                    // Объединяем две плитки с одинаковыми значениями
                    const mergedValue = currentTile.getValue() * 2;
                    this.grid[nextRow][col].setValue(mergedValue);
                    this.grid[nextRow][col].hasMerged = true;
                    this.grid[nextRow][col].moveTo(nextRow, col);

                    currentTile.moveTo(nextRow, col);
                    currentTile.setValue(0);

                    moveData.madeMove = true;
                    moveData.mergeOccured = true;
                    moveData.mergeSum += mergedValue;
                }
            }
        }

        // Сбрасываем флаг объединения плиток
        for (let row = 0; row < this.size; row++) {
            for (let col = 0; col < this.size; col++) {
                if (!this.grid[row][col].isEmpty()) {
                    this.grid[row][col].hasMerged = false;
                }
            }
        }

        return moveData;
    }

    private moveLeft() {
        let moveData = {
            madeMove: false,
            mergeOccured: false,
            mergeSum: 0,
        };

        for (let row = 0; row < this.size; row++) {
            for (let col = 1; col < this.size; col++) {
                const currentTile = this.grid[row][col];

                if (currentTile.isEmpty()) {
                    continue;
                }

                let prevCol = col - 1;

                while (prevCol >= 0 && this.grid[row][prevCol].isEmpty()) {
                    // Перемещаем текущую плитку влево на пустую позицию
                    this.grid[row][prevCol] = this.grid[row][prevCol + 1];
                    this.grid[row][prevCol + 1] = new Tile(0, { row, col: prevCol + 1 });
                    this.grid[row][prevCol].moveTo(row, prevCol);
                    moveData.madeMove = true;
                    prevCol--;
                }

                if (prevCol >= 0 && this.grid[row][prevCol].getValue() === currentTile.getValue() && !this.grid[row][prevCol].hasMerged) {
                    // Объединяем две плитки с одинаковыми значениями
                    const mergedValue = currentTile.getValue() * 2;
                    this.grid[row][prevCol].setValue(mergedValue);
                    this.grid[row][prevCol].hasMerged = true;
                    this.grid[row][prevCol].moveTo(row, prevCol);

                    currentTile.moveTo(row, prevCol);
                    currentTile.setValue(0);

                    moveData.madeMove = true;
                    moveData.mergeOccured = true;
                    moveData.mergeSum += mergedValue;
                }
            }
        }

        // Сбрасываем флаг объединения плиток
        for (let row = 0; row < this.size; row++) {
            for (let col = 0; col < this.size; col++) {
                if (!this.grid[row][col].isEmpty()) {
                    this.grid[row][col].hasMerged = false;
                }
            }
        }

        return moveData;
    }


    private moveRight() {
        let moveData = {
            madeMove: false,
            mergeOccured: false,
            mergeSum: 0,
        };

        for (let row = 0; row < this.size; row++) {
            for (let col = this.size - 2; col >= 0; col--) {
                const currentTile = this.grid[row][col];

                if (currentTile.isEmpty()) {
                    continue;
                }

                let nextCol = col + 1;

                while (nextCol < this.size && this.grid[row][nextCol].isEmpty()) {
                    // Перемещаем текущую плитку вправо на пустую позицию
                    this.grid[row][nextCol] = this.grid[row][nextCol - 1];
                    this.grid[row][nextCol - 1] = new Tile(0, { row, col: nextCol - 1 });
                    this.grid[row][nextCol].moveTo(row, nextCol);
                    moveData.madeMove = true;
                    nextCol++;
                }

                if (nextCol < this.size && this.grid[row][nextCol].getValue() === currentTile.getValue() && !this.grid[row][nextCol].hasMerged) {
                    // Объединяем две плитки с одинаковыми значениями
                    const mergedValue = currentTile.getValue() * 2;
                    this.grid[row][nextCol].setValue(mergedValue);
                    this.grid[row][nextCol].hasMerged = true;
                    this.grid[row][nextCol].moveTo(row, nextCol);

                    currentTile.moveTo(row, nextCol);
                    currentTile.setValue(0);

                    moveData.madeMove = true;
                    moveData.mergeOccured = true;
                    moveData.mergeSum += mergedValue;
                }
            }
        }

        // Сбрасываем флаг объединения плиток
        for (let row = 0; row < this.size; row++) {
            for (let col = 0; col < this.size; col++) {
                if (!this.grid[row][col].isEmpty()) {
                    this.grid[row][col].hasMerged = false;
                }
            }
        }

        return moveData;
    }

    isTilesMoving() {
        return this.grid.some(row => row.some(tile => tile.isMoving));
    }

    isWin(): boolean {
        if (this.maxTileValue === TARGET) {
            return true;
        }

        return false;
    }

    isGameOver(): boolean {
        const tiles = this.grid.flat();
        const emptyTiles = tiles.filter(tile => tile.getValue() === 0);
        const mergeableTiles = tiles.filter(tile => {
            const tileValue = tile.getValue();

            return this.getNeighbours(tile).some(neighbourTile => neighbourTile.getValue() === tileValue);
        })

        if (emptyTiles.length !== 0 || mergeableTiles.length !== 0) {
            return false;
        } else {
            return true
        }
    }

    getNeighbours(tile: Tile) {
        const { row, col } = tile.getPosition();

        return [this.grid[row - 1]?.[col], this.grid[row + 1]?.[col], this.grid[row]?.[col - 1], this.grid[row]?.[col + 1]].filter(tile => tile);
    }

    reset() {
        // Сброс игрового состояния
        this.init();
    }

    public getGrid() {
        return this.grid;
    }

    public getSize() {
        return this.size;
    }
}

export enum ArrowKeyDirection {
    UP = 'ArrowUp',
    DOWN = 'ArrowDown',
    LEFT = 'ArrowLeft',
    RIGHT = 'ArrowRight',
}