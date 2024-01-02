import { useRouter } from "next/router";
import {useCallback, useEffect, useState} from "react";
import { CenteredLayout } from "@layouts";
import { MainContainer } from "@components";
import { QUESTIONS_PRICE_LIST } from "@types"

import styles from './game-over.module.css';

const DEFAULT_PRIZE_AMOUNT = '$0'

export default function GameOver() {
    const router = useRouter()
    const [prizeAmount, setPrizeAmount] = useState<string | undefined>(DEFAULT_PRIZE_AMOUNT)

    useEffect(() => {
        if (router.query.question !== undefined && prizeAmount === DEFAULT_PRIZE_AMOUNT) {
            const questionNumber = Number(router.query.question)
            const newPrizeAmount = QUESTIONS_PRICE_LIST[questionNumber] ?? DEFAULT_PRIZE_AMOUNT;
            setPrizeAmount(newPrizeAmount);

            if (newPrizeAmount !== undefined) {
                router.replace({
                    pathname: router.pathname,
                });
            }
        }
    }, [router.query.question, prizeAmount, router]);

    const handleStartNewGameCallback = useCallback(() => {
        router.push('/game')
    }, [router])

    return (
        <CenteredLayout className={styles.layout}>
            <MainContainer
                description={`Total score: ${prizeAmount} earned`}
                actionText="Try again"
                onActionMethod={handleStartNewGameCallback}
            />
        </CenteredLayout>
    )
}
