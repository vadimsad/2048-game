import { ANIMATION_DURATION, BOARD_SIZE, CANVAS_SIZE, SPACE_BETWEEN_TILES } from "./constants";

export default class Tile {
    private value: number;
    private position: { row: number, col: number };
    private animationStartTime: number | null = null;
    private animationDuration: number = ANIMATION_DURATION;

    public scale: number;
    public tileSize: number = (CANVAS_SIZE - SPACE_BETWEEN_TILES * (BOARD_SIZE + 1)) / BOARD_SIZE;
    public isMoving: boolean = false;
    public currentX: number;
    public currentY: number;
    public targetX: number;
    public targetY: number;
    public hasMerged: boolean = false;

    constructor(value: number, position: { row: number, col: number }, scale: number = 1) {
        this.value = value;
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

    fadeInAndOut() {
        this.animationStartTime = null;

        if (this.scale === 1) {
            this.scale = 1.8;
            this.animationStartTime = performance.now();
        }
    }

    update() {
        if (this.animationStartTime !== null) {

            // Вычисляем прошедшее время с начала анимации
            const elapsedTime = performance.now() - this.animationStartTime;

            // Вычисляем прогресс анимации от 0 до 1
            const progress = Math.min(elapsedTime / this.animationDuration, 1);

            if (this.scale < 1) {
                this.scale = progress; // Обновляем масштаб плитки
            } else if (this.scale > 1) {
                this.scale = oscillate(this.scale, 1, 3, 1)
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

function oscillate(start: number, end: number, t: number, frequency: number) {
    // Вычисляем амплитуду колебаний (половина разницы между начальным и конечным значением)
    const amplitude = (end - start) / 2;

    // Вычисляем смещение (среднее между начальным и конечным значением)
    const offset = (start + end) / 2;

    // Вычисляем значение колебания с помощью синуса
    const oscillation = amplitude * Math.sin(t * 2 * Math.PI * frequency);

    // Возвращаем окончательное значение
    return offset + oscillation;
}
