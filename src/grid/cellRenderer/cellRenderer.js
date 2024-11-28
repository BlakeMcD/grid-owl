import React from 'react';
import styles from './cellRenderer.module.css';
import Cell from '../cell/Cell';

function cellRenderer({ columns, rows, cellSize }) {
    if (!columns || !rows || !cellSize) return null;

    const renderColumns = () => {
        const columnsArray = []
        for (let column = 0; column < columns; column++) {
            columnsArray.push(<Cell key={`column-${column}`} cellSize={cellSize} />)
        }
        return columnsArray;
    }

    const renderRows = () => {
        const rowsArray = []
        for (let row = 0; row < rows; row++) {
            rowsArray.push(<div key={`row-${row}`}>
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