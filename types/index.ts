export interface IQuestion {
  text: string
  image: string
  lifetimeSeconds: number
  options: IOption[]
}

export interface IOption {
  text: string
}

export interface IQuestions {
  questions: IQuestion[]
}

export interface ITriviaResponse {
  questionNumber: number
  questionText: string
  answerText: string
  answerNumber: number
}
