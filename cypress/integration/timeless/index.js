/// <reference types="cypress" />

import Login from '../../../Pages/LoginPage'
import Logout from '../../../Pages/Logout'
import About from '../../../Pages/About'

describe("Timesless Challenge 4", ()=>{
    const login = new Login()
    const logout = new Logout()
    const about = new About()
    before("login", ()=>{
       login.navigate()
       cy.url().should('be.equal', 'https://www.timeless.investments/')
       login.registerButton()
        login.loginTab()
        login.loginEmail()
        login.inputEmail('chibuike@example.com')
        login.inputPassword('Password01')
        login.loginSubmitButton()
    })

    it('should view about us page', ()=>{
        about.container('Invest in things you love')
    })

    after("log out a user", ()=>{
        logout.logoutbutton()
    })
})