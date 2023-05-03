import { getSystemErrorMap } from "util";

describe('Form page e2e testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/form');
    cy.window().trigger('unload');
  });

  it('Validates correctly and creates card', () => {
    cy.get('input[type=text]').type('Kitten');
    cy.get('input[type=date]').type('2000-04-04');
    cy.get('select').type('Munchkin');
    cy.get('.form-input-checkbox-label').first().click();
    cy.get('.form-input-radio-label').last().click();
    cy.get('input[type=file]').selectFile('./cypress/fixtures/lycanCat.jpg');
    cy.get('.form-submit-btn').click();
    // cy.get('.modal-main').should('be.visible');
    cy.get('[data-testid=modal-close-btn]').click();
    // cy.get('.modal-main').should('not.be.visible');

    cy.get('[data-testid=card]').should('have.length', 1);
  });

  it('Shows validation errors', () => {
    cy.get('input[type=text]').type('f');
    cy.get('input[type=date]').type('1989-04-04');
    cy.get('select').type('Munchkin');
    cy.get('.form-submit-btn').click();

    cy.get('.form-validation-name').should('have.text', 'The name must be longer than 3 symbols');
    cy.get('.form-validation-date').should('have.text', 'The year must be after 1990');
    cy.get('.form-validation-checkbox').should('have.text', 'Check at least one checkbox');
    cy.get('.form-validation-file').should('have.text', 'Please choose an image file');
  });
});