

class LoginPage {
    navigate() {
        return cy.visit("https://www.timeless.investments/")
    }

    registerButton(){
         return cy.get('.Button__StyledButton-sc-14h65ac-0.irqrha').eq(0).click()
    }

    loginTab(){
        return cy.get('#login-tab').click()
    }

    loginEmail(){
       return cy.get('.SocialAuthButton__SocialAuthButtonWrapper-sc-1nm2out-0.cjLFbo').eq(3).click()
    }

    inputEmail(emailValue) {
       return cy.get('.Input__StyledInput-sc-xh42wx-2.hqmkVc').eq(0).type(emailValue)
    }

    inputPassword(passwordValue) {
        return cy.get('.Input__StyledInput-sc-xh42wx-2.hqmkVc').eq(1).type(passwordValue)
    }

    loginSubmitButton() {
        return cy.get('#login-button').click()
    }

}

export default LoginPage