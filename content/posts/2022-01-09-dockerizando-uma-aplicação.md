---
title: Dockerizando uma Aplicação
description: Nesse post passo uma breve introdução ao Docker, alguns conceitos
  como imagens, containers e volumes. E por fim alguns passos principais para
  subir uma aplicação em um container.
date: 2022-01-08 10:04:43
thumbnailImage: ../../static/assets/img/docker.png
category: blog
tags:
  - ""
---
___

## Índice

```toc
exclude: Índice
```
---

## 1. Introdução
**Docker** é uma ferramenta que nos possibilita criar pacotes de software em unidades padronizadas chamadas de **containers**, neles estão tudo o que a aplicação precisa para ser executada, inclusive bibliotecas, ferramentas de sistema, código e etc.  
Foi desenvolvida na linguagem de programação **Go** e seu funcionamento é possibilitado pelos [Container Linux](https://www.redhat.com/pt-br/topics/containers/whats-a-linux-container), que são um sistema do kernel do Linux.

### 1.1. Ecossistema
O Docker possui um ecossistema formado basicamente pela **linha de comando (cli)** onde são passados os comandos. **Docker host**, software instalado no SO que possui um processo chamado **Docker daemon** que fica processando todos comandos passados. E o **Registry** ([Docker Hub](hub.docker.com)), que é o registro remoto onde ficam salvas imagens de aplicações para serem usadas posteriormente.

![Docker Hub](../../static/assets/img/architecture.png)

### 1.2. Container não é uma VM
Os containers possibilitam a utilização de recursos isolados, diferentemente do que seria em uma máquina virtual, que depende da criação de um sistema operacional completo para cada módulo.

![Docker Hub](../../static/assets/img/containerxvm.jpeg)

### 1.3. Vantagens de se usar Docker  
A primeira vantagem é que você não vai precisar instalar nada em sua máquina, apenas o Docker (veja como instalar em seu SO [aqui](https://docs.docker.com/get-docker/)), isso evita poluir o seu ambiente com as instalações de diversas aplicações. Algumas outras vantagens também podem ser citadas como:
- Otimização de recursos;
- Empacotamento da aplicação;
- Imutabilidade;
- Facilidade no deploy.

---

## 2. Conceitos
No Docker podemos encontrar alguns conceitos como: imagens, containers e volumes.

### 2.1. Imagens
Imagem é a aplicação que queremos rodar. Elas são um sistema de arquivos read-only, que funciona com uma pilha de camadas. Essas camadas são criadas a cada comando dado ao se criar uma imagem.
Podemos criar uma imagem ou usar uma imagem já criada, que podem ser encontradas no registro do Docker o [Docker Hub](hub.docker.com).  

![Docker Hub](../../static/assets/img/dockerhub.png)

#### 2.1.1 Comandos úteis para imagens
```sh
# Criar imagem a partir do projeto local:
docker build -t <name>[:tag] . # O ponto seria o path para o projeto onde o build vai buscar o Dockerfile para buildar a imagem

# Baixar imagem (docker hub):
docker pull <image>[:image_tag]

# Listar imagens disponíveis localmente:
docker images

# Ver configurações da imagem:
docker image inspect <uuid | name>

# Ver camadas (alterações) de uma imagem:
docker image history <uuid | name>

# Nomear e dar tag para imagem:
docker image tag <image_id> <image_name>[:image_tag]

# Apagar imagem:
docker rmi <image>
```

### 2.2. Container
Instância da imagem rodando como um processo. Configurado de acordo com a necessidade e feito para ser destruído assim que for finalizado.

#### 2.2.1 Comandos úteis para containers
```sh
# Listar containers disponíveis localmente:
docker container ls -a

# Configurações do container:
docker container inspect <uuid | name>

# Criar instância(container) de uma imagem:
docker container run <uuid | name>

# Subir container já criado:
docker container start <uuid | name>

# Parar container:
docker container stop <uuid | name>

# Apagar container:
docker container rm <uuid | name>
```

### 2.3. Volumes  
Volumes são o mecanismo preferido para persistir dados gerados e usados por containers Docker. Além disso, são muitas vezes uma escolha melhor do que dados persistentes na camada gravável de um contêiner, porque um volume não aumenta o tamanho dos containers que o utilizam, e o conteúdo do volume existe fora do ciclo de vida de um determinado contêiner.  

![Volumes](../../static/assets/img/types-of-mounts-volume.png)

#### 2.3.1. Configurando volumes
Precisamos configurar os volumes para mapearmos dados para fora dos nossos containers.  
Podem ser configurados junto ao **comando de criar o container** passando a flag **-v** e os paths de origem e destino. Essa configuração ficará salva nesse container específico. 
> Pode ser criado outro container a partir da mesma imagem com uma configuração diferente de volume.
```sh
docker container run -v $(pwd):/workspace ...
```

---

## 3. Dockerizando uma Aplicação
Esse termo refere-se a convertermos uma aplicação com seu funcionamento normal, onde instalamos todas dependências e executamos alguns comandos para rodar local e etc. Para passarmos toda essa responsabilidade para o Docker. Assim, após configurarmos ele em nossa aplicação, vai ser gerado uma imagem que vai contar tudo que ela precisa e basta rodarmos um comando para ter tudo rodando.

### 3.1. Requisitos
Para dockerizarmos uma aplicação necessitamos apenas ter o Docker instalado e criar dentro do projeto um arquivo chamado `Dockerfile`, onde ficarão as configurações que farão nossa aplicação rodar dentro do container.

### 3.2. Dockerfile
O Dockerfile é um documento de texto que contém todos os comandos que um usuário pode chamar na linha de comando para criar uma imagem. Usando o comando `docker build`, os usuários podem criar um build automatizado que executa várias instruções de linha de comando em sucessão.

Na pasta da aplicação criamos o `Dockerfile` com alguns detalhes descritos nos comentários:
```sh
# O comando FROM diz qual imagem servirá de referência para a sua aplicação.
# Vamos supor que nossa aplicação seja em python, 
# então o FROM ficaria dessa forma por exemplo:
FROM python:3

# O COPY vai copiar arquivos/diretórios da nossa aplicação local(.)
# para dentro do container criando uma pasta /app.
COPY . /app

# O comando WORKDIR diz qual será a pasta dentro do container,
# onde seu código vai ficar e os próximos comandos que serão rodados para criar o container.
WORKDIR /app

# O comando RUN roda comandos na criação da imagem e cada RUN gera uma layer na imagem.
# Como exemplo, estamos instalando as dependências que precisamos para o projeto em python
# dentro do nosso container, assim que ele está sendo criado.
RUN pip install -r requirements.txt

# O EXPOSE expõe uma porta para fora do container.
# No nosso caso estamos expondo a porta 5000. 
EXPOSE 5000

# O VOLUME mapeia um diretório dentro do container para ser persistido fora.
# Como exemplo, estamos persistindo a pasta de estáticos do projeto.
VOLUME /static

# O CMD diferente do RUN, roda um comando na instanciação da imagem ou seja quando subimos o container.
# Como exemplo, estamos rodando o comando principal com python para nosso aplicação rodar.
CMD python main.py
```

### 3.3. Fazendo o BUILD da imagem
Agora que temos o Dockerfile configurado basta criarmos a imagem que vai possuir os arquivos da nossa aplicação, como se fosse um arquivo compactado.
Dentro da pasta na qual você salvou o dockerfile, rode o comando:
```sh
docker build -t app-python:latest .
```
Depois disso, a imagem estará registrada na sua máquina.  
Isso pode ser consultado com:
```sh
docker images

# Os seguintes detalhes serão mostrados:
REPOSITORY                         TAG             IMAGE ID       CREATED         SIZE
app-python                        latest          e42a1a90b7fe  10 seconds ago   931MB
```

### 3.4. Subindo container (rodando sua aplicação)
Agora, precisamos criar a instância da imagem (container) passando algumas configurações importantes nessa primeira vez com o comando:

```sh
docker run -v $(pwd)/static:/static -p 5000:5000 -d app-python:latest

# Esse comando diz para o software rodar a imagem que você criou previamente, 
# mapeando volume com o atributo -v a pasta /static do container para a /static local.

# Mapea as portas do container para o PC local (5000:5000) com o atributo -p, 
# sendo o primeiro argumento a porta do pc local, 
# e o segundo, a porta dentro do container definida no dockerfile.

# O argumento -d diz para o software rodar seu container em background, 
# para que a janela do terminal não trave no processo.  

# E por fim passamos o nome da imagem que deve ser criado o container.
```


Pronto! Com tudo funcionando, já podemos testar nosso APP Python no http://localhost:5000 da mesma forma como faria se ele estivesse rodando local fora de um container. 

Após configurado container, para subir novamente outras vezes apenas rodamos o comando start.
```sh
docker container start app-python
```

## 4. Publicando a imagem da sua app no registro do docker
Para subir uma imagem precisamos ter cadastro no [Docker Hub](hub.docker.com).
Após ter feito cadastro podemos fazer login localmente pelo terminal com o comando:
```sh
docker login
```

Um passo importante que deve ser feito quando você vai salvar suas imagens no registro remoto do docker. É preciso criá-las com seu username na frente, pois se não o push para o seu repositório remoto não vai funcionar.  
Vamos repetir o comando que criamos a imagem de nossa app agora com nosso username criado no docker hub.  
Exemplo:
> ⚠️ O **username** deve ser o mesmo configurado lá no docker hub.
```sh
docker build -t <username>/app-python:latest .
```

Após logado é possível dar push da sua imagem local para sua conta no registro remoto.  
```sh
docker push <username>/app-python:latest
```

---

## 5. Referências
- https://docs.docker.com/get-docker/
- https://www.alura.com.br/artigos/desvendando-o-dockerfile
- https://www.redhat.com/pt-br/topics/containers/whats-a-linux-container
- https://dockerlabs.collabnix.com/beginners/docker/docker-vs-container.html
- https://docs.microsoft.com/pt-br/dotnet/architecture/microservices/container-docker-introduction/docker-terminology
- https://www.redhat.com/pt-br/topics/containers/what-is-docker#o-docker-utiliza-a-mesma-tecnologia-que-os-containers-linux-tradicionais


---
## 6. Conclusão
O Docker se tornou uma ferramenta poderosa para o desenvolvimento por trazer várias vantagens como podemos ver nesse post. A facilidade de poder ter sua aplicação rodando em diferentes sistemas pode lhe poupar algumas horas tentando instalar libs em sistemas diferentes. Sem dúvida um conhecimento que todo dev necessita ter em sua caixa de ferramentas.  

E aí, o que achou desse post? Tem alguma dúvida, sugestão ou crítica? Deixa uma reação ou um comentário aqui embaixo.  
E obrigado pela visita! 😉