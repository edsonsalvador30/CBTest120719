/// <reference types="Cypress" />
/// <reference path="C:\\...\\...\\CubosTestes\\src\\index.d.ts"/>

describe('cypress-xpath', () => {
    it('adds xpath command', () => {
        expect(cy)
            .property('xpath')
            .to.be.a('function')
    })

    context('Marcação de Checkbox', () => {
        beforeEach(() => {
            //Url usada com Tomcat 9.0.22 para realização dos Testes
            cy.visit('http://localhost:8080/TestCubos/')
        })

        it('Input Francisco', function () {

            cy.xpath("//center[1]//tr[8]//tr[1]//td[4]//input[1]").check()
            //cy.xpath("//center[1]//tr[8]//tr[1]//td[4]//input[1]").should('have.value', 'on')

        })
        it('Input Maria', function () {

            cy.xpath("//center[1]//tr[2]//td[4]//input[1]").check()

        })
        it('Input Usuario A', function () {

            cy.xpath("//center[1]//tr[3]//td[4]//input[1]").check()

        })
        it('Input Doutorado', function () {

            cy.xpath("//center[1]//tr[8]//tr[4]//td[4]//input[1]").check()

        })
        it('Input Usuario B', function () {

            cy.xpath("//center[1]//tr[5]//td[4]//input[1]").check()

        })
    })
})