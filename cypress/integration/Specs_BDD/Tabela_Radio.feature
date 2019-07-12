Feature: Tabela com Radiobutton

    Verificar se o sistema está permitindo marcação sobre os Radiobuttons apresentados na Tabela

    Scenario: Acionando Radiobutton
        Given usuário clique sobre algum Radiobutton da Tabela
        Then o sistema deve apresentar a marcação de clique sobre o radiobutton