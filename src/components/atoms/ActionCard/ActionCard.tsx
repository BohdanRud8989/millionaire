import React from 'react';
import { Button } from '@components';

import styles from './actionCard.module.css';

type ActionCardProps = {
  description: string;
  actionText: string;
  onClick: () => void;
};

export default function ActionCard({ description, actionText, onClick }: ActionCardProps) {
  return (
    <div className={styles.main}>
      <span className={styles.description}>
        {description}
      </span>
      <Button onClick={onClick}>
        <span>{actionText}</span>
      </Button>
    </div>
  );
}
