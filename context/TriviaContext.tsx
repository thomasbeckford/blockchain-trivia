import React, { createContext, useState } from 'react'
import { ITriviaResponse } from '@/types'

type TriviaContextType = {
  responses: ITriviaResponse[]
  setResponses: React.Dispatch<React.SetStateAction<ITriviaResponse[]>>

  transactionSuccess: boolean
  setTransactionSuccess: React.Dispatch<React.SetStateAction<boolean>>
}

export const TriviaContext = createContext<TriviaContextType>({
  responses: [],
  setResponses: () => {},
  transactionSuccess: false,
  setTransactionSuccess: () => {},
})

export const TriviaProvider = ({ children }: any) => {
  const [responses, setResponses] = useState<ITriviaResponse[]>([])
  const [transactionSuccess, setTransactionSuccess] = useState(false)

  return (
    <TriviaContext.Provider
      value={{
        responses,
        setResponses,
        transactionSuccess,
        setTransactionSuccess,
      }}
    >
      {children}
    </TriviaContext.Provider>
  )
}
