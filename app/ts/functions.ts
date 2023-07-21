import Tile from "./tile";

export function getTileByPosition(array: Tile[][], row: number, col: number) {
    return array.flat().find(tile => tile.getPosition().row === row && tile.getPosition().col === col);
}

export function delayAnimation(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}