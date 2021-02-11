/// <reference types="cypress" />

// get the current time zone name
const timeZone = Intl.DateTimeFormat()
  .resolvedOptions()
  .timeZone.replace('/', '-')

describe('Page', () => {
  it('shows the timestamp', () => {
    cy.visit('index.html')
    cy.get('#timezone').should('be.visible').and('not.be.empty')
    cy.get('#local-time').should('be.visible').and('not.be.empty')
    cy.screenshot(`timestamp-${timeZone}`)
  })
})
