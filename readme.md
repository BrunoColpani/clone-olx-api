# Api clone OLX
---

Projeto desenvolvido afim de praticar conhecimento adquirido através de cursos, foi feito CRUD de usuários e produtos.

## Índice

- [# Api clone OLX](#-api-clone-olx)
- [Índice](#índice)
- [Tecnologias e versões utilizadas](#tecnologias-e-versões-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Start](#start)
- [Estrutura de pastas](#estrutura-de-pastas)

---
## Tecnologias e versões utilizadas

- bcrypt: "^5.0.1",
- cors: "^2.8.5",
- dotenv: "^16.0.0",
- express: "^4.17.3",
- express-fileupload: "^1.3.1",
- express-validator: "^6.14.0",
- jimp: "^0.16.1",
- mongoose: "^6.2.9",
- uuid: "^8.3.2"
- nodemon: "^2.0.15"

## Pré-requisitos
Ter node instalado e o npm instalado na maquina.

## Instalação
Como obter o projeto e buildar pacotes necessários.
```sh
$ git clone https://github.com/maxxidata/exemplo
```
Texto caso necessário que diz respeito a instalação da aplicação.
```sh
$ npm install
```

## Start
- npm run dev: Modo desenvolvimento.


## Estrutura de pastas

Public
assets/images
Nesta pasta está os assets das categorias.  

media
Nesta pasta estão as imagens do upload.


src
controllers/
Todos os controllers da aplicação estão nesta pasta.  

database/
Pasta de configuração do banco de dados.

middleware/
Pasta de configuração de middlewares utilziados na aplicação.

models/
Pasta de models de entidades.

routes/
Pasta de controle de rotas.

validator/
Pasta de midlleware de controle de acessos.
