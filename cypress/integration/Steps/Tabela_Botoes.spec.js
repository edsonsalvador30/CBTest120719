/// <reference types="Cypress" />
/// <reference path="C:\\...\\...\\CubosTestes\\src\\index.d.ts"/>

describe('cypress-xpath', () => {
    it('adds xpath command', () => {
        expect(cy)
            .property('xpath')
            .to.be.a('function')
    })

    context('Alerta Usuario', () => {
        beforeEach(() => {
            //Url usada com Tomcat 9.0.22 para realização dos Testes
            cy.visit('http://localhost:8080/TestCubos/')
        })

        it('Alerta Usuario', function () {

            const stub = cy.stub()

            cy.on('window:alert', stub)

            cy.xpath("//center[1]//tr[8]//tr[1]//td[3]//input[1]").click()
                .then(() => {
                    expect(stub.getCall(0)).to.be.calledWith('Francisco')
                })
        })
        it('Alerta Maria', function () {

            const stub = cy.stub()

            cy.on('window:alert', stub)

            cy.xpath("//input[@name='elementosForm:tableUsuarios:2:j_idt440']").click()
                .then(() => {
                    expect(stub.getCall(0)).to.be.calledWith('Maria')
                })
        })
        it('Alerta Usuario A', function () {

            const stub = cy.stub()

            cy.on('window:alert', stub)

            cy.xpath("//center[1]//tr[3]//td[3]//input[1]").click()
                .then(() => {
                    expect(stub.getCall(0)).to.be.calledWith('Usuario A')
                })
        })
        it('Alerta Doutorado', function () {

            const stub = cy.stub()

            cy.on('window:alert', stub)

            cy.xpath("//center[1]//tr[8]//tr[4]//td[3]//input[1]").click()
                .then(() => {
                    expect(stub.getCall(0)).to.be.calledWith('Doutorado')
                })
        })
        it('Alerta Usuario B', function () {

            const stub = cy.stub()

            cy.on('window:alert', stub)

            cy.xpath("//center[1]//tr[5]//td[3]//input[1]").click()
                .then(() => {
                    expect(stub.getCall(0)).to.be.calledWith('Usuario B')
                })
        })
    })
})