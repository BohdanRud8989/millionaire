import { QuestionType } from "./common";

export const QUESTIONS: QuestionType[] = [
    {
        text: 'How old your elder brother was 10 years before you was born, mate?',
        answers: [
            {code: 'A', value: '10 years'},
            {code: 'B', value: '11 years'},
            {code: 'C', value: '12 years'},
            {code: 'D', value: '14 years'}],
        correct: 'A'
    },
    {
        text: 'What is your fav football club in EPL this season?',
        answers: [
            {code: 'A', value: 'FC Chelsea'},
            {code: 'B', value: 'Arsenal FC'},
            {code: 'C', value: 'Man City'},
            {code: 'D', value: 'Man United'}],
        correct: 'D'
    },
]

export const QUESTIONS_PRICE_LIST = QUESTIONS
    .map((_, idx ) => `$${500 * Math.pow(2, idx)}`)

export const MEDIA_QUERY_BREAKPOINTS = {
    xs: '(max-width: 576px)',
    sm: '(min-width: 577px) and (max-width: 768px)',
    md: '(min-width: 769px) and (max-width: 992px)',
    lg: '(min-width: 993px)',
};


export const ANSWER_HANDLING_DELAY = 2000
