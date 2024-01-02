import {useEffect, useState} from "react";
import {setTimeout} from "timers";
import { Hexagon } from '@components'
import {ANSWER_HANDLING_DELAY, QuestionType} from "@types";
// import { promises as fs } from 'fs';

import styles from './questionCard.module.css';

type ActionCardProps = {
    onCorrectAnswer?: () => void;
    onWrongAnswer?: () => void;
    question: QuestionType;
}

export const QuestionCard = ({ question, onCorrectAnswer, onWrongAnswer }: ActionCardProps) => {
    const [currentAnswer, setCurrentAnswer] = useState<undefined | string>()
    const [isCorrect, setIsCorrect] = useState<undefined | boolean>()
    const { text, answers, correct: correctCode} = question

    useEffect(()=> {
        setCurrentAnswer(undefined)
        setIsCorrect(undefined)
    }, [question])

    const handleOnAnswer = (code: string) => {
        setCurrentAnswer(code)
        setTimeout(()=> {
            const isCurrentAnswerCorrect = code === correctCode
            setIsCorrect(isCurrentAnswerCorrect)
            setTimeout(()=> {
                if(isCurrentAnswerCorrect){
                    onCorrectAnswer?.()
                } else {
                    onWrongAnswer?.()
                }
            }, ANSWER_HANDLING_DELAY)
        }, ANSWER_HANDLING_DELAY)
    }

    const getVariant = (code: string) => {
        if(currentAnswer !== code) {
            return undefined
        }
        if(isCorrect === true) {
            return 'correct'
        }
        else if(isCorrect === false) {
            return 'wrong'
        }
        return 'selected'
    }

  return (
    <section className={styles.main}>
        <p className={styles.question}>
            {text}
        </p>
        <div className={styles.answers}>
            {answers?.map(({code, value}) =>
                <Hexagon
                    key={code}
                    variant={getVariant(code)}
                    prefix={code}
                    text={value}
                    onClick={()=> handleOnAnswer(code)}
                />
            )}
        </div>
    </section>
  );
};

export async function getStaticProps() {
    /*const filePath = path.join(process.cwd(), 'data.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);*/
    // const file = await fs.readFile(process.cwd() + 'data.json', 'utf8');
    // const data = JSON.parse(file);
    console.log('getStaticProps: objectData: ', {})

    return {
        props: {}
    }
}
