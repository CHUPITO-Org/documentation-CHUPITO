import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function Highlight({children, method}) {
  return (
    <div>
      <span className={clsx(styles.httpMethod, styles[method])}>{children}</span>
    </div>
  );
}