import React from 'react'
import LanguageSwitcher from './LanguageSwitcher'

describe('<LanguageSwitcher />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<LanguageSwitcher />)
  })
})