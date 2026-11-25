
# DOCE POMAR - delivery-salada-fruta

## Desenvolvedora:
Emmaely de Oliveira Gomes

## Descrição:

Aplicativo mobile de delivery de saladas de frutas, com tela inicial, cardápio, busca por nome, preços de cada produto e carrinho.

## Objetivo:

O objetivo é oferecer ao cliente uma forma simples e rápida de percorrer o cardápio, escolher seu pedido, sem a dependência de aplicativos de mensagens ou ligações que são lentos e sujeitos a erro.

## Tecnologias utilizadas:

- React Native
- Expo
- TypeScript
- Git
- GitHub

## Funcionalidades:

- Tela inicial com boas-vindas, oferta e categorias;
- Cardápio com 11 opções de saladas de frutas, divididas em 3 categorias;
- Barra de pesquisa que filtra as opções pelo nome;
- Imagens, descrição e preço em cada salada;
- Carrinho de compras com adição, remoção e cálculo do valor total.

## Estrutura do projeto:

A interface do aplicativo fica na pasta "app", o estado do carrinho na pasta "context_car" e os dados das saladas na pasta "dados_saladas", todas dentro de "src".

delivery-salada-fruta
├── assets
|   └──  imagens
|
├── src
│   ├── app
│   │   ├── _layout.tsx         (configuração da navegação)
│   │   ├── index.tsx           (tela inicial)
│   │   ├── cardapio.tsx        (cardápio com busca)
│   │   ├── confirmacao.tsx     (confirmação do pedido)
│   │   └── explore.tsx  
|   |    
│   ├── context_car
│   │   └── carrinho_context.tsx  (estado global do carrinho)
|   |
│   └── dados_saladas
│       └── saladas.ts    (dados das saladas, categorias e ids)
|
├── components
|       └── saladaCard.tsx
|
└── README.md

## Como executar:

1. Para instalar as dependências:
npm install

2. Para executar o projeto:
npx expo start