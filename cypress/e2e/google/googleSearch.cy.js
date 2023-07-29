import{ Given, When, Then} from "cypress-cucumber-preprocessor/steps";

Given('visit google', ()=>{
    cy.visit('https://www.google.com')
})
Then('Cucumber setup for Cypress 12',()=>{
    cy.get('#APjFqb').type("Cucumber setup for Cypress 12{enter}")
    console.log('Test Basariyla tamamlandi')
})