---
title: Aprendendo RegEx na prática - Validando emails em JS
description: Aproveitando o assunto do último post, que por sinal já está quase
  fazendo aniversário. Hoje trago o conteúdo de uma apresentação que fiz na
  minha empresa sobre expressções regulares. Uma breve introdução as regex
  usando uma validação de email para exemplificar os conceitos passados.
date: 2021-04-09T12:13:14.000Z
thumbnailImage: ../../static/assets/img/regex_thumb.png
category: blog
---
## Sobre o que falaremos

- [Introdução](#Introdução)
- [Metacaracteres](#Metacaracteres)
- Caracteres de escape
- Listas de Caracteres
- Grupos de Captura
- Quantificadores
- Modificadores
- Funções

## Introdução
As **expressões regulares** são estruturas formadas por uma **sequência de caracteres** que especificam um **padrão** formal que servem para validar, extrair ou mesmo substituir caracteres dentro de uma String.

#### Podem ser criadas de 2 formas:   
**Notação literal** sendo passadas entre duas barras como no exemplo:  

```js
regexLiteral = /regex/
```

**Instanciando objeto RegExp** passando a regex dentro das chaves, como no exemplo:

```js
regexObj = new RegExp('regex')
```

## Metacaracteres
As **expressões regulares** são estruturas formadas por uma **sequência de caracteres** que especificam um **padrão** formal que servem para validar, extrair ou mesmo substituir caracteres dentro de uma String.

#### Podem ser criadas de 2 formas:   
**Notação literal** sendo passadas entre duas barras como no exemplo:  

```js
regexLiteral = /regex/
```

**Instanciando objeto RegExp** passando a regex dentro das chaves, como no exemplo:

```js
regexObj = new RegExp('regex')
```
