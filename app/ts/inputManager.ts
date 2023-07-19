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
        this.canvas.addEventListener('mousemove', event => event.preventDefault());
        this.canvas.addEventListener('mouseup', this.handleMouseUp);

        this.canvas.addEventListener('touchstart', this.handleTouchStart);
        this.canvas.addEventListener('touchmove', event => event.preventDefault());
        this.canvas.addEventListener('touchend', this.handleTouchEnd);
    };

    private handleKeyDown = (event: KeyboardEvent) => {
        const arrowKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
        if (arrowKeys.includes(event.key)) {
            event.preventDefault();
            this.emit('arrowKeyDown', event.key);
        };
    };

    private handleMouseDown = (event: MouseEvent) => {

        this.lastX = event.clientX;
        this.lastY = event.clientY;
    };

    private handleMouseUp = (event: MouseEvent) => {

        if (this.lastX === null || this.lastY === null) return;

        this.dx = event.clientX - this.lastX;
        this.dy = event.clientY - this.lastY;

        this.generateSwipe(this.dx, this.dy);
    }

    private handleTouchStart = (event: TouchEvent) => {

        if (event.touches.length > 0) {
            this.lastX = event.touches[0].clientX;
            this.lastY = event.touches[0].clientY;
        }
    }

    private handleTouchEnd = (event: TouchEvent) => {
        if (this.lastX === null || this.lastY === null) return;

        if (event.changedTouches.length > 0) {
            this.dx = event.changedTouches[0].clientX - this.lastX;
            this.dy = event.changedTouches[0].clientY - this.lastY;

            this.generateSwipe(this.dx, this.dy);
        }
    }

    private generateSwipe(dx: number, dy: number) {
        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) >= SWIPE_THRESHOLD) {
            if (dx > 0) {
                this.emit('swipe', ArrowKeyDirection.RIGHT);
            } else {
                this.emit('swipe', ArrowKeyDirection.LEFT);
            }
        } else if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) >= SWIPE_THRESHOLD) {
            if (dy > 0) {
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