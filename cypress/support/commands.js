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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// const { movieTitle, movieSynopsis, movieTimeDuration, movieDataOrigin} = require('../fixtures/selectors');
const { firstMovieTitle, 
    firstMovieSynopsis, 
    firstMovieTimeDuration, 
    firstMovieDataOrigin, 
    secondMovieTitle, 
    secondMovieSynopsis, 
    secondMovieTimeDuration, 
    secondMovieDataOrigin 
} = require('../fixtures/movies.json');

Cypress.Commands.add('checkMovieInformation', (type) => {
    switch(type) {
        case "logan":
            cy.get(".movie").find('div > div > h2').eq(0).should('have.text', firstMovieTitle);
            cy.get(".movie").find('div > div').eq(1).find('p').eq(0).should('have.text', firstMovieSynopsis);
            cy.get(".movie").find('div > div').eq(1).find('p > span').eq(0).should('have.text', firstMovieTimeDuration);
            cy.get(".movie").find('div > div').eq(1).find('p > span').eq(1).should('have.text', firstMovieDataOrigin);
        case "Movie 3":
            cy.get(".movie").find('div > div').eq(3).find('h2').should('have.text', secondMovieTitle);
            cy.get(".movie").find('div > div').eq(3).find('p').eq(0).should('have.text', secondMovieSynopsis);
            cy.get(".movie").find('div > div').eq(3).find('p > span').eq(0).should('have.text', secondMovieTimeDuration);
            cy.get(".movie").find('div > div').eq(3).find('p > span').eq(1).should('have.text', secondMovieDataOrigin);
    }
})

Cypress.Commands.add('checkTicketInformation', () => {
    cy.get(".ticket__info-wrapper").find('p').eq(0).should('have.text', 'На фильм: Логан');
    cy.get(".ticket__info-wrapper").find('p').eq(1).should('have.text', 'Ряд/Место: 2/3, 3/4, 4/4, 5/6, 7/8')
    cy.get(".ticket__info-wrapper").find('p').eq(2).should('have.text', 'В зале: Зал 1')
    cy.get(".ticket__info-wrapper").find('p').eq(4).should('have.text', 'Начало сеанса: 19:00')
    cy.get(".ticket__info-wrapper").find('p').eq(5).should('have.text', 'Стоимость: 750 руб.')
})