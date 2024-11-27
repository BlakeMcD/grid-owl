import React, { useState } from 'react'
import Cell from './cell/Cell';
import Owl from './owl/Owl';
import styles from './Grid.module.css';

function Grid() {

    const [columns, rows] = [5, 5];
    const cellSize = 64;
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const cellComponents = []

    for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
            cellComponents.push(
                <Cell
                    cellSize={cellSize}
                    x={row * cellSize}
                    y={column * cellSize}
                />)
        }
    }

    return (
        <div className={styles.root}>
            <div className={styles.gridContainer} style={{ width: `${(cellSize * columns) + (cellSize / 2)}px` }} >
                {cellComponents.length ? cellComponents : null}
                <Owl />
            </ div>
        </div>
    )
}

export default Grid