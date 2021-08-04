# WARNING

## Projeto realizado no OS Windows 10, nao testado de forma correta em outros OS

# Teste de conhecimentos SIMP Digital

Exercicio desenvolvido pela simp com objetivo de testar conhecimentos tecnicos

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
npm run StartServer
npm run start
```

A diferenca entre os dois sao:

- StartServer
    - utiliza o pacote nodemon, logo o servidor atualiza mudancas automaticamente

- start
    - utiliza o start padrao do node, tendo que resetar todo o servidor caso alguma mudanca seja feita

## LOCAL

API esta programada para iniciar o servidor na porta 3333, caso queira mudar, e apenas necessario mudar a variavel encontrado dentro do arquivo server.js:

```javascript
const port = process.env.PORT || PORTA QUE VC DESEJA;
```