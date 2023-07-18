import { ANIMATION_DURATION, BOARD_SIZE, CANVAS_SIZE, SPACE_BETWEEN_TILES } from "./constants";

export default class Tile {
    private value: number;
    private position: { row: number, col: number };
    private tileSize: number = (CANVAS_SIZE - SPACE_BETWEEN_TILES * (BOARD_SIZE + 1)) / BOARD_SIZE;

    constructor(value: number, position: { row: number, col: number }) {
        this.value = value;
        this.position = position;
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

    isEmpty() {
        return this.value === 0;
    }
}

function lerp(start: number, end: number, t: number) {
    return start * (1 - t) + end * t;
}