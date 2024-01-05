import { QuestionType } from '@types';
import data from 'data.json';
import { formatCurrency } from './functions';

const { questions, prices } = data;

export const QUESTIONS: QuestionType[] = questions;
export const QUESTIONS_PRICE_LIST = prices.map((price) => formatCurrency(price));

export const MEDIA_QUERY_BREAKPOINTS = {
  xs: '(max-width: 576px)',
  sm: '(min-width: 577px) and (max-width: 768px)',
  md: '(min-width: 769px) and (max-width: 992px)',
  lg: '(min-width: 993px)',
};

export const ANSWER_HANDLING_DELAY = 2000;
