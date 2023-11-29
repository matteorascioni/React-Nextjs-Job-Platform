import React from 'react'
import HeroParticles from './HeroParticles'

describe('<HeroParticles />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<HeroParticles />)
  })
})