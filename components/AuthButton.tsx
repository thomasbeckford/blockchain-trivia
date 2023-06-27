'use client'
import {
  ConnectWallet,
  useNetworkMismatch,
  useSwitchChain,
} from '@thirdweb-dev/react'
import { Goerli } from '@thirdweb-dev/chains'
import { Button } from '@mui/material'

type Props = {
  theme?: 'light' | 'dark' | undefined
  btnTitle?: string
}

export default function AuthButton(props: Props) {
  const { theme = 'dark', btnTitle = 'Connect Wallet' } = props
  const isMismatched = useNetworkMismatch()
  const switchChain = useSwitchChain()

  const handleSwitch = () => {
    try {
      switchChain(Goerli.chainId)
    } catch (err) {
      console.log(err)
    }
  }

  if (isMismatched) {
    return (
      <Button variant="contained" color="secondary" onClick={handleSwitch}>
        Switch to Goerli
      </Button>
    )
  }

  return <ConnectWallet theme={theme} btnTitle={btnTitle} />
}
