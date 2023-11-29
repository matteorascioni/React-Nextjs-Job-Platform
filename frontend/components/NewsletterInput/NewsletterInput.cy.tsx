import React from 'react'
import NewsletterInput from './NewsletterInput'

describe('<NewsletterInput />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<NewsletterInput />)
  })
})