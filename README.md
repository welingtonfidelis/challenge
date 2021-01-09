# Delivery Much Tech Challenge
Este projeto é resultado do desafio técnico da empresa Delivery Much, e tem o objetivo de receber uma lista de ingredients e retornar uma lista de receitas possíveis com base nos ingredients através da api [Recipe Puppy] , além de um giphy ligado ao nome de cada receita com uso da api [Developers Giphy].
O projeto contém testes unitários com uso de [Jest], validação de entrada de dados com [Joi] e criação de um container com [Docker]

---

## Requisitos
- [Docker] - OPCIONAL. Caso deseje executar a api através de um container docker;
- [Postman] - OPCIONAL. Caso deseje fazer requisições à api através de um client http, pode-se usar o Postman;
- [Node.js] - Versão 12 ou superior;
- [API KEY Giphy] - Uma chave válida para uso da giphy api;

---

## Instalação 
Após clonar o projeto, é preciso incluir alguns valores nas variáveis de ambiente. Para isso, crie um arquivo nomeado de **.env** no diretório do projeto e preencha o arquivo com as informações do arquivo **.env.example** na raiz do projeto (substituindo os valores não default com suas informações).

Há duas maneiras de executar o projeto, descritas abaixo.

 - **Container Docker**: Com o [Docker] instalado em seu ambiente, para que uma imagem docker do projeto seja criada, execute o comando 
`docker build -t node-api-recipes .` através de seu terminal de comandos no diretório raíz do projeto. Em seguida, execute o comando `docker run -d -p 3001:3001 node-api-recipes` para que um container baseado nesta imagem seja criado e executado.

- **Node.js**: Em seu terminal de comandos no diretório do projeto, execute o comando `npm install` para que sejam instaladas as dependências do projeto. Em seguida, execute o comando `npm start` para que o projeto seja executado.

Pronto, o projeto já está executando em seu ambiente e pode ser acessado através do endereço *http://localhost:3001*.

---

## Utilização
As seguintes rotas estão disponíveis no projeto:

### Lista de receitas a partir de ingredientes

***URL:** http://localhost:3001/recipes

**Parâmetros:** 
- `i` - Lista de ingredientes em inglês, separadas por vírgula. Ex.: milk, egg, hot salce;
- `page` - OPCIONAL. Paginação na listagem de receitas. Default: 1;

**Tipo de requisição:** GET

**Body:** Sem body

**Retorno:**
```
{
    "keywords": [
        "milk",
        "egg",
        "hot salce"
    ],
    "recipes": [
        {
            "title": "Hot Milk Cake Recipe",
            "ingredients": [
                "milk",
                "sugar",
                "flour",
                "butter",
                "egg",
                "salt",
                "vanilla extract",
                "baking powder"
            ],
            "link": "http://www.grouprecipes.com/42167/hot-milk-cake.html",
            "gif": "https://media0.giphy.com/media/IzXiddo2twMmdmU8Lv/giphy.gif?cid=2d14a4c2pqmnpelhvv1kiubqr0v2vcaus0kd160vmi659bcv&rid=giphy.gif"
        },
        {
            "title": "Old Fashioned Macaroni and Cheese - Southern Living",
            "ingredients": [
                "elbow macaroni",
                "cheddar cheese",
                "egg",
                "milk",
                "salt",
                "black pepper",
                "paprika"
            ],
            "link": "http://www.bigoven.com/117111-Old-Fashioned-Macaroni-and-Cheese---Southern-Living-recipe.html",
            "gif": "https://media3.giphy.com/media/L3QfoRADDSz7PId3CE/giphy.gif?cid=2d14a4c2lithu02111ja7h64s47ek786jwtesudp9zh6i5sg&rid=giphy.gif"
        },
		]
}
```
### Teste de conexão com api

***URL:** http://localhost:3001/test

**Parâmetros:** Nenhum parâmetro

**Tipo de requisição:** GET

**Body:** Sem body

**Retorno:**
```
{
    "ok": true,
    "data": "Hello World!"
}
```

---
## Testes
Para executar os testes no projeto, execute o comando `npm run test` e aguarde a execução e resultado.
```
Test Suites: 5 passed, 5 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        2.797 s, estimated 3 s
```
---

## Postman collection
Se desejar, pode baixar a collection do [Postman] através [deste link] e ter acesso às rotas apresentadas anteriormente.

---
## Contato
welingtonfidelis@gmail.com

Sugestões e pull requests são sempre bem vindos. 🤓

[Recipe Puppy]: <http://www.recipepuppy.com/about/api/>
[Developers Giphy]: <https://developers.giphy.com/docs/>
[Jest]: <https://jestjs.io/docs/en/getting-started.html>
[Joi]: <https://joi.dev/api/>
[Docker]: <https://docs.docker.com/get-docker/>
[API KEY Giphy]: <https://developers.giphy.com/docs/api#quick-start-guide>
[Node.js]: <https://nodejs.org/en/>
[Postman]: <https://www.postman.com/downloads/>
[deste link]: <https://drive.google.com/file/d/1GiKQoLjnPw073SKwMvgxl5S8K9qp5yAl/view?usp=sharing>