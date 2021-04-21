---
title: Aprendendo Regex na prática - Validando e-mails em JS
description: Fala pessoal, aproveitando o assunto do último post, que por sinal
  já está quase fazendo aniversário. Hoje trago o conteúdo de uma apresentação
  que fiz na minha empresa sobre expressões regulares. Uma breve introdução as
  regex usando uma validação de email para exemplificar os conceitos passados.
date: 2021-04-21 12:47:06
thumbnailImage: ../../static/assets/img/regex_thumb.png
category: blog
---
## 1 - Introdução
As **expressões regulares** são estruturas formadas por uma **sequência de caracteres** que especificam um **padrão** formal que servem para validar, extrair ou mesmo substituir caracteres dentro de uma String.
Como estamos falando de e-mail vamos usar para este exemplo a linguagem `JavaScript`, que é a mais usada para desenvolvimento web.

### 1.1 - Regex podem ser criadas de 2 formas:   
**Notação literal** sendo passadas entre duas barras como no exemplo:  

```JS
const regexLiteral = /regex/
```

**Instanciando objeto RegExp** passando a regex dentro das chaves, como no exemplo:

```JS
const regexObj = new RegExp('regex')
```

### 1.2 - Como usar:
Podem ser passadas dentro de métodos que aceitem esse tipo de parâmetro como também possuem 2 métodos que podem ser invocados apartir do objeto regex instanciado, que são `test` e `exec` que falo mais sobre na parte de **métodos** deste post.  

```JS
// aqui criamos a regex da forma literal
const regExp = /guilherme@gmail.com/;

// aqui criamos uma função que vamos usar por todo o artigo
// ela recebe o email a ser validado e usa a regex que criamos
// chamando o método test() que apenas retorna um booleano 
// dependendo se a regex foi encontrada no texto passado.
function validaEmail(texto) {
    return regExp.test(texto);
}

validaEmail("guilherme@gmail.com");
// Irá nos retornar true, pois encontrou o padrão de letras
// que criamos dentro da string passada por parâmetro.
```

Agora note outro caso de teste:  
```JS
validaEmail("E-mail: guilherme@gmailxcom");
// Também irá nos retornar true, pois encontrou o padrão de letras
// que criamos dentro da string passada por parâmetro,
// independente de ter mais caracteres antes ou depois.
```

Você notou também que nesse segundo código temos um 'x' no lugar do ponto, isso foi aceito pela nossa função por conta dos metacaracteres que veremos a seguir.

### 1.3 - Metacaracteres
São caracteres que possuem um função determinada dentro da regex.  
Eles estão divididos em quatro grupos distintos, de acordo com características comuns entre eles.  

#### 1.3.1 Âncoras

|meta|mnemônico|função|
|:---:|:---:|:---:|
|^|circunflexo|início da linha|
|$|cifrão|fim da linha|
|\b|borda|início ou fim de palavra|  

</br>

Primeiramente queremos receber apenas o email para validar, não deve haver mais nada como espaços ou outros caracteres antes ou depois do e-mail.  
```JS
// aqui adicionamos os metacarecteres ^ e $.
const regExp = /^guilherme@gmailxcom$/;

validaEmail("E-mail: guilherme@gmailxcom");
// Agora isso retorna false, porque o circunflexo exige
// que o começo seja logo apartir de "gui..."
// Como também o $ exige que não tenha nada depois de "...com".
```

#### 1.3.2 - Representantes  

|meta|mnemônico|função|
|:---:|:---:|:---:|
|.|ponto|um caractere qualquer|
|[...]|lista|lista de caracteres permitidos|
|[\^...]|lista negada|lista de caracteres proibidos|  

</br>

Como vimos o **ponto** é um metacaractere e nesse caso para não recebermos outros carecteres aleatórios no seu lugar podemos usar a barra invertida (escape) para torná-lo literal.

```JS
// aqui adicionamos o escape para o ponto
const regExp = /^guilherme@gmail\.com$/;

validaEmail("guilherme@gmail.com");
// Nesse momento essa é a unica entrada que será satisfeita e retornará true.
```

#### 1.3.3 - Quantificadores

|meta|mnemônico|função|
|:---:|:---:|:---:|
|?|opcional|zero ou um|
|\*|asterisco|zero, um ou mais|
|\+|mais|um ou mais|
|{n,m}|chaves|de n até m|  


#### 1.3.4 Outros

|meta|mnemônico|função|
|:---:|:---:|:---:|
|\c|escape|torna literal o caractere c
|\||ou|ou um ou outro|
|(...)|grupo|delimita um grupo|
|\w||Representa o conjunto [a-zA-Z0-9_]|
|\W||Representa o conjunto [\^a-zA-Z0-9_]|
|\d||Representa o conjunto [0-9]|
|\D||Representa o conjunto [\^0-9]|
|\s||Representa um espaço em branco|
|\S||Representa um não espaço em branco|
|\n||Representa uma quebra de linha|
|\t||Representa um tab|  

</br>

Chegou a hora de deixarmos isso mais dinâmico e no lugar de receber apenas o texto estático "guilherme", vamos refatorar para que possamos receber qualquer nome.  

Para isso podemos usar os metacaracteres representados pela barra invertida e uma letra específica como mostrado na tabela **outros**.  

```JS
const regExp = /^\w@gmail\.com$/;
// aqui adicionamos o \w que aceita qualquer letra, número e _.

validaEmail("joao@gmail.com");
// Note que isso vai retornar false, porque como colocamos apenas o \w
// uma única vez, a expressão só vai aceitar uma letra antes do @.
```  

Também vai ser necessário usar os **quantificadores** para deixar a quantidade de caracteres recebidos também dinâmicos.  
Como necessitamos ter uma ou mais letras antes do "@gmail.com", usaremos o **\+** após o \w.

```JS
const regExp = /^\w+@gmail\.com$/;
// aqui adicionamos o + para aceitar uma ou mais letras.

validaEmail("joao@gmail.com");
// Agora isso retorna true.
``` 


## Listas de Caracteres
## Grupos de Captura
## Modificadores
## Métodos

## 3 - Referências
- https://aurelio.net/regex/guia/
- [JS Masterclass](https://app.agilecode.com.br/public/products/c09d58ff-ce6b-491b-b158-9982583dff79)

## 4 - Conclusão
E aí, o que achou dessa dica? deixa uma reação ou um comentário aqui embaixo. ;)
