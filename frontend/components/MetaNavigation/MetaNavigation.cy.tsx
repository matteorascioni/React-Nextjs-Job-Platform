import React from 'react'
import MetaNavigation from './MetaNavigation'

describe('<MetaNavigation />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<MetaNavigation />)
  })
})