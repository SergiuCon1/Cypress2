/// <reference types="Cypress" />

const { daysOfWeek, movies } = require("../fixtures/cinemaHallSelectors.json");

describe("The home page should be displayed correctly", () => {
  beforeEach(() => {
    cy.visit("http://qamid.tmweb.ru/client/index.php");
  });

  it("Days should be equal seven in the page navigation", () => {
    cy.get(daysOfWeek).should("have.length", 7);
  });

  it("Movies should be equal two in the homepage", () => {
    cy.get(movies).should("have.length", 2);
  });

  it("Movies description should be correctly", () => {
    cy.checkMovieInformation("logan");
    cy.checkMovieInformation("Movie 3");
  });
});
