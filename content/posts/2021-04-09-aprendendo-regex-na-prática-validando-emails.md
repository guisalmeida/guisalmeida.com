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
# 1 - Introdução
As **expressões regulares** são estruturas formadas por uma **sequência de caracteres** que especificam um **padrão** formal que serve para validar, extrair ou mesmo substituir caracteres dentro de uma String.  

Como estamos falando de e-mail vamos usar para este exemplo a linguagem `JavaScript`, que é a mais usada para desenvolvimento web. 

## 1.1 - Disclaimer
As expressões regulares são aceitas por várias linguagens de programação e a maioria desses conceitos apresentados também servirão para outros cenários.  
Porém este post se limita a uma breve introdução sobre as regex, para um conhecimento ainda mais técnico e aprofundado indico os sites que estão nas referências desse post.

## 1.2 - Regex podem ser criadas de 2 formas:   
**Notação literal** sendo passadas entre duas barras como no exemplo:  

```JS
const regexLiteral = /regex/
```

**Instanciando objeto RegExp** passando a regex dentro das chaves, como no exemplo:

```JS
const regexObj = new RegExp('regex')
```

## 1.3 - Como testar
Para acompanhar esse post testando em sua máquina é necessário somente ter o [node JS](https://nodejs.org/pt-br/) instalado e acessar a pasta onde criou seu arquivo JS e rodar o comando no terminal `node nomeArquivo.js`.

## 1.4 - Como usar
Podem ser passadas dentro de métodos que aceitem esse tipo de parâmetro como também possuem 2 métodos que podem ser invocados a partir do objeto regex instanciado, que são `test` e `exec` que falo mais sobre na parte de **métodos** deste post.  

```JS
// aqui criamos a regex da forma literal, que vamos ir refatorando.
const regExp = /guilherme@gmail.com/;

// aqui criamos uma função que vai ser a mesma em todo o post
// ela recebe o e-mail a ser validado e usa a regex que criamos
// chamando o método test() que valida o e-mail e retorna um booleano 
// dependendo se a regex foi satisfeita ou não.
function validaEmail(texto) {
    return regExp.test(texto);
}

validaEmail("guilherme@gmail.com");
// Aqui chamamos a função que vai nos ajudar a validar nossa regex,
// nesse primeiro caso ela irá nos retornar true, pois encontrou o padrão de letras
// que criamos dentro da string passada por parâmetro.

validaEmail("Guilherme@gmail.com");
// Porém cuidado, as regex são case-sensitive e isso nos retornaria false.
// Mais a frente no post vamos ver como modificar isso.
```

Agora note outro caso de teste:  
```JS
validaEmail("E-mail: guilherme@gmailxcom");
// Também irá nos retornar true, pois encontrou o padrão de letras
// que criamos dentro da string passada por parâmetro,
// independente de ter mais caracteres antes ou depois.
```

Você notou também que nesse segundo código temos um 'x' no lugar do ponto, isso foi aceito pela nossa função por conta dos metacaracteres que veremos a seguir.

## 1.5 - Metacaracteres
São caracteres que possuem um função determinada dentro da regex.  
Eles estão divididos em quatro grupos distintos, de acordo com características comuns entre eles.  

### 1.5.1 Âncoras

|meta|mnemônico|função|
|:---:|:---:|:---:|
|^|circunflexo|início da linha|
|$|cifrão|fim da linha|
|\b|borda|início ou fim de palavra|  

</br>

Primeiramente queremos receber apenas o e-mail para validar, não deve haver mais nada como espaços ou outros caracteres antes ou depois do e-mail.  
```JS
// aqui adicionamos os metacarecteres ^ e $.
const regExp = /^guilherme@gmailxcom$/;

validaEmail("E-mail: guilherme@gmailxcom");
// Agora isso retorna false, porque o circunflexo exige
// que o começo seja logo após de "gui..."
// Como também o $ exige que não tenha nada depois de "...com".
```

### 1.5.2 - Representantes  

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
// Nesse momento essa é a única entrada que será satisfeita e retornará true.
```

### 1.5.3 - Quantificadores

|meta|mnemônico|função|
|:---:|:---:|:---:|
|?|opcional|zero ou um|
|\*|asterisco|zero, um ou mais|
|\+|mais|um ou mais|
|{n}|chaves|quantifica um número específico|  
|{n,}|chaves|quantifica um número mínimo|  
|{n,m}|chaves|quantifica de n até m|  


### 1.5.4 Outros

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

Para isso podemos usar os metacaracteres representados pela barra invertida e uma letra específica como mostrado na tabela acima.  

```JS
const regExp = /^\w@gmail\.com$/;
// aqui adicionamos o \w que aceita qualquer letra, número e _.

validaEmail("joao@gmail.com");
// Note que isso vai retornar false, porque como colocamos apenas o \w
// uma única vez, a expressão só vai aceitar uma letra antes do @.
```  

Também vai ser necessário usar os **quantificadores** para deixar a quantidade de caracteres recebidos também dinâmicos.  
Como necessitamos ter uma ou mais letras antes do @, usaremos o **\+** após o \w.

```JS
const regExp = /^\w+@\D+\.\D+$/;
// aqui adicionamos o \w+ antes do @ para aceitar um ou mais caracteres
// e também o \D para recebermos caracteres que não sejam números após o @.

validaEmail("joao_123@outlook.br");
// Agora isso retorna true.
```

## 2 - Avançando nas regex
Agora vamos nos aprofundar um pouco mais nas expressões regulares, veremos como podemos criar padrões mais específicos para poder criar nossa regex de acordo com cada necessidade. 

### 2.1 - Listas de Caracteres
As listas como apresentadas na seção 1.5.2, são bem mais específicas, ela guarda dentro de si apenas os caracteres que serão permitidos, então algo como `[aeiou]` limita nossa regex a aceitar apenas letras vogais.  

Continuando no nosso código poderiamos alterar o `\D` por uma lista sem problemas. Por exemplo, onde queremos receber o nome do provedor após o `@` deve ser sem números e símbolos, apenas letras, podemos usar uma lista `[a-z]` que vai aceitar apenas o range de a até z, nada de números, símbolos, etc será aceito.

```JS
const regExp = /^\w+@[a-z]+\.[a-z]+$/;
// Adicionando a lista [a-z] no lugar dos \D

validaEmail("joao_123@outlook.br");
// Isso ainda continua retornando true.

validaEmail("joao_123@gm4il.com");
// Porém isso retornará false, note que colocamos um 4 no meio da palavra.
```

### 2.2 - Grupos de Captura
Como vimos na seção 1.5.4, um grupo de captura pode realizar a extração de valores de uma determinada String. Como também para quando necessitamos que uma determinada parte da expressão regular se repita usando os quantificadores por exemplo, podemos usar parênteses em torno dela.

Vamos agora refatorar nosso código para poder receber tanto e-mails ".com" mas também ".com.br" e etc. Note que o padrão se repete sempre tem um ponto e uma sequencia de letras, para isso podemos usar um grupo e dizer que esse padrão pode se repetir uma ou mais vezes usando o quantificador `+`.

```JS
const regExp = /^\w+@[a-z]+(\.[a-z]+)+$/;
// Adicionando a parte da regex responsável por validar o ponto
// e a sequência de letras em um grupo dentro de parênteses.
// E adicionando um quantificador fora para esse padrão poder se repetir.

validaEmail("joao_123@outlook.com.br");
// Retorna true, agora já podemos receber e-mails de vários tipos.

validaEmail("joao_123@outlook.com.br.br.br");
// Porém isso também vai retornar true.
```

Para ter mais controle de quantos grupos podemos receber, vamos usar um quantificador mais especifico nesse caso.

```JS
const regExp = /^\w+@[a-z]+(\.[a-z]+){1,2}$/;
// Adicionando um quantificador fora que define que o grupo pode se repetir,
// no mínimo uma vez até no máximo duas vezes.

validaEmail("joao_123@outlook.com.br.br.br");
// Agora isso vai retornar false.
```


### 2.3 - Modificadores
São semelhantes aos metacaracteres, porém são usados fora da expressão.
Aqui vou apresentar apenas dois, que são mais usados:  

|modificador|mnemônico|função|
|:---:|:---:|:---:|
|i|case-insensitive|não leva em consideração maiúsculas e minúsculas|
|g|global Match|procura todas as ocorrências da expressão no texto,</br>ao invés de parar na primeira ocorrência|  

Para o nosso exemplo vamos passr o modificador de case-insensitive (i), para podermos receber também e-mails que tenham sido digitados em letras maiúsculas, pois sabemos que os provedores de e-mail não fazem essa distinção entre maiúsculas e minúsculas.

```JS
const regExp = /^\w+@[a-z]+(\.[a-z]+){1,2}$/i;
// Adicionando o modificador i depois da barra que indica o fim da expressão.

validaEmail("JoAo_123@outlook.com.br");
// Agora isso também vai retornar true.
```

### 2.4 - Métodos
Vamos conhecer alguns que podem ser usados com as regex.  

Viemos usando desde o início dentro da nossa função `validaEmail` o método
`test` que pode ser invocado a partir do objeto RegExp que criamos. Além dele também pode ser invocado o método `exec`.

|método|função|retorno|
|:---:|:---:|:---:|
|test|Testa string para ver se o padrão foi satisfeito|boolean|
|exec|detalha o que foi encontrado de acordo com a expressão|array ou null|  


Também podemos usar métodos invocados a partir de uma string

|método|função|retorno|
|:---:|:---:|:---:|
|replace|Substitui strings que deram match por uma nova string|string| 
|match|busca strings que deram match com a regex|array| 


Para finalizar vamos supor que queremos usar parte do e-mail antes do `@` para ser o nome do usuário, o método exec pode nos ajudar com isso.  

Para isso vamos criar outra função no nosso código e também adicionar a parte da regex responsável por validar o e-mail antes do `@` em um grupo () para podermos capturá-lo com exec.

```JS
const regExp = /^(\w+)@[a-z]+(\.[a-z]+){1,2}$/i;
// Adicionando um grupo antes do @.

// Criando a função que vai usar o exec para pegar nome
function pegaUsername(texto) {
    return regExp.exec(texto)
}

pegaUsername("JoAo_123@outlook.com.br")
// Dessa forma o exec nos retornará um array
// com dados detalhados sobre o que encontrou no texto:
// [ 
//   'JoAo_123@outlook.com.br',         = parte do texto que satisfez a expressão 
//   'JoAo_123',                        = 1º grupo de captura encontrado
//   '.br',                             = 2º grupo de captura encontrado
//   index: 0,                          = índice onde foi encontrado
//   input: 'JoAo_123@outlook.com.br'   = entrada que o exec recebeu
// ]
```

Ok podemos ver melhor como o exec funciona, mas ainda não é o que queremos.  
Sabendo agora que o array retornado sempre vai conter na primeira posição a parte do texto que deu match, em seguida os grupos de captura encontrados e no final o `index` e `input`. Podemos pegar apenas o grupo que queremos que seja o username.

```JS
const regExp = /^(\w+)@[a-z]+(\.[a-z]+){1,2}$/i;

// Criando a função que vai usar o exec para pegar nome
function pegaUsername(texto) {
    // aqui estamos pegando direto o índice 1 do array retornado do exec
    const userName = regExp.exec(texto)[1]
    return userName
}

pegaUsername("JoAo_123@outlook.com.br")
// Retornará "JoAo_123"
```

## 3 - Referências
- https://regexr.com/
- https://aurelio.net/regex/guia/
- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions
- https://www.devmedia.com.br/expressoes-regulares-em-javascript/37015
- https://medium.com/@alexandreservian/regex-um-guia-pratico-para-express%C3%B5es-regulares-1ac5fa4dd39f


## 4 - Conclusão  
As regex são muitos úteis no dia a dia de um desenvolvedor, uma ferramenta incrível que auxilia na hora de fazer validações, buscas e etc.  

E aí, o que achou desse post? Tem alguma sugestão ou crítica? Deixa uma reação ou um comentário aqui embaixo. E obrigado pela visita! 😉
