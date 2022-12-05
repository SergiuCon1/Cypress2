/// <reference types="Cypress" />

const seats = require("../fixtures/seats.json");
const {
  daysOfWeek,
  movieSeance,
  acceptionButton,
} = require("../fixtures/cinemaHallSelectors.json");

describe("The user can booking the ticket", () => {
  beforeEach(() => {
    cy.visit("http://qamid.tmweb.ru/client/index.php");
  });

  it("User have possible to booking the ticket", () => {
    cy.get(daysOfWeek).eq(2).click();
    cy.get(movieSeance).click();
    cy.get(acceptionButton).should("be.disabled");
    cy.selectFreeSlots();

    cy.get(acceptionButton).should("not.be.disabled").click();
    cy.get(".ticket__check-title").should("be.visible");
    cy.checkTicketInformation();
    cy.get(acceptionButton).click();
    cy.get(".ticket__info-qr").should("be.visible");
  });
});
