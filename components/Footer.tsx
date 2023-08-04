'use client'
import { Box, Container, Typography } from '@mui/material'

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: '#f5f5f5',
        py: 3,
        mt: 'auto',
        height: '64px',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="body2" color="textSecondary" align="center">
          &copy; 2023 with ❤️ By Thomas
        </Typography>
      </Container>
    </Box>
  )
}
