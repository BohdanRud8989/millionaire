import {useRouter} from "next/router";
import { useCallback, useState } from "react";
import Image from "next/image";
import { QuestionCard, QuestionsProgressCard } from '@components'
import {useBreakpoints} from "@hooks";
import {CenteredLayout} from "@layouts";
import {QUESTIONS, QUESTIONS_PRICE_LIST} from '../../utils';

import styles from './game.module.css'

export default function Game() {
    const router = useRouter()
    const { isLg } = useBreakpoints()
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [isDrawerShown, setIsDrawerShown] = useState(false)

    const handleOnCorrectAnswerCallback = useCallback(() => {
        if(currentQuestion < QUESTIONS.length - 1) {
            setCurrentQuestion(prevQuestion => prevQuestion + 1)
        }
        else {
            router.push({
                pathname: '/game-over',
                query: { question: currentQuestion },
            })
        }
    }, [router, currentQuestion])

    const handleOnWrongAnswerCallback = useCallback(() => {
        router.push({
            pathname: '/game-over',
            query: { question: currentQuestion - 1 },
        })
    }, [router, currentQuestion])

    if (QUESTIONS.length === 0) {
        return <CenteredLayout className={styles.emptyState}>
            No questions were provided!
        </CenteredLayout>
    }
    if (QUESTIONS.length !== QUESTIONS_PRICE_LIST.length) {
        return <CenteredLayout className={styles.emptyState}>
            Questions and questions price list length doesn&apos;t match!
        </CenteredLayout>
    }

    return (
      <main className={styles.grid}>
          {!isLg && <Image
              className={styles.icon}
              src={isDrawerShown ? '/close-icon.svg' : '/burger-icon.svg'}
              width={24}
              height={24}
              alt="Menu icon"
              onClick={()=> setIsDrawerShown(prevState => !prevState)}
          />}
          {(isLg || !isDrawerShown) && (<QuestionCard
              question={QUESTIONS[currentQuestion] ?? {}}
              onCorrectAnswer={handleOnCorrectAnswerCallback}
              onWrongAnswer={handleOnWrongAnswerCallback}
              />)}
          {(isLg || isDrawerShown) &&  (<QuestionsProgressCard currentQuestion={currentQuestion} />)}
      </main>
  )
}
