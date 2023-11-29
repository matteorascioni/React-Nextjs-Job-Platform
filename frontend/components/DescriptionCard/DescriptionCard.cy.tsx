import React from 'react'
import DescriptionCard from './DescriptionCard'

describe('<DescriptionCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<DescriptionCard />)
  })
})