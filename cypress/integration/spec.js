/// <reference types="cypress" />
describe('Page', () => {
  it('shows the timestamp', () => {
    cy.visit('index.html')
    cy.get('#timezone').should('be.visible').and('not.be.empty')
    cy.get('#local-time').should('be.visible').and('not.be.empty')
    cy.screenshot()
  })
})
