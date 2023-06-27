'use client'
import { useState, useContext } from 'react'
import {
  Box,
  Container,
  Typography,
  Button,
  Snackbar,
  Alert,
} from '@mui/material'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { ITriviaResponse } from '@/types'
import { ethers } from 'ethers'
import { TriviaContext } from '@/context/TriviaContext'
import ModalLoading from '@/components/ModalLoading'

type Props = {
  totalQuestions: number
}

export default function EndOfTrivia(props: Props) {
  const { totalQuestions } = props
  const { responses, setResponses } = useContext(TriviaContext)
  const router = useRouter()
  const score = responses.filter((r) => r).length
  const tokenAddress = process.env.NEXT_PUBLIC_QUIZ_ADDRESS as string
  const [successOpen, setSuccessOpen] = useState(false)
  const [errorOpen, setErrorOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const { setTransactionSuccess } = useContext(TriviaContext)

  const answerNumberArray = responses.map((res) => {
    return res.answerNumber
  })

  const handleSubmit = async () => {
    setLoading(true)
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(
      tokenAddress,
      ['function submit(uint256, uint256[])'],
      signer
    )

    try {
      const transaction = await contract.submit(123, answerNumberArray)
      await transaction.wait()
      setSuccessOpen(true)
      setLoading(false)
      setResponses([])
      setTransactionSuccess(true)
      setTimeout(() => {
        router.push('/')
      }, 3000)
    } catch (error) {
      console.error('Error submitting transaction:', error)
      setErrorOpen(true)
      setLoading(false)
      setTransactionSuccess(false)
    }
  }

  const handleBack = () => {
    router.push('/')
    setResponses([])
  }

  return (
    <Container maxWidth="lg" sx={{ minHeight: '80vh' }}>
      <ModalLoading isLoading={loading} />
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <motion.div
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Typography variant="h4" component="h1" gutterBottom color="primary">
            End of trivia
          </Typography>
        </motion.div>

        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {responses.map((res: ITriviaResponse) => {
            return (
              <Box
                key={res.questionText}
                sx={{
                  my: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography variant="h5" component="h3" gutterBottom>
                  For the question {res.questionText}
                </Typography>

                <Typography variant="body1" component="p" gutterBottom>
                  You answered: {res.answerText}
                </Typography>
              </Box>
            )
          })}

          <Typography variant="h5" component="h3" gutterBottom>
            You scored {score} out of {totalQuestions}
          </Typography>
        </motion.div>

        <motion.div
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{ gap: '10px', display: 'flex', marginTop: '50px' }}
        >
          <Button variant="outlined" onClick={handleBack} disabled={loading}>
            Go back
          </Button>
          <Button variant="contained" onClick={handleSubmit} disabled={loading}>
            Submit score
          </Button>
        </motion.div>
      </Box>

      <Snackbar open={successOpen} autoHideDuration={6000}>
        <Alert severity="success" sx={{ width: '100%' }}>
          Transaction successful!
        </Alert>
      </Snackbar>
      <Snackbar open={errorOpen} autoHideDuration={6000}>
        <Alert severity="error" sx={{ width: '100%' }}>
          Error submitting transaction
        </Alert>
      </Snackbar>
    </Container>
  )
}
