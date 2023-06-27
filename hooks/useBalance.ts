import { useState, useEffect, useContext } from 'react'
import { ethers } from 'ethers'
import { useAddress } from '@thirdweb-dev/react'
import { TriviaContext } from '../context/TriviaContext'

export default function useBalance() {
  const address = useAddress()
  const tokenAddress = process.env.NEXT_PUBLIC_QUIZ_ADDRESS as string
  const [balance, setBalance] = useState(0)
  const { transactionSuccess } = useContext(TriviaContext)

  useEffect(() => {
    if (address) {
      console.log('GET AL BALANCE')
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(
        tokenAddress,
        ['function balanceOf(address) view returns (uint256)'],
        signer
      )
      contract.balanceOf(address).then((balance: any) => {
        setBalance(balance.toString())
      })
    } else {
      setBalance(0)
    }
  }, [address, tokenAddress, transactionSuccess])

  return balance
}
