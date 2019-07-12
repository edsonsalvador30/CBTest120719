Feature: Botoes

    Verificação das funções implementadas nos botões do sistema

    Scenario: Botão Clique Me
        Given o usuário clicou no botão "Clique Me"
        Then o sistema altera o texto do botão para "Obrigado!"

    Scenario: Abrir Popup
        Given o usuário clicou no botão "Abrir Popup"
        Then o sistema apresenta Popup com campo de Texto

    Scenario: Abrir Popup do Mal
        Given o usuário clicou no botão "Abrir Popup do Mal"
        Then o sistema apresenta Popup com campo de Texto

    Scenario: Link Voltar
        Given o usuário clicou no link "Voltar"
        Then o sistema apresenta <texto> e altera a <url> do sistema
        Examples:
            | texto   | url                               |
            | Voltou! | http://localhost:8080/TestCubos/# |

    Scenario: Alerta simples
        Given o usuário clicou no botão "Alert"
        Then o sistema apresenta <Mensagem de Alerta>
        Examples:
            | Mensagem de Alerta |
            | Alert Simples      |

    Scenario: Confirmação simples
        Given o usuário clicou no botão "Confirm"
        Then o sistema apresenta <Mensagem de Confirmação>
        When o usuário clica em OK
        Then o sistema apresenta Mensagem de <OK>
        When o usuário clica em Cancelar
        Then o sistema apresenta mensagem de <Cancelar>
        Examples:
            | Mensagem de Confirmação | OK         | Cancelar |
            | Confirm Simples         | Confirmado | Negado   |