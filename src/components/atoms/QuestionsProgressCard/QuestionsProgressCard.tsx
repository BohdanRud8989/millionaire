import React from 'react';
import { Hexagon } from '@components';
import { QUESTIONS_PRICE_LIST } from '../../../utils';

import styles from './questionsProgressCard.module.css';

type QuestionsProgressCardProps = {
  currentQuestion: number;
};

export default function QuestionsProgressCard({ currentQuestion }: QuestionsProgressCardProps) {
  return (
    <section className={styles.main}>
      { QUESTIONS_PRICE_LIST.map((price, idx) => (
        <Hexagon
          key={price}
          variant={currentQuestion === idx ? 'selected' : 'unset'}
          type="flattened"
          text={price}
          centered
        />
      )).reverse()}
    </section>
  );
}
