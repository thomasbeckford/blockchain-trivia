import AuthButton from './AuthButton'
import { ThirdwebProvider } from '@thirdweb-dev/react'

describe('<AuthButton />', () => {
  it('renders Connect Wallet button by default', () => {
    cy.mount(
      <ThirdwebProvider>
        <AuthButton />
      </ThirdwebProvider>
    )

    cy.contains('Connect Wallet').should('be.visible')
  })
})
