/// <reference types="Cypress" />

context('Select', () => {
  it('Test the standard select search', () => {
    // https://on.cypress.io/as
    cy.VisitStory('Select/Standard');

    cy.get('[hook=supthug]')
      .click()
      .within(el => {
        cy.get('input:first').type('gr', { force: true });
        cy.contains('Great').click();
      });
  });

  it('Go To the label + info stuff', () => {
    cy.VisitStory('Select/Label + Info/error');
  });
});
