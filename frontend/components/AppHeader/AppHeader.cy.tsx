import React from 'react'
import AppHeader from './AppHeader'

describe('<AppHeader />', () => {
  it('renders', () => {
    cy.mount(<AppHeader />)
  })
})