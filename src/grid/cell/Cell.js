import React from 'react'
import styles from './Cell.module.css';

function Cell(props) {

    const { cellSize, cellMargin } = props;
    return (
        <div className={styles.root} style={{ width: `${cellSize}px`, height: `${cellSize}px`, margin: `${cellMargin}px` }}>
        </div>
    );
}

export default Cell