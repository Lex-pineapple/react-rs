describe('Home page e2e testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
    cy.window().trigger('unload');
  });

  it('Cards testing', () => {
    cy.get('[data-testid=searchbar]').type('Kitten{enter}');
    cy.get('[data-testid=loader-container]').should('not.exist');
    cy.get('[data-testid=card]').should('have.length', 10);
    cy.get('[data-testid=card]').should('have.length', 10).eq(0).click();
    cy.get('[data-testid=card-modal]').should('be.visible');
    cy.get('[data-testid=modal-close-btn]').click();
    cy.get('[data-testid=card-modal]').should('not.be.visible');
  });

  it('Routing testing', () => {
    cy.get('[data-testid=header-link-about]').click();
    cy.location('pathname').should('eq', '/about');
    cy.get('[data-testid=about-header]').should('exist');

    cy.get('[data-testid=header-link-home]').click();
    cy.location('pathname').should('eq', '/');
    cy.get('[data-testid=searchbar]').should('exist');

    cy.get('[data-testid=header-link-form]').click();
    cy.location('pathname').should('eq', '/form');
    cy.get('[data-testid=form-container]').should('exist');
  });
});
