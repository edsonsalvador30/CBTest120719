/// <reference types="Cypress" />

context('Botões', () => {
    beforeEach(() => {
        //Url usada com Tomcat 9.0.22 para realização dos Testes
        cy.visit('http://localhost:8080/TestCubos/')
    })

    it('Botão Clique Me', () => {
        cy.get('#buttonSimple').should('have.value', 'Clique Me!').click()
        cy.get('#buttonSimple').should('have.value', 'Obrigado!')
    })

    it('Abrir Popup', () => {
        cy.get("#buttonPopUpEasy").click()
        // O sistema exibe Popup com textarea - Implementar script
    })

    it('Abrir Popup do Mal', () => {
        cy.get("#buttonPopUpHard").click()
        // O sistema exibe Popup com textarea - Implementar script
    })

    it('Link Voltar', () => {
        cy.get(':nth-child(1) > a').click()
        cy.url('http://localhost:8080/TestCubos/#')
        cy.contains('Voltou!')
    })

    it('Alerta simples', function () {

        const stub = cy.stub()

        cy.on('window:alert', stub)

        cy.get("#alert").click()
            .then(() => {
                expect(stub.getCall(0)).to.be.calledWith('Alert Simples')
            })
    })

    it('Confirmação simples', function () {

        const stub = cy.stub()

        stub.onFirstCall().returns(undefined)
        stub.onSecondCall().returns(true)
        stub.onThirdCall().returns(false)

        cy.on('window:confirm', stub)

        cy.get("#confirm").click()
            .then(() => {
                expect(stub.getCall(0)).to.be.calledWith('Confirm Simples')
                //expect(stub.getCall(1)).to.be.calledWith('Confirmado')
                //expect(stub.getCall(2)).to.be.calledWith('Negado')
            })
    })
})