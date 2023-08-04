'use client'
import { Box, Typography, Container, AppBar, Toolbar } from '@mui/material'
import AuthButton from './AuthButton'
import useBalance from '@/hooks/useBalance'

export default function Nav() {
  const balance = useBalance()

  const balanceBigInt = BigInt(balance)
  const balanceNumber = Number(balanceBigInt)

  return (
    <AppBar
      position="static"
      sx={{
        height: '64px',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Blockchain Trivia
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Balance: {balanceNumber}
            </Typography>
          </Box>
          <AuthButton />
        </Toolbar>
      </Container>
    </AppBar>
  )
}
