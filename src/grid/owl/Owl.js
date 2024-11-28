import React from 'react'
import styles from './Owl.module.css';

function Owl({ position, cellSize, offset }) {
    const { x, y } = position;
    const [xoffset, yoffset] = [x * offset, y * offset]
    return (
        <div className={styles.root} style={{ left: `${(x * cellSize) + xoffset}px`, top: `${(y * cellSize) + yoffset}px` }}>
            <img src={'./owl.png'} alt='Bellroy Owl' />
        </div>
    )
}

export default Owl