/// <reference types="Cypress" />
/// <reference path="C:\\...\\...\\CubosTestes\\src\\index.d.ts"/>

describe('cypress-xpath', () => {
    it('adds xpath command', () => {
        expect(cy)
            .property('xpath')
            .to.be.a('function')
    })

    context('Acionando Radiobutton', () => {
        beforeEach(() => {
            //Url usada com Tomcat 9.0.22 para realização dos Testes
            cy.visit('http://localhost:8080/TestCubos/')
        })

        it('Radio Francisco', function () {          
           
            cy.xpath("//center[1]//tr[1]//td[5]//input[1]").click()
            //cy.xpath("//center[1]//tr[1]//td[5]//input[1]").should('have.value', '1')         
            
        })
        it('Radio Maria', function () {            

            cy.xpath("//center[1]//tr[2]//td[5]//input[1]").click()
                
        })
        it('Radio Usuario A', function () {

            cy.xpath("//center[1]//tr[3]//td[5]//input[1]").click()
                
        })
        it('Radio Doutorado', function () {

            cy.xpath("//center[1]//tr[4]//td[5]//input[1]").click()
                
        })
        it('Radio Usuario B', function () {

            cy.xpath("//center[1]//tr[5]//td[5]//input[1]").click()
               
        })
    })
})