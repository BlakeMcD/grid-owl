import React, { useState } from 'react'
import Cell from './cell/Cell';
import styles from './Grid.module.css';

function Grid() {

    const [columns, rows] = [5, 5];
    const cellSize = 64;
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const cellsArray = []

    for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
            cellsArray.push(
                <Cell
                    x={row * cellSize}
                    y={column * cellSize}
                />)
        }
    }

    return (
        <div>
            {cellsArray.length ? cellsArray : null}
        </div>
    )
}

export default Grid