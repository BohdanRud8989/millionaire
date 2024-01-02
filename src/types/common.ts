export type AnswerType = {
  code: string,
  value: string
}

export type QuestionType = {
    text: string,
    answers: AnswerType[],
    correct: string
}
type SVGType = {
    width: number
    height: number
    viewBox: string
    pathD: string
    y: number
}

export type SVGConfigType = {
    mobile: SVGType
    desktop: SVGType
}

export type HexagonVariantType =
    | 'inactive'
    | 'selected'
    | 'correct'
    | 'wrong'


export enum Breakpoints {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg'
}
