# PIPELING uma integração entre as plataformas [Pipedrive](https://www.pipedrive.com/) e [Bling](https://www.bling.com.br/)

Aplicação consiste em pegar as negociações marcadas como `ganho` no pipedrive, as mesmas no bling como `pedidos` agrupando por dia e valor da negociação.

Uma rotina configurada manualmente é responsável por executar esse processo citado acima. `src/modules/bling/jobs/GetDealsAndCreateOrders.ts`.

Um endpoint `GET /orders` pode ser acessado para listar as transações salvas dentro do MongoDB.

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=pipeling&uri=https://github.com/deusimardamiao/pipeling/blob/master/insomnia.json)

# Techs
  * [Node.js](https://nodejs.org/en/)
  * [Typescript](https://www.typescriptlang.org/)
  * [Express.js](https://expressjs.com/pt-br/)
  * [Typeorm](https://typeorm.io/#/)
  * [MongoDB](https://www.mongodb.com/)

# Como executar localmente

Instale as dependências:

```bash
yarn
```

Para executar a aplicação:

```bash
yarn dev
```

## Variáveis de Ambiente

No arquivo [.env.example](./.env.example) tem a base para as variáveis de ambiente necessárias para a aplicação executar corretametne.

## Contribuindo

Faça as alterações desejadas e adicione-as ao _staged_:

```bash
git add .
```

Para registar suas alterações:

```bash
git commit
```
O Husky se encarregará do restante. Ele irá fazer com que o _lint_ seja executado verificando se você não deixou algum erro de lint indesejado dentro do código e também irá executar o _test_ que se encarregará de garatir que os testes escritos estejam válidos. Feito isso, você poderá escrever sua mensagem de commit eslitizada e com base nas suas modificaçẽos.
