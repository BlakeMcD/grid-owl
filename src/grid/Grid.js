import React, { useState, useEffect } from 'react'
import CellRenderer from './cellRenderer/cellRenderer';
import Owl from './owl/Owl';
import styles from './Grid.module.css';

function Grid() {

    const [columns, rows] = [5, 5];
    const cellSize = 96;
    const [position, setPosition] = useState({ x: 2, y: 2, direction: 'neutral', facing: 'right' })

    useEffect(() => {
        const handleKeyDown = (event) => {
            setPosition((prevPosition) => {
                let { x, y, facing } = prevPosition;
                let newDirection = 'neutral';
                let newFacing = facing;

                switch (event.key) {
                    case "ArrowUp":
                    case "w":
                        y = Math.max(0, y - 1);
                        newDirection = 'up';
                        break;
                    case "ArrowDown":
                    case "s":
                        y = Math.min((rows - 1), y + 1);
                        newDirection = 'down';
                        break;
                    case "ArrowLeft":
                    case "a":
                        x = Math.max(0, x - 1);
                        newDirection = 'left';
                        newFacing = 'left';
                        break;
                    case "ArrowRight":
                    case "d":
                        x = Math.min((columns - 1), x + 1);
                        newDirection = 'right';
                        newFacing = 'right';
                        break;
                    default:
                        return prevPosition;
                }

                return { x, y, direction: newDirection, facing: newFacing };
            });
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    console.log("position:", position)

    return (
        <div className={styles.root}>
            <div className={styles.gridContainer} style={{ width: `${(cellSize * columns) + (cellSize / 4)}px` }} >
                <CellRenderer columns={columns} rows={rows} cellSize={cellSize} />
                <Owl position={position} cellSize={cellSize} offset={2} />
            </ div>
        </div>
    )
}

export default Grid