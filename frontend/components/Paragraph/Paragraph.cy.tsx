import React from 'react'
import Paragraph from './Paragraph'

describe('<Paragraph />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Paragraph />)
  })
})