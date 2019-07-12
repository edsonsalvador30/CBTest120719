Feature: Tabela com Checkbox

    Verificar se os checkboxs da tabela estão permitindo marcação

    Scenario: Marcação de Checkbox
        Given usuario clique sobre algum checkbox desmarcado
        Then o sistema deve apresentar marcação no checkbox