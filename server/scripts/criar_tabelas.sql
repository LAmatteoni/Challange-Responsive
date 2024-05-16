

-- CRIA AS TABELA DE PRODUTOS PARA VOCÊ
CREATE TABLE T_CH_PRODUTOS(
    id_produto                  INTEGER PRIMARY KEY,
    nome                        VARCHAR2(50 CHAR) NOT NULL,
    descricao                   VARCHAR2(2000 CHAR) NOT NULL,
    area_atuacao                VARCHAR2(30 CHAR) NOT NULL,
    valor                       INTEGER
);



-- INSERE ALGUNS PRODUTOS PARA VOCÊ DENTRO DO BANCO

INSERT INTO T_CH_PRODUTOS (id_produto, nome, descricao, area_atuacao, valor)
VALUES (1, 'Salesforce CRM', 'Plataforma de CRM líder de mercado com recursos de vendas, marketing e atendimento ao cliente.', 'Software', 1000);

INSERT INTO T_CH_PRODUTOS (id_produto, nome, descricao, area_atuacao, valor)
VALUES (2, 'Salesforce Marketing Cloud', 'Plataforma de automação de marketing para gerenciamento de campanhas e interações com clientes.', 'Marketing', 1500);

INSERT INTO T_CH_PRODUTOS (id_produto, nome, descricao, area_atuacao, valor)
VALUES (3, 'Salesforce Service Cloud', 'Plataforma de serviço ao cliente para oferecer suporte omnichannel e resolver problemas rapidamente.', 'Atendimento ao Cliente', 1200);

INSERT INTO T_CH_PRODUTOS (id_produto, nome, descricao, area_atuacao, valor)
VALUES (4, 'Salesforce Commerce Cloud', 'Plataforma de comércio eletrônico para varejo digital.', 'Comércio Eletrônico', 1800);

INSERT INTO T_CH_PRODUTOS (id_produto, nome, descricao, area_atuacao, valor)
VALUES (5, 'Salesforce Pardot', 'Ferramenta de automação de marketing B2B para geração e nutrição de leads.', 'Marketing', 1300);

INSERT INTO T_CH_PRODUTOS (id_produto, nome, descricao, area_atuacao, valor)
VALUES (6, 'Salesforce Einstein Analytics', 'Plataforma de análise de dados e business intelligence com inteligência artificial integrada.', 'Análise de Dados', 1600);



--QUERY PARA VER OS PRODUTOS ADICIONADOS
SELECT * FROM T_CH_PRODUTOS