import { ANIMATION_DURATION, BOARD_SIZE, CANVAS_SIZE, SPACE_BETWEEN_TILES } from "./constants";

export default class Tile {
    private value: number;
    public targetValue: number;
    public scale: number;
    private position: { row: number, col: number };
    public tileSize: number = (CANVAS_SIZE - SPACE_BETWEEN_TILES * (BOARD_SIZE + 1)) / BOARD_SIZE;
    public animationStartTime: number | null = null;
    private animationDuration: number = ANIMATION_DURATION;
    public isMoving: boolean = false;

    public currentX: number;
    public currentY: number;
    public targetX: number;
    public targetY: number;

    public hasMerged: boolean = false;

    constructor(value: number, position: { row: number, col: number }, scale: number = 1) {
        this.value = value;
        this.targetValue = value;
        this.scale = scale;
        this.position = position;

        this.currentX = position.col * (this.tileSize + SPACE_BETWEEN_TILES) + SPACE_BETWEEN_TILES;
        this.currentY = position.row * (this.tileSize + SPACE_BETWEEN_TILES) + SPACE_BETWEEN_TILES;
        this.targetX = this.currentX;
        this.targetY = this.currentY;
    }

    moveTo(row: number, col: number) {
        this.targetX = col * (this.tileSize + SPACE_BETWEEN_TILES) + SPACE_BETWEEN_TILES;
        this.targetY = row * (this.tileSize + SPACE_BETWEEN_TILES) + SPACE_BETWEEN_TILES;
        this.animationStartTime = null;

        this.setPosition(row, col);

        if (this.currentX !== this.targetX || this.currentY !== this.targetY) {
            this.isMoving = true;
            this.animationStartTime = performance.now();
        }
    }

    fadeIn() {
        this.animationStartTime = null;

        if (this.scale !== 1) {
            this.animationStartTime = performance.now();
        }
    }

    update() {
        if (this.animationStartTime !== null) {

            // Вычисляем прошедшее время с начала анимации
            const elapsedTime = performance.now() - this.animationStartTime;

            // Вычисляем прогресс анимации от 0 до 1
            const progress = Math.min(elapsedTime / this.animationDuration, 1);

            if (this.scale !== 1) {
                this.scale = progress; // Обновляем масштаб плитки
            }

            // Используем функцию lerp для плавного перехода между начальными и целевыми координатами
            this.currentX = lerp(this.currentX, this.targetX, progress);
            this.currentY = lerp(this.currentY, this.targetY, progress);

            // Если анимация завершена, сбрасываем время старта анимации
            if (progress === 1) {
                this.animationStartTime = null;
                this.isMoving = false;
                this.scale = 1
                return this.animationStartTime;
            }
        }
        return this.animationStartTime;
    }

    getValue() {
        return this.value;
    }

    setValue(newValue: number) {
        this.value = newValue;
    }

    getPosition() {
        return this.position;
    }

    setPosition(row: number, col: number) {
        this.position.row = row;
        this.position.col = col;
    }

    isEmpty() {
        return this.value === 0;
    }
}

function lerp(start: number, end: number, t: number) {
    return start * (1 - t) + end * t;
}