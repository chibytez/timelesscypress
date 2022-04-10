

class Logout {
 logoutbutton(){
    return cy.get('.Button__StyledButton-sc-14h65ac-0.irqrha').eq(0).click()
 }
}

export default Logout