import React from 'react';

import styles from './button.module.css';

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button type="button" className={styles.main} {...props}>
      {children}
    </button>
  );
}
