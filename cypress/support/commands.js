// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
const baseUrl = 'http://localhost:6006/';
const iFrameUrl = 'http://localhost:6006/iframe.html';

Cypress.Commands.add('VisitStory', storyName => {
  const storySelectors = storyName.split('/');

  return cy
    .visit(baseUrl)
    .then(() => {
      if (storyName.includes('/')) {
        const parentStories = storySelectors.slice(0, -1);
        const parentPromises = parentStories.map(story =>
          cy
            .get('div[role=menuitem]')
            .contains(story)
            .click()
        );
        return Promise.all(parentPromises);
      } else {
        return new Promise(resolve => {
          resolve();
        });
      }
    })
    .then(() => {
      const finalStory = storySelectors.slice(-1);
      return cy.get(`a[data-name="${finalStory}"]`).then(ele => {
        return cy.visit(iFrameUrl + ele.attr('href'));
      });
    });
});
