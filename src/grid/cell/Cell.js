import React from 'react'
import styles from './Cell.module.css';

function Cell(props) {

    const { x, y, cellSize } = props;
    return (
        <div className={styles.root} style={{ width: `${cellSize}px`, height: `${cellSize}px` }}>
            Cell
        </div>
    );
}

export default Cell