import React from 'react'
import SkillsList from './SkillsList'

describe('<SkillsList />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SkillsList />)
  })
})