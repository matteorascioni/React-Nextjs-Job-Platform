import React from 'react'
import ExternalLink from './ExternalLink'

describe('<ExternalLink />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ExternalLink />)
  })
})