/// <reference types="cypress" />

class About {
    container(value){
        cy.contains(value)
    }
}

export default About