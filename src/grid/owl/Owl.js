import React from 'react'
import styles from './Owl.module.css';

function Owl({ position, offset }) {
    const { x, y } = position;
    return (
        <div className={styles.root} style={{ left: `${x + offset}px`, top: `${y + offset}px` }}>Owl</div>
    )
}

export default Owl