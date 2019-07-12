Feature: Cadastro

    Validação dos Fluxos de cadastro da aplicação

    Scenario: Nome Obrigatorio
        Given o usuário clicou no Botão Cadastrar sem informar nome
        Then o sistema apresenta mensagem de obrigatoriedade para Nome

    Scenario: Sobrenome Obrigatorio
        Given o usuário informou nome
        And clicou no botão cadastrar sem informar Sobrenome
        Then o sistema apresenta mensagem de obrigatoriedade para Sobrenome
        Examples:
            | Nome  |
            | Teste |

    Scenario: Sexo Obrigatorio
        Given o usuário informou nome
        And informou Sobrenome
        And clicou no botão cadastrar sem ter informado o Sexo
        Then o sistema apresenta mensagem de obrigatoriedade para Sexo
        Examples:
            | Nome  | Sobrenome |
            | Teste | Teste2    |

    Scenario: Cadastrando - Fluxo Basico
        Given o usuário preencheu os campos do formulario para cadastro
            | Nome  | Sobrenome | Sexo      | Comida favorita | Escolaridade | Pratica esportes | Sugestoes                                                                  |
            | Teste | Teste2    | Masculino | Carne, Pizza    | Superior     | Natacao, Corrida | Texto inserido para testes do Fluxo básico de Cadastro da Página de Testes |
        When o usuário clicar no botão Cadastrar
        Then o sistema apresenta os dados cadastrados na tela.