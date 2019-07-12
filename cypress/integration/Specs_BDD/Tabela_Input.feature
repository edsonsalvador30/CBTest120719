Feature: Tabela Inputs

    Verificar se os campos de entrada de texto da tabela estão aceitando entrada de dados

    Scenario: Preenchendo Inputs
        Given usuário informe dados em algum campo de texto da tabela
        Then o sistema deve permitir inserção de dados nos campos