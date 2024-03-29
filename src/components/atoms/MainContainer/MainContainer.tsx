import React from 'react';
import Image from 'next/image';
import { ActionCard } from '../ActionCard';

import styles from './mainContainer.module.css';

type MainContainerProps = {
  description: string;
  actionText: string;
  onActionMethod: () => void;
};

export default function MainContainer({
  description,
  actionText,
  onActionMethod,
}: MainContainerProps) {
  return (
    <div className={styles.grid}>
      <Image
        className={styles.banner}
        src="/thumbs-up.svg"
        alt="Thumbs up"
        width={453}
        height={357}
        priority
      />
      <ActionCard
        description={description}
        actionText={actionText}
        onClick={onActionMethod}
      />
    </div>
  );
}
