# Teste de conhecimentos SIMP Digital

Exercicio desenvolvido pela simp com objetivo de testar conhecimentos tecnicos

# Contextualizacao:

- Sistema para gestão de catálogo de livros
- É necessário cadastrar os usuários e os livros daquele usuário

# Requisitos:

- CRUD de Usuário:
  - Nome
  - Email
  - Senha
  - Foto de Perfil
- CRUD de Livros:
  - Título
  - Autor
  - Editora
  - Edição

# Tecnologias

- Backend:
  - NodeJS + MongoDB
  - Realizar conexão com Cloudinary para armazenamento de arquivos.




# HOW TO

## Node_modules install

Para fazer a instalacao dos modulos so rodar o seguinte comando dentro do diretorio:

```
npm install
```

## DataBase

dentro do .env.examples existe o exemplo do que voce precisa para o arquivo do .env para fazer a conexao com o banco de dados, o banco de dados usado foi o MongoDB

## START SERVER

Existem duas maneiras para se iniciar o servidor, sendo elas:

```
npm run dev
npm run start
```

A diferenca entre os dois sao:

- dev
  - utiliza o pacote nodemon, logo o servidor atualiza mudancas automaticamente

- start
  - utiliza o start padrao do node, tendo que resetar todo o servidor caso alguma mudanca seja feita

## LOCAL

API esta programada para iniciar o servidor na porta 3333, caso queira mudar, e apenas necessario mudar a variavel encontrado dentro do arquivo server.js:

```javascript
const port = process.env.PORT || PORTA QUE VC DESEJA;
```



# DOCUMENTACAO

## Rotas User

- POST /users
  - Cria usuario novo

  - Body:
    - ProfilePicture: Arquivo JPG, obrigatorio.
    - Nome: String, obrigatorio.
    - Email: String, obrigatorio.
    - Senha: String, obrigatorio.

  - Params:
    - Nao requer params.

  - Possiveis Retornos:
    - 200 
      - body com informacoes do user criado
    - 500
      - Erro interno ao criar usuario

- GET /users
  - Lista todos usuarios

  - Body:
    - Nao requer body

  - Params:
    - Nao requer params.

  - Possiveis Retornos:
    - 200 
      - body com lista de users
    - 500
      - Erro interno ao listar usuarios


- GET /users/:userId
  - Lista Usuario especifico.

  - Body:
    - Nao requer body

  - Params:
    - userId: String, obrigatorio.
  
  - Possiveis Retornos:
    - 200
      - Body com informacao do user
    - 404
      - ID do user nao encontrado

- PUT /users/:userId
  - Atualiza Usuario especifico.

  - Body:
    - Nao requer body

  - Params:
    - userId: String, obrigatorio.

  - Possiveis Retornos:
    - 200
      - Body com informacao do user com a atualizacao
    - 500
      - Erro interno ao tentar atualizar o user

- DELETE /users/:userId
  - Deleta Usuario especifico.

  - Body:
    - Nao requer body

  - Params:
    - userId: String, obrigatorio.
  
  - Possiveis Retornos:
    - 200
      - body com a mensagem "User deletado com sucesso"
    - 404
      - ID do user nao encontrado

- PUT /users/:userId/book/:bookId
  - Adiciona um livro no catalogo do usuario.

  - Body:
    - Nao requer body

  - Params:
    - userId: String, obrigatorio.
    - bookId: String, obrigatorio.
  
  - Possiveis Retornos:
    - 200
      - Body com informacao do user
    - 404
      - ID do livro nao encontrado
    - 500
      - Erro interno ao adicionar livro no catalogo

## Rotas Book

- POST /books
  - Cria usuario livro

  - Body:
    - Titulo: String, obrigatorio.
    - Autor: String, obrigatorio.
    - editora: String, obrigatorio.
    - edicao: String, obrigatorio.

  - Params:
    - Nao requer params.
  
  - Possiveis Retornos:
    - 200 
      - body com informacoes do livro criado
    - 500
      - Erro interno ao criar o livro

- GET /books
  - Lista todos livros

  - Body:
    - Nao requer body

  - Params:
    - Nao requer params.
  
  - Possiveis Retornos:
    - 200 
      - body com lista de livros
    - 500
      - Erro interno ao listar livros
  

- GET /books/:bookId
  - Lista livro especifico.

  - Body:
    - Nao requer body

  - Params:
    - bookId: String, obrigatorio.

  - Possiveis Retornos:
    - 200
      - Body com informacao do livro
    - 404
      - ID do livro nao encontrado


- PUT /books/:bookId
  - Atualiza livro especifico.

  - Body:
    - Nao requer body

  - Params:
    - bookId: String, obrigatorio.

  - Possiveis Retornos:
    - 200
      - Body com informacao do livro com a atualizacao
    - 500
      - Erro interno ao tentar atualizar o livro

- DELETE /books/:bookId
  - Deleta livro especifico.

  - Body:
    - Nao requer body

  - Params:
    - bookId: String, obrigatorio.
  
  - Possiveis Retornos:
    - 200
      - body com a mensagem "Livro deletado com sucesso"
    - 404
      - ID do livro nao encontrado

