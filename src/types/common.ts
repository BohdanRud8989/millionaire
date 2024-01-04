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
    leftArrowPath?: string
    rightArrowPath?: string
    containerPath: string
    y: number
}
export type SVGPlatformType = {
    mobile: SVGType
    desktop: SVGType
}

export type SVGConfigType = {
    flattened: SVGPlatformType
    stretched: SVGPlatformType
}

export type HexagonVariantType =
    | 'unset'
    | 'inactive'
    | 'selected'
    | 'correct'
    | 'wrong'

export type HexagonType =
    | 'flattened'
    | 'stretched'


export enum Breakpoints {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg'
}
