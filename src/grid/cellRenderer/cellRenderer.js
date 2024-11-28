import React from 'react';
import Cell from '../cell/Cell';
import styles from './cellRenderer.module.css';

function cellRenderer({ columns, rows, cellSize, cellMargin }) {
    if (!columns || !rows || !cellSize) return null;

    const renderColumns = () => {
        const columnsArray = []
        for (let column = 0; column < columns; column++) {
            columnsArray.push(<Cell key={`column-${column}`} cellSize={cellSize} cellMargin={cellMargin} />)
        }
        return columnsArray;
    }

    const renderRows = () => {
        const rowsArray = []
        for (let row = 0; row < rows; row++) {
            rowsArray.push(<div key={`row-${row}`} style={{ height: `${cellSize + (2 * cellMargin)}px` }}>
                {renderColumns()}
            </div>)
        }
        return rowsArray;
    }

    return (
        <div className={styles.root}>
            {renderRows()}
        </div>
    )
}

export default cellRenderer