/// <reference types="Cypress" />
/// <reference path="C:\\...\\...\\CubosTestes\\src\\index.d.ts"/>

describe('cypress-xpath', () => {
    it('adds xpath command', () => {
        expect(cy)
            .property('xpath')
            .to.be.a('function')
    })

    context('Preenchendo Inputs', () => {
        beforeEach(() => {
            //Url usada com Tomcat 9.0.22 para realização dos Testes
            cy.visit('http://localhost:8080/TestCubos/')
        })

        it('Input Francisco', function () {

            cy.xpath("//center[1]//tr[1]//td[6]//input[1]").type('Teste Francisco')
            cy.xpath("//center[1]//tr[1]//td[6]//input[1]").should('have.value', 'Teste Francisco')

        })
        it('Input Maria', function () {

            cy.xpath("//center[1]//tr[2]//td[6]//input[1]").type('Teste Maria')
            cy.xpath("//center[1]//tr[2]//td[6]//input[1]").should('not.have.value', 'Teste Maria')

        })
        it('Input Usuario A', function () {

            cy.xpath("//center[1]//tr[3]//td[6]//input[1]").type('Teste User A')
            cy.xpath("//center[1]//tr[3]//td[6]//input[1]").should('not.have.value', 'Teste User A')

        })
        it('Input Doutorado', function () {

            cy.xpath("//center[1]//tr[4]//td[6]//input[1]").type('Teste Doutor')
            cy.xpath("//center[1]//tr[4]//td[6]//input[1]").should('not.have.value', 'Teste Doutor')

        })
        it('Input Usuario B', function () {

            cy.xpath("//center[1]//tr[5]//td[6]//input[1]").type('Teste User B')
            cy.xpath("//center[1]//tr[5]//td[6]//input[1]").should('not.have.value', 'Teste User B')

        })
    })
})