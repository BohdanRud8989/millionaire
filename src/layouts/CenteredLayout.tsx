import React from 'react';
import cx from 'classnames';

import styles from './centeredLayout.module.css';

export type CenteredLayoutProps = React.HTMLAttributes<HTMLDivElement>;

export default function CenteredLayout({ className, children, ...props }: CenteredLayoutProps) {
  return (
    <section className={cx(styles.main, className)} {...props}>
      {children}
    </section>
  );
}
