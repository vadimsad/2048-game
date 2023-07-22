import Tile from "./tile";

export function getTileByPosition(array: Tile[][], row: number, col: number) {
    return array.flat().find(tile => tile.getPosition().row === row && tile.getPosition().col === col);
};

export function delayAnimation(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

export function saveGridToLS(grid: Tile[][]) {
    window.localStorage.setItem('2048-grid', JSON.stringify(grid));
};

export function readGridFromLS(): Tile[][] {
    const savedGrid = window.localStorage.getItem('2048-grid');

    if (savedGrid !== null) {
        const savedTiles: { value: number, position: { row: number, col: number } }[][] = JSON.parse(savedGrid);
        const restoredGrid = savedTiles.map(row => row.map(tileData => new Tile(tileData.value, { row: tileData.position.row, col: tileData.position.col })));

        return restoredGrid;
    }

    return [];
};

export function saveScoreToLS(score: number) {
    window.localStorage.setItem('2048-score', score.toString());
};

export function readScoreFromLS() {
    const savedScore = window.localStorage.getItem('2048-score');

    if (savedScore) {
        return Number(savedScore);
    };

    return 0;
};