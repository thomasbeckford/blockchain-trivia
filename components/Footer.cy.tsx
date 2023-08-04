import Footer from './Footer'

describe('<Footer />', () => {
  it('renders correctly', () => {
    cy.mount(<Footer />)

    // Verify the text content and alignment of the Typography component
    cy.contains('Thomas')
      .should('be.visible')
      .should('have.text', '© 2023 with ❤️ By Thomas')
      .should('have.css', 'text-align', 'center')
  })
})
