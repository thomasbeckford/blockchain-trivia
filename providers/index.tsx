'use client'
import { QueryClient } from 'react-query'
import { ThemeProvider } from '@mui/material/styles'
import theme from '@/theme'
import { ThirdwebProvider, metamaskWallet } from '@thirdweb-dev/react'
import { Goerli } from '@thirdweb-dev/chains'
import { TriviaProvider } from '@/context/TriviaContext'

type Props = {
  children: React.ReactNode
}

export default function Providers(props: Props) {
  const { children } = props
  const queryClient = new QueryClient()

  return (
    <ThirdwebProvider
      activeChain={Goerli.chainId}
      supportedChains={[Goerli]}
      supportedWallets={[metamaskWallet()]}
      autoSwitch
    >
      <TriviaProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </TriviaProvider>
    </ThirdwebProvider>
  )
}
