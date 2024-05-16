from flask import Flask, json, jsonify
from flask_cors import CORS
import oracledb

app = Flask(__name__)
CORS(app)

@app.route("/api/produtos", methods=['GET'])
def return_produtos():
    todos_produtos = buscar_produtos()

    return jsonify(todos_produtos)


def conexa_db():
    try:
        
        with open("credenciais.json") as f:
                credenciais = json.load(f)

        USER = credenciais["user"]
        PASS = credenciais["pass"]
    
        # Conecta o servidor
        dsnStr = oracledb.makedsn("oracle.fiap.com.br", 1521, "ORCL")
        # Efetua a conexão com o Usuário
        connection = oracledb.connect(user=USER, password=PASS, dsn=dsnStr)

        return connection

    except FileNotFoundError:
        print("Arquivo não encontrado")    
    except Exception as e:
        print("Conexão mal-sucedida {e}")


def criar_cursor(connection):
    cursor = connection.cursor()

    return cursor


# Função para buscar todos os produtos do banco e retornar um dicionário com os produtos
def buscar_produtos():
    # Estabelecer conexão com o banco de dados Oracle
    connection = conexa_db()

    try:
        # Criar um cursor para executar comandos SQL
        cursor = connection.cursor()

        # Comando SQL para selecionar todos os produtos da tabela
        sql = "SELECT id_produto, nome, descricao, area_atuacao, valor FROM T_CH_PRODUTOS"

        # Executar o comando SQL
        cursor.execute(sql)

        # Inicializar um dicionário para armazenar os produtos
        produtos_dict = {}

        # Iterar sobre os resultados da consulta
        for produto in cursor:
            id_produto = produto[0]
            nome = produto[1]
            descricao = produto[2]
            area_atuacao = produto[3]
            valor = produto[4]

            # Criar um dicionário com os detalhes do produto
            produto_dict = {
                'nome': nome,
                'descricao': descricao,
                'area_atuacao': area_atuacao,
                'valor': float(valor) if valor is not None else None
            }

            # Adicionar o produto ao dicionário de produtos usando o ID como chave
            produtos_dict[id_produto] = produto_dict

        return produtos_dict

    except oracledb.Error as error:
        print(f"Erro ao buscar produtos: {error}")
        return None

    finally:
        # Fechar o cursor e a conexão
        if cursor:
            cursor.close()
        if connection:
            connection.close()

if __name__ == '__main__':
    app.run(debug = True, port=8080)