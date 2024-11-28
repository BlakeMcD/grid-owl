import React, { useState, useEffect } from 'react'
import Cell from './cell/Cell';
import Owl from './owl/Owl';
import styles from './Grid.module.css';

function Grid() {

    const [columns, rows] = [5, 5];
    const cellSize = 64;
    const [position, setPosition] = useState({ x: 3 * cellSize, y: 3 * cellSize })
    const cellComponents = []

    useEffect(() => {
        const handleKeyDown = (event) => {
            setPosition((prevPosition) => {
                let { x, y } = prevPosition;

                switch (event.key) {
                    case "ArrowUp":
                    case "w":
                        y = Math.max(0, y - cellSize);
                        break;
                    case "ArrowDown":
                    case "s":
                        y = Math.min((rows - 1) * cellSize, y + cellSize);
                        break;
                    case "ArrowLeft":
                    case "a":
                        x = Math.max(0, x - cellSize);
                        break;
                    case "ArrowRight":
                    case "d":
                        x = Math.min((columns - 1) * cellSize, x + cellSize);
                        break;
                    default:
                        return prevPosition;
                }

                return { x, y };
            });
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

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
                <Owl position={position} offset={cellSize / 2} />
            </ div>
        </div>
    )
}

export default Grid