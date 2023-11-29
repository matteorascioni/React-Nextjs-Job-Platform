import React from 'react'
import Headline from './Headline'

describe('<Headline />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Headline />)
  })
})