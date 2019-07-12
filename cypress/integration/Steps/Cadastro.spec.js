/// <reference types="Cypress" />

context('Cadastro', () => {
  beforeEach(() => {
    //Url usada com Tomcat 9.0.22 para realização dos Testes
    cy.visit('http://localhost:8080/TestCubos/')
  })

  it('Nome Obrigatorio', function () {
    const stub = cy.stub()

    cy.on('window:alert', stub)
    cy.get('input[name="elementosForm:cadastrar"]').click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('Nome eh obrigatorio')
      })

  })

  it('Sobrenome Obrigatorio', () => {
    const stub = cy.stub()

    cy.on('window:alert', stub)
    cy.get('input[name="elementosForm:nome"]').type('Teste')
    cy.get('input[name="elementosForm:cadastrar"]').click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('Sobrenome eh obrigatorio')
      })
  })

  it('Sexo Obrigatorio', () => {
    const stub = cy.stub()

    cy.on('window:alert', stub)
    cy.get('input[name="elementosForm:nome"]').type('Teste')
    cy.get('input[name="elementosForm:sobrenome"]').type('Teste2')
    cy.get('input[name="elementosForm:cadastrar"]').click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('Sexo eh obrigatorio')
      })
  })


  it('Cadastrando - Fluxo Basico', () => {

    cy.get('input[name="elementosForm:nome"]').type('Teste')
    cy.get('input[name="elementosForm:sobrenome"]').type('Teste2')
    cy.get('input[id="elementosForm:sexo:0"]').click()
    cy.get('input[id="elementosForm:comidaFavorita:0"]').click()
    cy.get('input[id="elementosForm:comidaFavorita:2"]').click()

    cy.get('select[id="elementosForm:escolaridade"]').select('Superior')

    cy.get('select[id="elementosForm:esportes"]').select(['natacao', 'Corrida']).invoke('val')
      .should('deep.equal', ['natacao', 'Corrida'])

    cy.get('textarea[id="elementosForm:sugestoes"]').type('Texto inserido para testes do Fluxo básico de Cadastro da Página de Testes')

    cy.get('input[name="elementosForm:cadastrar"]').click()

    //Resultado do Cadastro:
    cy.contains('Cadastrado!')
    cy.contains('Nome: Teste')
    cy.contains('Sobrenome: Teste2')
    cy.contains('Sexo: Masculino')
    cy.contains('Comida:  Carne  Pizza')
    cy.contains('Escolaridade: superior')
    cy.contains('Esportes:  Natacao  Corrida')
    cy.contains('Sugestoes: Texto inserido para testes do Fluxo básico de Cadastro da Página de Testes')
  })

})