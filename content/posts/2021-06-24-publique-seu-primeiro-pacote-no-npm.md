---
title: Publique seu primeiro pacote no NPM
description: Este post além de mostar como publicar um pacote, também apresenta
  conceitos importantes como versionamento, compatibilidade e o gerenciamento de
  dependências.
date: 2021-07-04 07:35:29
thumbnailImage: ../../static/assets/img/npmjs-private-package.png
category: blog
---
___

## Índice

```toc
exclude: Índice
```
---

## 1. Introdução
Diariamente criamos ou trabalhamos em projetos em que usamos vários pacotes de terceiros, sejam eles **bibliotecas**, **CLIs** ou 
qualquer outra **API** que seja útil para algo. Praticamente qualquer projeto que envolva `JS` hoje em dia vai possuir um arquivo na sua raíz chamado `package.json` com esses pacotes salvos.
Quando eu estava iniciando criando pequenos projetos apenas importando o que precisava sem dar muita atenção de onde que isso saiu e como foi parar lá, não tinha noção de como toda essa estrutura funcionava.  

Com um pouco mais de experiência e conhecimento pude compreender algumas coisas e ir atrás de outras para entender melhor, até que também pude publicar meu primeiro pacote e importá-lo em outros projetos. 
Este é um caminho simples, mas acredito que necessário para entender questões como **versionamento**, **compatibilidade** e o **gerenciamento de dependências** do seu projeto.

### 1.1. O que é o NPM
Sigla para **Node Package Manager**, foi criado como um projeto open-source para ajudar os desenvolvedores de JavaScript a compartilhar facilmente módulos de código empacotados e atualmente pertence ao **Github**.

O NPM possui uma **Interface via linha de comando (CLI)** que permite aos desenvolvedores instalar e publicar seus pacotes. E também um **banco de dados online de pacotes** públicos e privados pagos, chamado de **NPM Registry**.  

