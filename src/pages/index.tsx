import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import { CenteredLayout } from '@layouts';
import { MainContainer } from '@components';

import styles from './index.module.css';

export default function Index() {
  const router = useRouter();

  const handleStartTheGameCallback = useCallback(() => {
    router.push('/game');
  }, [router]);

  return (
    <main className={styles.wrapper}>
      <CenteredLayout>
        <MainContainer
          description="Who wants to be a millionaire?"
          actionText="Start"
          onActionMethod={handleStartTheGameCallback}
        />
      </CenteredLayout>
    </main>
  );
}
