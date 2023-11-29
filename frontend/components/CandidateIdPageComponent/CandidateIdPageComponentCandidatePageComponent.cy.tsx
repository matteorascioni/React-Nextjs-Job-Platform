import React from 'react'
import CandidatePageComponent from './CandidateIdPageComponent'

describe('<CandidatePageComponent />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CandidatePageComponent />)
  })
})