import React from 'react';
import clsx from 'clsx';
import styles from './Googlies.module.css';

function Googlies({ position }) {
    const { facing } = position;

    return (
        <div className={clsx(styles.root, facing === 'right' && styles.right)}>
            <div className={styles.eye}>
                <div className={styles.pupil}></div>
            </div>
            <div className={styles.eye}>
                <div className={styles.pupil}></div>
            </div>
        </div>
    );
}

export default Googlies