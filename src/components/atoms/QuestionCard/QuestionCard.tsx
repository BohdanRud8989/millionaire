import React, { useEffect, useState } from 'react';
import { setTimeout } from 'timers';
import { Hexagon } from '@components';
import { QuestionType } from '@types';
import { ANSWER_HANDLING_DELAY } from '../../../utils';

import styles from './questionCard.module.css';

type ActionCardProps = {
  onCorrectAnswer?: () => void;
  onWrongAnswer?: () => void;
  question: QuestionType;
};

export default function QuestionCard({
  question,
  onCorrectAnswer,
  onWrongAnswer,
}: ActionCardProps) {
  const [currentAnswer, setCurrentAnswer] = useState<undefined | string>();
  const [isCorrect, setIsCorrect] = useState<undefined | boolean>();
  const [isHandlingAnswer, setIsHandlingAnswer] = useState<boolean>(false);
  const { text, answers, correct: correctCode } = question;

  useEffect(() => {
    setCurrentAnswer(undefined);
    setIsCorrect(undefined);
  }, [question]);

  const handleOnAnswer = (code: string) => {
    if (!isHandlingAnswer) {
      setCurrentAnswer(code);
      setIsHandlingAnswer(true);
      setTimeout(() => {
        const isCurrentAnswerCorrect = code === correctCode;
        setIsCorrect(isCurrentAnswerCorrect);
        setTimeout(() => {
          setIsHandlingAnswer(false);
          if (isCurrentAnswerCorrect) {
            onCorrectAnswer?.();
          } else {
            onWrongAnswer?.();
          }
        }, ANSWER_HANDLING_DELAY);
      }, ANSWER_HANDLING_DELAY);
    }
  };

  const getVariant = (code: string) => {
    if (currentAnswer !== code) {
      return undefined;
    }
    if (isCorrect === true) {
      return 'correct';
    }
    if (isCorrect === false) {
      return 'wrong';
    }
    return 'selected';
  };

  return (
    <section className={styles.main}>
      <p className={styles.question}>
        {text}
      </p>
      <div className={styles.answers}>
        {answers?.map(({ code, value }) => (
          <Hexagon
            key={code}
            variant={getVariant(code)}
            prefix={code}
            text={value}
            onClick={() => handleOnAnswer(code)}
          />
        ))}
      </div>
    </section>
  );
}
