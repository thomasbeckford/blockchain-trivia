'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Box, Container, Typography, Button, Grid } from '@mui/material'
import AuthButton from '@/components/AuthButton'
import { useAddress } from '@thirdweb-dev/react'
import Trivia from '@/trivia.json'

const Home = () => {
  const router = useRouter()
  const address = useAddress()

  const handleStartTrivia = () => {
    router.push('/trivia')
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ marginTop: 8 }}>
        <Typography variant="h4" component="h1" gutterBottom color="primary">
          {Trivia.title}
        </Typography>

        <Grid container justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: 0,
                paddingBottom: '50%',
              }}
            >
              <Image
                src="/trivia.jpeg"
                alt={Trivia.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ marginTop: '20px' }}>
          {address ? (
            <Button
              variant="contained"
              color="primary"
              onClick={handleStartTrivia}
            >
              Start Game
            </Button>
          ) : (
            <AuthButton btnTitle="To play, connect your wallet first" />
          )}
        </Box>
      </Box>
    </Container>
  )
}

export default Home
