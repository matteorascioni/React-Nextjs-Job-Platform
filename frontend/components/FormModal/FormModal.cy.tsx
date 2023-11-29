import React from 'react'
import FormModal from './FormModal'

describe('<FormModal />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<FormModal />)
  })
})