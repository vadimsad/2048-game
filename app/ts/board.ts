import { TARGET } from "./constants";
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

        this.spawnRandomTile();
        this.spawnRandomTile();
    }

    public move(direction: ArrowKeyDirection) {
        let addScore = 0;

        const handleMoveMeta = (meta: { madeMove: boolean, mergeOccured: boolean, mergeSum: number }) => {
            if (meta.madeMove) {
                this.spawnRandomTile();
            }

            if (meta.mergeOccured) {
                addScore = meta.mergeSum;
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

        this.updateScore(addScore);
    }

    private spawnRandomTile() {
        const emptyTile = this.getRandomEmptyTile();

        if (emptyTile) {
            const { row, col } = emptyTile;
            const tileValue = Math.random() < 0.9 ? 2 : 4;
            this.grid[row][col] = new Tile(tileValue, { row, col })
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
        return emptyTiles[randomIndex]
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
                };

                let newRow = row;

                while (newRow > 0 && (this.grid[newRow - 1][col].isEmpty() || this.grid[newRow - 1][col].getValue() === currentTile.getValue())) {
                    newRow--;
                }

                if (newRow === row) {
                    continue;
                } else if (this.grid[newRow][col].isEmpty()) {
                    // Если соседняя плитка пустая, то передвигаем текущую плитку

                    this.grid[newRow][col].setValue(currentTile.getValue());
                    this.grid[row][col].setValue(0);

                    moveData.madeMove = true;
                } else if (this.grid[newRow][col].getValue() === currentTile.getValue()) {
                    // Если соседняя плитка равна текущей, то объединяем их

                    this.grid[newRow][col].setValue(currentTile.getValue() * 2);
                    this.grid[row][col].setValue(0);

                    moveData.madeMove = true;
                    moveData.mergeOccured = true;
                    moveData.mergeSum += this.grid[newRow][col].getValue();
                };

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
                };

                let newRow = row;

                while (newRow < this.size - 1 && (this.grid[newRow + 1][col].isEmpty() || this.grid[newRow + 1][col].getValue() === currentTile.getValue())) {
                    newRow++;
                }

                if (newRow === row) {
                    continue;
                } else if (this.grid[newRow][col].isEmpty()) {
                    // Если соседняя плитка пустая, то передвигаем текущую плитку

                    this.grid[newRow][col].setValue(currentTile.getValue());
                    this.grid[row][col].setValue(0);

                    moveData.madeMove = true;
                } else if (this.grid[newRow][col].getValue() === currentTile.getValue()) {
                    // Если соседняя плитка равна текущей, то объединяем их

                    this.grid[newRow][col].setValue(currentTile.getValue() * 2);
                    this.grid[row][col].setValue(0);

                    moveData.madeMove = true;
                    moveData.mergeOccured = true;
                    moveData.mergeSum += this.grid[newRow][col].getValue();
                };

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
                };

                let newCol = col;

                while (newCol > 0 && (this.grid[row][newCol - 1].isEmpty() || this.grid[row][newCol - 1].getValue() === currentTile.getValue())) {
                    newCol--;
                }

                if (newCol === col) {
                    continue;
                } else if (this.grid[row][newCol].isEmpty()) {
                    // Если соседняя плитка пустая, то передвигаем текущую плитку

                    this.grid[row][newCol].setValue(currentTile.getValue());
                    this.grid[row][col].setValue(0);

                    moveData.madeMove = true;
                } else if (this.grid[row][newCol].getValue() === currentTile.getValue()) {
                    // Если соседняя плитка равна текущей, то объединяем их

                    this.grid[row][newCol].setValue(currentTile.getValue() * 2);
                    this.grid[row][col].setValue(0);

                    moveData.madeMove = true;
                    moveData.mergeOccured = true;
                    moveData.mergeSum += this.grid[row][newCol].getValue();
                };

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
                };

                let newCol = col;

                while (newCol < this.size - 1 && (this.grid[row][newCol + 1].isEmpty() || this.grid[row][newCol + 1].getValue() === currentTile.getValue())) {
                    newCol++;
                }

                if (newCol === col) {
                    continue;
                } else if (this.grid[row][newCol].isEmpty()) {
                    // Если соседняя плитка пустая, то передвигаем текущую плитку

                    this.grid[row][newCol].setValue(currentTile.getValue());
                    this.grid[row][col].setValue(0);

                    moveData.madeMove = true;
                } else if (this.grid[row][newCol].getValue() === currentTile.getValue()) {
                    // Если соседняя плитка равна текущей, то объединяем их

                    this.grid[row][newCol].setValue(currentTile.getValue() * 2);
                    this.grid[row][col].setValue(0);

                    moveData.madeMove = true;
                    moveData.mergeOccured = true;
                    moveData.mergeSum += this.grid[row][newCol].getValue();
                };

            }
        }

        return moveData;
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