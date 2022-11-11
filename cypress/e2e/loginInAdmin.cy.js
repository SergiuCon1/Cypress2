const { loginSelector, passwordSelector, submitButtonSelector, configurationsSelector } = require('../fixtures/adminPageSelectors.json');
const { login, password } = require('../fixtures/example.json');

describe("The user login in the Admin page", () => {
  beforeEach(() => {
    cy.visit("http://qamid.tmweb.ru/admin/index.php");
  });

  it("The user with valid credentials should login successfully", () => {
    cy.get(loginSelector).type(login);
    cy.get(passwordSelector).type(password);
    cy.get(submitButtonSelector).click();
    cy.get(configurationsSelector).should('have.length', 5);
  });

})