'use client'
import { useContext, useState, useEffect, ChangeEvent } from 'react'
import { IQuestions } from '@/types'
import { TriviaContext } from '@/context/TriviaContext'

export default function useTriviaQuestions(props: IQuestions) {
  const { questions } = props
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const { setResponses } = useContext(TriviaContext)
  const [timeRemaining, setTimeRemaining] = useState(
    questions[currentQuestion]?.lifetimeSeconds
  )

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1)
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [currentQuestion])

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedOption = event.target.value
    setResponses((prevResponses: any) => [
      ...prevResponses,
      {
        questionNumber: currentQuestion,
        questionText: questions[currentQuestion].text,
        answerText: selectedOption,
        answerNumber: questions[currentQuestion].options.findIndex((option) => {
          const colonIndex = selectedOption.indexOf(':')
          const trimmedValue = selectedOption.slice(colonIndex + 1).trim()
          return option.text === trimmedValue
        }),
      },
    ])
  }

  const handleNextQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1)
    setTimeRemaining(questions[currentQuestion + 1]?.lifetimeSeconds)
  }

  const isLastQuestion = currentQuestion === questions.length - 1
  const currentQuestionObj = questions[currentQuestion]
  const totalQuestions = questions.length

  if (timeRemaining < 0) {
    handleNextQuestion()
  }

  return {
    timeRemaining,
    handleOptionChange,
    setResponses,
    isLastQuestion,
    currentQuestionObj,
    handleNextQuestion,
    totalQuestions,
  }
}
