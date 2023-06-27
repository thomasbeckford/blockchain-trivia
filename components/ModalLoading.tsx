'use client'
import { Box, Typography, Modal } from '@mui/material'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

type Props = {
  isLoading: boolean
}

export default function ModalLoading(props: Props) {
  const { isLoading } = props

  return (
    <Modal
      open={isLoading}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Transaction in progress...
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Please wait while your transaction is being processed.
        </Typography>
        <Box
          sx={{
            animation: 'spin 2s linear infinite',
            '@keyframes spin': {
              from: { transform: 'rotate(0deg)' },
              to: { transform: 'rotate(360deg)' },
            },
            width: '40px',
            height: '40px',
            border: '5px solid #f3f3f3',
            borderTop: '5px solid #3498db',
            borderRadius: '50%',
            margin: 'auto',
            marginTop: '20px',
          }}
        />
      </Box>
    </Modal>
  )
}
