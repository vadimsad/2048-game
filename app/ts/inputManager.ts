import { ArrowKeyDirection } from "./board";
import { SWIPE_THRESHOLD } from "./constants";

export default class InputManager {
    private eventListeners: { [eventName: string]: Function[] };
    private canvas: HTMLCanvasElement;

    private lastX: number | null = null;
    private lastY: number | null = null;
    private dx: number = 0;
    private dy: number = 0;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.eventListeners = {};

        this.init();
    };

    private init() {
        window.addEventListener('keydown', this.handleKeyDown);

        this.canvas.addEventListener('mousedown', this.handleMouseDown);
        this.canvas.addEventListener('mousemove', this.handleMouseMove);
        this.canvas.addEventListener('mouseup', this.handleMouseUp);
    };

    private handleKeyDown = (event: KeyboardEvent) => {
        const arrowKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
        if (arrowKeys.includes(event.key)) {
            event.preventDefault();
            this.emit('arrowKeyDown', event.key);
        };
    };

    private handleMouseDown = (event: MouseEvent) => {
        this.lastX = event.offsetX;
        this.lastY = event.offsetY;
    };

    private handleMouseMove = (event: MouseEvent) => {
        event.preventDefault();
    };

    private handleMouseUp = (event: MouseEvent) => {
        if (this.lastX === null || this.lastY === null) return;

        this.dx = event.offsetX - this.lastX;
        this.dy = event.offsetY - this.lastY;

        if (Math.abs(this.dx) > Math.abs(this.dy) && Math.abs(this.dx) >= SWIPE_THRESHOLD) {
            if (this.dx > 0) {
                this.emit('swipe', ArrowKeyDirection.RIGHT);
            } else {
                this.emit('swipe', ArrowKeyDirection.LEFT);
            }
        } else if (Math.abs(this.dy) > Math.abs(this.dx) && Math.abs(this.dy) >= SWIPE_THRESHOLD) {
            if (this.dy > 0) {
                this.emit('swipe', ArrowKeyDirection.DOWN);
            } else {
                this.emit('swipe', ArrowKeyDirection.UP);
            }
        }
    }

    on(eventName: string, callback: Function) {
        if (!this.eventListeners[eventName]) {
            this.eventListeners[eventName] = [];
        };
        this.eventListeners[eventName].push(callback);
    };

    emit(eventName: string, ...args: unknown[]) {
        const listeners = this.eventListeners[eventName];
        if (listeners) {
            listeners.forEach(callback => callback(...args));
        };
    };
}