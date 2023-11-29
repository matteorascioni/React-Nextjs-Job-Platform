import React from 'react'
import AppHeader from './AppHeader'

describe('<AppHeader />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AppHeader />)
  })
})