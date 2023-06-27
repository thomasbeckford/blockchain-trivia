'use client'
import {
  Box,
  Container,
  Typography,
  Button,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material'
import { motion } from 'framer-motion'
import Trivia from '@/trivia.json'
import EndOfTrivia from '@/components/EndOfTrivia'
import Image from 'next/image'
import useTriviaQuestions from '@/hooks/useTriviaQuestions'
import { useAddress } from '@thirdweb-dev/react'
import { useRouter } from 'next/navigation'

const TriviaQuestions = () => {
  const {
    timeRemaining,
    handleOptionChange,
    isLastQuestion,
    currentQuestionObj,
    handleNextQuestion,
    totalQuestions,
    setResponses,
  } = useTriviaQuestions({
    questions: Trivia.questions,
  })
  const address = useAddress()
  const router = useRouter()

  if (!address) {
    router.push('/')
    setResponses([])
  }

  if (!currentQuestionObj) {
    return <EndOfTrivia totalQuestions={totalQuestions} />
  }

  return (
    <Container maxWidth="md" sx={{ minHeight: '80vh' }}>
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
          style={{ height: '70px' }}
        >
          {timeRemaining > 0 ? (
            <Typography variant="h5" component="h3" gutterBottom>
              {timeRemaining} seconds remaining
            </Typography>
          ) : (
            <Typography variant="h5" component="h3" gutterBottom>
              Time is up!
              <br />
              {isLastQuestion ? (
                <Typography variant="body1" component="p" gutterBottom>
                  Preparing your score
                </Typography>
              ) : (
                <Typography variant="body1" component="p" gutterBottom>
                  Moving to next question
                </Typography>
              )}
            </Typography>
          )}
        </motion.div>

        <Typography variant="h4" component="h1" gutterBottom color="primary">
          {currentQuestionObj.text}
        </Typography>
        <Box
          sx={{
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
            mt: 2,
          }}
        >
          <Image
            src={currentQuestionObj.image}
            alt="Question"
            width={300}
            height={300}
          />
        </Box>

        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Box sx={{ mt: 4 }}>
            <FormControl>
              <RadioGroup
                aria-labelledby="radio-buttons"
                name="radio-buttons-group"
                onChange={handleOptionChange}
              >
                {currentQuestionObj.options.map((option, index) => (
                  <FormControlLabel
                    key={currentQuestionObj.text + option.text}
                    value={`${currentQuestionObj.text} : ${option.text}`}
                    disabled={timeRemaining < 0}
                    control={<Radio />}
                    label={option.text}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Box>
        </motion.div>

        <Button variant="outlined" onClick={handleNextQuestion} sx={{ mt: 4 }}>
          Next Question
        </Button>
      </Box>
    </Container>
  )
}

export default TriviaQuestions
