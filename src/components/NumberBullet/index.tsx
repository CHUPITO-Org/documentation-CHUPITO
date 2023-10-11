import React from 'react';
import styles from './styles.module.css';

export default function NumberBullet({children, number}) {
  return (
    <div className={styles.bullet}>
        <span>{number}</span>
        <span>{children}</span>
    </div>
  );
}