Feature: Botões da Tabela

    Verificar a apresentação das mensagens de alerta apresentadas pelos botões contidos na tabela

    Scenario: Alerta Usuario
        Given usuário clique no botão na tabela referente ao determinado <Usuario>
        Then o sistema apresenta mensagem de alerta com o nome do <Usuario>
        Examples:
            | Usuario   |
            | Francisco |

