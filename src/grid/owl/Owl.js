import React from 'react'
import styles from './Owl.module.css';

function Owl({ position, offset }) {
    const { x, y } = position;
    return (
        <div className={styles.root} style={{ left: `${x}px`, top: `${y}px` }}>
            <img src={'./owl.png'} alt='Bellroy Owl' />
        </div>
    )
}

export default Owl