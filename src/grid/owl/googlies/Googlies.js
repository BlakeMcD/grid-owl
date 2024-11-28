import React from 'react';
import styles from './Googlies.module.css';

function Googlies() {
    return (
        <div className={styles.root}>
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