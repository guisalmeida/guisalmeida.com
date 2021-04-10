---
title: Aprendendo RegEx na prática - Validando e-mails em JS
description: Fala pessoal, aproveitando o assunto do último post, que por sinal
  já está quase fazendo aniversário. Hoje trago o conteúdo de uma apresentação
  que fiz na minha empresa sobre expressões regulares. Uma breve introdução as
  regex usando uma validação de email para exemplificar os conceitos passados.
date: 2021-04-10 03:00:14
thumbnailImage: ../../static/assets/img/regex_thumb.png
category: blog
---
## Introdução
As **expressões regulares** são estruturas formadas por uma **sequência de caracteres** que especificam um **padrão** formal que servem para validar, extrair ou mesmo substituir caracteres dentro de uma String.

#### Podem ser criadas de 2 formas:   
**Notação literal** sendo passadas entre duas barras como no exemplo:  

```JS
const regexLiteral = /regex/
```

**Instanciando objeto RegExp** passando a regex dentro das chaves, como no exemplo:

```JS
const regexObj = new RegExp('regex')
```

#### Como usar:
Podem ser passadas dentro de funções que aceitem esse tipo de parâmetro como também possuem 2 métodos que podem ser invocados apartir do objeto regex instanciado, que são `test` e `exec` que falo mais sobre na parte de **funções** deste post.  
```JS
const regExp = /guilherme@gmail.com/;
const result = regExp.test("E-mail: guilherme@gmail.com");
console.log(result);
// Irá nos retornar true,
// pois encontrou o padrão de letras
// que criamos dentro da string passada por parâmetro.
```

## Metacaracteres
São caracteres que possuem um função determinada dentro da regex.  
Seguem alguns mais usados:  

| Simbolo | Nome | Função |
|:---:|:---:|:---:|
| . | ponto | representa qualquer caractere |
| ? | interrogação | opcional |
| \ | barra invertida | escape |
| ^ | circunflexo |   |
| \| | pipe | Indica um ou outro |
| \* | asterisco |   |
| \+ | mais |   |
| $ | cifrão |   |
| ( ) | parênteses | grupo |
| \[ \] | colchetes | lista |
| { } | chaves |   |


## Caracteres de escape
## Listas de Caracteres
## Grupos de Captura
## Quantificadores
## Modificadores
## Funções

## Conclusão
E aí, o que achou da dica? deixa uma reação ou um comentário aqui embaixo. ;)
