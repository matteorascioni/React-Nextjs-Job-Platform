import React from 'react'
import Icon from './Icon'

describe('<Icon />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Icon />)
  })
})