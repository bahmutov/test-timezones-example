/// <reference types="cypress" />
describe('Page', () => {
  it('shows the timestamp', () => {
    cy.visit('index.html')
    cy.get('output').should('be.visible').and('not.be.empty')
  })
})
