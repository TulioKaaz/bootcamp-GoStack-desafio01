<h1 align="center">
    <img alt="GoStack" src="https://res.cloudinary.com/zagatti/image/upload/v1583287835/readme/logo-gostack_u0ur8n.png" width="150px" />
</h1>

<h2 align="center"> Server NodeJs usando Insomnia </h2>

  
<p align="center">  Aplicação em NodeJs para armazenar projetos em forma de objeto javascript.  </p>

<p align="center">
  <img alt="License" src="https://img.shields.io/github/license/AZagatti/challenge05-gostack10?style=plastic">

</p>

---

### Como usar?

  Para iniciar a aplicação rode um ``` yarn dev ``` no terminal.

---
### Rotas 

  - ``` GET /projects ``` Lista todos os projetos cadastrados.

  - ``` POST /projects ``` Registra um novo projeto, adicionando ao array de projetos no formato de um objeto.

  - ``` POST /projects/:id/tasks ``` Registra uma nova tarefa dentro do array de tarefas dentro de um projeto especifico ja criado.

  - ``` PUT /projects/:id ``` Edita o título do projeto com o id especificado na
  rota.

  - ``` DELETE /projects/:id ``` Deleta o projeto com o id especificado na rota.

---
### Middlewares

  #### Globais
  
  - Foi implementado um Middleware que faz um log de um contador toda vez que uma requisição é chamada contando assim o numero de requisições feitas.

  #### Locais

  - Primeiro Middleware local implementado foi o ``` checkIdIsUnique ``` que checa se o id alocado a um projeto ja está em uso ou não e não deixa um um projeto ser criado se o id ja existir. Middleware usado na rota de criação de projeto.

  - Em seguida, foi implementado o Middleware ``` checkProjectExists ``` em todas as rotas que buscam um projeto ``` /projects/:id ```, o middleware procura um projeto com o id informado e se não achar imprime uma menssagem de erro.

---

### Insomnia

  Nesta API foi usado o programa insomnia para testar todas as rotas da aplicação o link para dowload esta logo a baixo.

  [insomnia](https://insomnia.rest/download/)

  E este é o link para a configuração que eu usei.

  [![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Desafio01%20-%20bootcamp%20GoStack&uri=https%3A%2F%2Fraw.githubusercontent.com%2FTulioCaz%2Fbootcamp-GoStack-desafio01%2Fmaster%2Fexport.json)