### 1.2. NPM CLI
A sintaxe do cli segue sempre do nome "npm" seguido do comando.
![npm-cli](https://user-images.githubusercontent.com/45276342/124369115-bf453900-dc3e-11eb-85d9-bfc769d181e4.png)

### 1.3. NPM Registry
Possui essa interface onde podemos consultar informações sobre pacotes e outras métricas.  

![registry](https://user-images.githubusercontent.com/45276342/124369151-1cd98580-dc3f-11eb-92c1-60a9ad08bb5b.png)


---

## 2. Gerenciando pacotes
O NPM existe para facilitar o gerenciamento de dependências. Seu projeto pode ter centenas de dependências, cada uma com suas próprias dependências. E isso pode começar a se tornar muito complexo de manter a organização, para isso o **NPM** foi criado com um conjunto de comandos que permitem você instalar e gerenciar tudo isso e, dificilmente, você vai precisar se preocupar com elas.

Quando você instala um pacote com o NPM, uma nova informação é adicionada ao arquivo `package.json` contendo o nome do pacote e a versão que será usada. Como veremos mais à frente, existem algumas configurações para definir melhor essas versões.

### 2.1. Contexto das dependências
Ao instalar pacotes no nosso projeto podemos ter dois cenários, onde usamos pacotes apenas para desenvolvimento e outros que também vão ser usados em produção. 
Para isso temos as informações de `dependencies` e `devDependencies` no `package.json` e elas se diferem da seguinte maneira:

- **dependencies** são geralmente utilizadas para declarar os pacotes necessários para executar seu projeto em um ambiente de execução como produção;  

- **devDependencies** são utilizadas para indicar pacotes necessários para executar seu projeto em um cenário de desenvolvimento e testes (como pacotes relacionados a teste e formatação geral do código-fonte do seu projeto).  

Para realizar uma instalação, basta rodar no terminal:
```sh
npm install prod-package
npm install --save-dev test-package
```

A linha que utiliza `--save-dev` salvará o pacote em devDependencies. Já a linha sem opção salva por padrão em dependencies.  

```json
{
  "dependencies": {
    "prod-package": "^2.12.0"
  },
  "devDependencies": {
    "test-package": "^1.1.1"
  }
}
```

> Por padrão o NPM instalará a versão mais nova do pacote, inserindo um caractere `^` (circunflexo) na frente da versão `^2.12.0`. Isso significa que o pacote será instalado com uma versão que seja igual ou superior a 2.12.0. Isso é baseado no **Versionamento Semântico** como veremos a seguir.

---

## 3. Versionamento Semântico (semver)
É o conceito usado por trás do NPM e o que o tornou um sucesso. Quando estamos criando uma aplicação com a qual outras irão integrar, devemos comunicar como as alterações feitas afetarão a capacidade de integração desses terceiros com sua aplicação. Isso é feito através do **versionamento semântico**, uma versão é dividida em 3 partes e segue a seguinte convenção:  

| Major | Minor | Patch |  
| :---: | :---: | :---: |  
| **X** | **Y** | **Z** |

### 3.1. Major (principal)
É o 1° número. Qualquer atualização que quebre a retrocompatibilidade deve incrementar esse dígito. 
Alterar algo na versão major significa que houve uma quebra de compatibilidade. Se o usuário não fizer a alteração necessária, ele não conseguirá mais integrar com sua aplicação.  
Ex.: Remoção de uma função ou a remoção/renomeação de um método de classe.

### 3.2. Minor (menor)
É o 2° número. Qualquer atualização que adicione funcionalidades sem quebrar o código que usa versões anteriores deve incrementar esse dígito. Uma alteração na versão minor trará uma nova funcionalidade, mas sem quebrar o que existe atualmente.  
Ex.: adição de métodos em uma classe. 

### 3.3. Patch (correção)
É o 3° número. Qualquer atualização que não adicione, remova, ou modifique alguma funcionalidade deve incrementar esse dígito. Uma modificação no patch não quebrará nada. Muito pelo contrário, corrigirá algo.  
Ex.: correções de bugs. 


Então você abre o `package.json` e rapidamente entende que as `dependencies` são os pacotes que sua aplicação usa, mas onde deveriam estar listadas as versões dos pacotes tem um monte de símbolos como o **til (˜)** e o **circunflexo (^)**.

### 3.4. Ranges (intervalos)
Os intervalos basicamente permitem que versões mais recentes de pacotes sejam instaladas automaticamente. Correções de bugs, patches importantes podem ser recebidos ou distribuídos automaticamente, mas alterações importantes são proibidas de serem instaladas.

| Range | Descrição |
| ------------- |-------------|
| `"*"` | Aceita qualquer versão |
| `"2"` ou `"2.x.x"` | Especifica uma versão, cobre todas as versões de PATCH e MINOR |
| `"<1.0.0"` | Só aceita versões na faixa `"0.x.x"` |
| `">=1.2.0 <1.3.0"` | Separados por espaço (and). É similar a `"1.2.x"` |
| `"1.2.3 - 2.3.4"` | É o mesmo que `">=1.2.3 <=2.3.4"` |
| `"< 2.1 \|\| > 1.9"` | O operador `\|\|` (ou) é usado para combinar versões |
| `"~1.2.3"` | É semelhante a `">=1.2.3 <1.3.0"`.<br>O caractere `~` (til) define um intervalo de versões de PATCH aceitáveis |
| `"^1.2.3"` | É semelhante a `">=1.2.3 <2.0.0"`.<br>O caractere `^` (circunflexo) define uma gama de versões PATCH e MINOR |

> Por convenção, ao iniciar o projeto usa-se a versão `"0.1.0"` para desenvolvimento e ao publicar uma versão pública usa-se `"1.0.0"`.

Ferramenta para testar a sintaxe: <a target="_blank" href="https://semver.npmjs.com/">**npm semver calculator**</a>

---

## 4. Ambiente
Primeiramente será necessário configurarmos nosso ambiente de desenvolvimento para seguirmos.  

### 4.1. Criando usuario no NPM
Para utilizarmos pacotes públicos disponíveis no NPM não necessitamos de usuário, porém como queremos publicar nossos pacotes devemos ter um usuário cadastrado. Acesse a parte de <a target="_blank" href="https://www.npmjs.com/signup">**cadastro**</a> para criar.  

![signup](https://user-images.githubusercontent.com/45276342/122768638-2d225580-d27a-11eb-8a17-ae28c4e8eed1.png)

### 4.2. Instalando NPM
Para uso do NPM via linha de comando (CLI) em sua máquina também é necessário a instalação do nodejs. Ao instalar o node o NPM também é instalado.
Você pode fazer instalação de várias maneiras de acordo com seu sistema operacional, para isso é necessário acessar a página de downloads do <a target="_blank" href="https://nodejs.org/pt-br/download/">**node**</a>.   
![node](https://user-images.githubusercontent.com/45276342/124369464-768f7f00-dc42-11eb-9d13-334f944fe276.png)
No **linux**, você pode instalar pelo gerenciador de pacotes wget, basta abrir o terminal e executar:
```sh
wget -qO- https://deb.nodesource.com/setup_4.x | sudo bash -

sudo apt-get install --yes nodejs
```

Após a instalação do Node.js, você pode verificar tanto a versão do Node.js quanto a versão do NPM que foram instaladas executando os seguintes comandos: `node -v` e `npm -v`.

![versions](https://user-images.githubusercontent.com/45276342/124369558-354b9f00-dc43-11eb-927a-363a605559e0.png)

### 4.3. Logando local
Com as ferramentas instaladas podemos rodar o comando que vai logar nosso NPM que está instalado na máquina, para poder ter acesso ao registry onde ficam salvos os pacotes, para podermos publicar o nosso.
```sh
npm adduser
```
Preencher infos de login:

```sh
Username: guisalmeida
Password: *****
Email: (this IS public) guisalmeida.dev@gmail.com

logged...
```

### 4.4. Configurações iniciais
É uma boa prática setarmos alguns dados de usuário para que nossos pacotes já tenham essa configuração ao ser iniciados.  

```sh
npm set init-author-name "Guilherme Almeida"
npm set init-author-email "guisalmeida.dev@gmail.com"
npm set init-author-url "https://guisalmeida.com"
npm set init-license "MIT"
```

### 4.5. Criar projeto NPM
Na pasta do projeto passe o seguinte comando, `-y` para usar a configuração default que setamos antes:
```sh
npm init -y
```

> Caso já tenha iniciado o projeto e ele já possui o `package.json` pode pular esta parte.  
> Apenas certifique-se que as configurações necessárias estejam nele.

---

## 5. Publicação

### 5.1. Nome do pacote
É importante é verificar no **NPM registry** se já há algum pacote com mesmo nome que você pretende por no seu, pois ele não será aceito se houver. Configure no `package.json` o nome.  
```json
{
  "name": "nome-do-pacote",
}
```

### 5.2. Exportando apenas arquivos de produção
Uma boa prática **antes da publicação**, quando o projeto tem muitos arquivos e usa muitos outros pacotes de terceiros é especificarmos apenas a pasta onde estão os códigos gerados para produção, por exemplo a pasta `build` ou `dist`. No arquivo `package.json` pode ser passado o atributo `files` com nome da pasta:
```json
{
  "files": [
    "dist"
  ],
}
```

### 5.3. Pacote a ser exportado
Dependendo das configurações que você passar no `package.json` o pacote que vai ser exportado não vai ser igual a pasta do seu projeto, isso tem suas vantagens como vimos acima. Para ver como vai ser criado o pacote podemos passar o seguinte comando:
```sh
npm pack
```
> Será criado um arquivo na raíz do projeto com o pacote compactado.

### 5.4. Publicando via CLI
Após configurado o `package.json`, necessitamos apenas passar o comando na pasta do projeto:
```sh
npm publish
```
Se estiver tudo certo, ele compactará os arquivos e enviará para o registry:
![publish](https://user-images.githubusercontent.com/45276342/124196251-6771cb00-daa2-11eb-9310-7739c36feeb8.png)

### 5.5. Vizualizando seu pacote
Após a publicação você pode conferir algumas métricas e configurações do pacote no registry, acessando o seu perfil lá estarão todos seus pacotes publicados. Faça um README bem completo, pois ele também ficará visivel para outros usuários interessados no seu pacote.  
![dbgen-cli](https://user-images.githubusercontent.com/45276342/124196151-31344b80-daa2-11eb-9a86-11e905c87b1f.png)


### 5.6. Importando seu pacote
Por fim seu pacote já pode ser importado em outros projetos, como já vimos, apenas passe o seguinte comando:

```sh
npm install nome-do-pacote
```

---

## 6. Referências
- https://semver.org/lang/pt-BR/
- https://docs.npmjs.com/about-semantic-versioning
- https://dev.to/coderarchive/semver-and-conventional-commits-4omc
- https://dev.to/filipebeck/versionamento-semantico-com-npm-id0
- https://dev.to/mariokandut/what-is-semantic-versioning-3poo
- https://dev.to/allangrds/tudo-que-voce-queria-saber-sobre-o-package-lock-json-mas-estava-com-vergonha-de-perguntar-4689
- https://gabrieluizramos.com.br/entendendo-o-package-json
- https://moisesbm.wordpress.com/2018/09/28/how-to-create-publish-and-use-private-npm-packages/
- https://www.treinaweb.com.br/blog/o-que-e-npm-e-como-usar-uma-biblioteca-instalada-por-ele
- https://www.treinaweb.com.br/blog/criando-modulos-globais-do-npm
- https://www.treinaweb.com.br/blog/o-que-e-gerenciador-de-dependencias
---

## 7. Conclusão
Realmente NPM é uma ferramenta incrível que nos auxilia muito a gerenciar e escalar nossos projetos de maneira organizada, com isso ficamos mais capacitados a manter o projeto atualizado com mudanças sejam elas correções ou melhorias.  

E aí, o que achou desse post? Tem alguma sugestão ou crítica? Deixa uma reação ou um comentário aqui embaixo.  
E obrigado pela visita! 😉