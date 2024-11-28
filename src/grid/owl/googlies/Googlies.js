import React from 'react';
import clsx from 'clsx';
import styles from './Googlies.module.css';

function Googlies({ position }) {
    const { direction, facing } = position;

    const renderEye = () => {
        return (
            <div className={styles.eye}>
                <div className={
                    clsx(
                        styles.pupil,
                        direction === 'right' && styles.pupilsRight,
                        direction === 'left' && styles.pupilsLeft,
                        direction === 'up' && styles.pupilsUp,
                        direction === 'down' && styles.pupilsDown,
                    )}></div>
            </div>
        )
    }

    return (
        <div className={clsx(styles.root, facing === 'right' && styles.eyesRight)}>
            {renderEye()}
            {renderEye()}
        </div>
    );
}

export default Googlies