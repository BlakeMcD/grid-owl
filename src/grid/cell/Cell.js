import React from 'react'
import styles from './Cell.module.css';

function Cell(props) {

    const { cellSize } = props;
    return (
        <span className={styles.root} style={{ width: `${cellSize}px`, height: `${cellSize}px` }}>
            Cell
        </span>
    );
}

export default Cell