import React from 'react'
import Googlies from './googlies/Googlies';
import styles from './Owl.module.css';

function Owl({ position, cellSize, offset }) {
    const { x, y, facing } = position;
    const [xoffset, yoffset] = [x * offset, y * offset];

    return (
        <div
            className={styles.root}
            style={{
                left: `${(x * cellSize) + xoffset + (cellSize / 2)}px`,
                top: `${(y * cellSize) + yoffset + (cellSize / 2)}px`,
            }}>
            <Googlies position={position} />
            <img src={'./owl.png'} alt='Bellroy Owl' style={{
                transform: `rotateY(${facing === 'right' ? 180 : 0}deg)`
            }} />
        </div>
    )
}

export default Owl