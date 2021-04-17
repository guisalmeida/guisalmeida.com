---
title: Aprendendo RegEx na prática - Validando e-mails em JS
description: Fala pessoal, aproveitando o assunto do último post, que por sinal
  já está quase fazendo aniversário. Hoje trago o conteúdo de uma apresentação
  que fiz na minha empresa sobre expressões regulares. Uma breve introdução as
  regex usando uma validação de email para exemplificar os conceitos passados.
date: 2021-04-16 09:04:54
thumbnailImage: ../../static/assets/img/regex_thumb.png
category: blog
---
## Introdução
As **expressões regulares** são estruturas formadas por uma **sequência de caracteres** que especificam um **padrão** formal que servem para validar, extrair ou mesmo substituir caracteres dentro de uma String.
Como estamos falando de e-mail vamos usar para este exemplo a linguagem `JavaScript`, que é a mais usada para desenvolvimento web.

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
Podem ser passadas dentro de métodos que aceitem esse tipo de parâmetro como também possuem 2 métodos que podem ser invocados apartir do objeto regex instanciado, que são `test` e `exec` que falo mais sobre na parte de **métodos** deste post.  

```JS
// aqui criamos a regex da forma literal
const regExp = /guilherme@gmail.com/;

function validaEmail(texto) {
    return regExp.test(texto);
}

validaEmail("guilherme@gmail.com");
// Irá nos retornar true,
// pois encontrou o padrão de letras
// que criamos dentro da string passada por parâmetro.
```

Agora note outro caso de teste:  
```JS
validaEmail("E-mail: guilherme@gmailxcom");

// Também irá nos retornar true,
// pois encontrou o padrão de letras
// que criamos dentro da string passada por parâmetro,
// independente de ter mais caracteres antes ou depois.
```

Você notou também que nesse segundo código temos um 'x' no lugar do ponto, isso foi aceito pela nossa função por conta dos metacaracteres que veremos a seguir.

## Metacaracteres
São caracteres que possuem um função determinada dentro da regex.  
Eles estão divididos em quatro grupos distintos, de acordo com características comuns entre eles.  

### Representantes
|meta|mnemônico|função|
|:---:|:---:|:---:|
|.|ponto|um caractere qualquer|
|[...]|lista|lista de caracteres permitidos|
|[^...]|lista negada|lista de caracteres proibidos|  

### Quantificadores

|meta|mnemônico|função|
|:---:|:---:|:---:|
|?|opcional|zero ou um|
|\*|asterisco|zero, um ou mais|
|\+|mais|um ou mais|
|{n,m}|chaves|de n até m|  

### Âncoras

|meta|mnemônico|função|
|:---:|:---:|:---:|
|^|circunflexo|início da linha|
|$|cifrão|fim da linha|
|\b|borda|início ou fim de palavra|  

### Outros

|meta|mnemônico|função|
|:---:|:---:|:---:|
|\c|escape|torna literal o caractere c
|\||ou|ou um ou outro|
|(...)|grupo|delimita um grupo|  

### Metacaracteres barra-letra  
|meta|função|
|:---:|:---:|
|\w|Representa o conjunto [a-zA-Z0-9_]|
|\W|Representa o conjunto [^a-zA-Z0-9_]|
|\d|Representa o conjunto [0-9]|
|\D|Representa o conjunto [^0-9]|
|\s|Representa um espaço em branco|
|\S|Representa um não espaço em branco|
|\n|Representa uma quebra de linha|
|\t|Representa um tab|

</br>
Bom agora que já temos bastante teoria, vamos voltar ao nosso código para refatorar e entender melhor alguns desses metacaracteres apresentados.  
  
Primeiramente queremos receber apenas o email para validar e nada mais, como espaços ou outros caracteres antes ou depois do e-mail.  

```JS
// aqui criamos a regex da forma literal
const regExp = /^guilherme@gmail.com$/;

function validaEmail(texto) {
    return regExp.test(texto);
}
validaEmail("E-mail: guilherme@gmailxcom");
// Agora isso retorna false,
// porque o circunflexo exige
// que o começo seja logo apartir de "gui..."
// Como tamem o $ exige que não tenha
// nada depois de "...com".
```

## Listas de Caracteres
## Grupos de Captura
## Quantificadores
## Modificadores
## Métodos

## Referências
- https://aurelio.net/regex/guia/

## Conclusão
E aí, o que achou da dica? deixa uma reação ou um comentário aqui embaixo. ;)
