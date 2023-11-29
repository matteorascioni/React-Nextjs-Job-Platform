import React from 'react'
import TechnologyCard from './TechnologyCard'

describe('<TechnologyCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TechnologyCard />)
  })
})