---
title: Minha "Cheat Sheet" de VueJS2
description: Este post resume um pouco dos meus estudos sobre o framework VueJS
  2, onde tive ideia de criar essa "Cheat Sheet" para me auxiliar futuras
  dúvidas. Acredito que auxilie também aos iniciantes nesse framework a acelerar
  sua curva de aprendizado e aos mais experientes a relembrarem alguns
  conceitos.
date: 2021-08-30 08:35:05
thumbnailImage: ../../static/assets/img/vue-js-programming-1589827.jpg
category: blog
tags: ['#vue', '#vue-router', '#vuex', '#cheat-sheet']
---
___
## Índice

```toc
exclude: Índice
```
---

## 1. Diretivas
São propriedades passadas dentro das tags **html**, funcionam da seguinte forma:
```html
<tag v-diretiva:argumento.modificador="'valor'" />
```

**v-bind**  
Usado antes de propriedades para acessar valores dentro da instancia do vue e fazer ligação para atributo da tag.
```html
<a v-bind:href="link">Google</a>
```
**v-once**  
Usado para acessar valores dentro da instancia do vue uma **única vez**, se o valor for atualizado ele não será alterado.
```html
<p v-once>{{ titulo }}</p>
```

**v-text**  
Usado para inserir text em uma tag.
```html
<p v-text="'Usando diretiva v-text'"></p>
```

**v-html**  
Usado para exibir código Html, caso passado nas chaves duplas interpretam os dados como **texto simples**.
```html
linkHtml = '<a href="http://google.com">Google</a>'
<p v-html="linkHtml"></p>
```

**ref**  
Cria uma referência para elemento da DOM.
```html
<h1 ref="aulaRef">{{ aula }}</h1>
<script>
this.$refs.aulaRef.style.color = "red"
</script>
```

**v-model**  
Faz a ligação entre view e o template sincronizados, **two-way data binding**.
```html
<input type="text" v-model="titulo">
```

**v-on**  
Usado para ficar escutando evento.
```html
<button v-on:click="somar">+1</button>
```

### 1.1. Modificadores  

#### 1.1.1. Modificadores de input (v-model)
Modificadores que devem ser passados junto a diretiva `v-model` para tratar os dados de entrada do campo input.

**lazy**  
Aplica valor digitado apenas depois que o foco sair do campo de entrada.
```html
<input type="text" v-model.lazy="usuario.email">
```
**trim**  
Remove espaço no inicio e no final do valor digitado no campo de entrada.
```html
<input type="text" v-model.trim="usuario.email">
```
**number**  
Retorna valor digitado no campo de entrada como valor numérico e não mais string como é por padrão.
```html
<input type="number" v-model.number="usuario.idade">
```

#### 1.1.2. Modificadores de Eventos  
Modificadores que devem ser passados junto a diretiva `v-on` para controlar os comportamentos dos eventos.  

**stop (StopPropagation)**  
Usado diretamente na diretiva, para parar propagação do evento.  

```html
<p v-on:mousemove="mostraCoordenadas">
    Mouse: {{ x }} e {{ y }}.
    <span v-on:mousemove.stop>Parar aqui</span>
</p>
```

**prevent (PreventDefault)**  
Usado diretamente na diretiva, para prevenir comportamento padrão do browser.
```html
<a v-on:click.prevent href="http://guisalmeida.com">Acesse o site</a>
```
**key (teclas)**  
Usadas para emitir um evento especifico.
```html
<input v-on:keyup="exibirAlerta" type="text">
<!-- Chama função todas vez que uma tecla for pressionada -->
<input v-on:keyup.enter="exibirAlerta" type="text">
<!-- Chama função apenas quando enter for pressionada -->
<input v-on:keyup.enter.alt="exibirAlerta" type="text">
<!-- Chama função apenas quando enter+alt forem pressionadas -->
```

### 1.2. Condicionais  
**v-if**  
Usado para criar uma lógica condicional no template html.  

> Exclui elemento da DOM.
```html
<p v-if="logado">Usuário Logado: {{ nome }}</p>
<p v-else-if="anonimo">Usuário Anônimo</p>
<p v-else>Nenhum Usuário Logado</p>
```
**v-show**  
Usado para mostrar ou ocultar elemento no template html.  

> Não exclui elemento da DOM, aplica display: none.
```html
<footer v-show="logado">Desenvolvido para vocẽ</footer>
```

### 1.3. Listas  
**v-for**  
Cria um laço de repetição for no elemento.  

> Exclui elemento da DOM.
```html
<!-- Laço com array -->
<ul>
    <li v-for="(cor, index) in cores">
        {{ cor }} está no índice {{ index }}
    </li>
</ul>
<!-- Laço com objetos -->
<ul>
    <li v-for="pessoa in pessoas">
        <div v-for="(valor, chave, index) in pessoa">{{index}}) {{ chave }} = {{ valor }}</div>
    </li>
</ul>
```

### 1.4. Diretivas personalizadas
Vue permite registrar suas próprias diretivas personalizadas. Note que no Vue 2.0, a forma primária de abstração e reuso de código são componentes - no entanto, pode haver casos em que você só precisa de um acesso de baixo nível ao DOM em elementos simples, e aí diretivas personalizadas seriam úteis.
Para isso podem ser usados alguns hooks com argumentos:  

![hooks](https://raw.githubusercontent.com/GuiSAlmeida/curso_vuejs2/master/modulo12_diretivas/diretivas-exercicios/src/assets/images/hooks-diretivas.png)

#### 1.4.1. Diretiva global
**Exemplo**  

No arquivo `main.js`:
```js
Vue.directive('destaque', {
	bind(el, binding) {
		let delay = 0
		if(binding.modifiers['delay']) delay = 2000

		setTimeout(() => {
			if(!binding.arg) {
				el.style.color = binding.value
				return
			}
			el.style.backgroundColor = binding.value
		}, delay);
	}
})
```
No componente:
```html
<template>
    <p v-destaque:background.delay="'lightgreen'">Usando diretiva personalizada</p>
    <p v-destaque.delay="'yellow'">Usando diretiva personalizada</p>
</template>
```

#### 1.4.2. Diretiva local
**Exemplo**  
No componente:
```html
<template>
    <p v-destaque="valor">Usando diretiva local personalizada</p>
</template>

<script>
    export default {
        directives: {
            "diretiva-local": {
                bind(el, binding) {
                    // faça algo
                }
            }
        },
    }
<script/>
```

---
## 2. Methods (métodos)
Funções de cada componente.

**$event**  
> Por padrão ao chamarmos uma função sem passar nenhum paramêtro,
> o evento é passado automaticamente. Caso necessitamos passar um parâmetro
> e o evento, devemos usar a palavra reservada `$event`.
```html
<button v-on:click="somar(5, $event)">+1</button>
```
---
## 3. Computed (computados)
Expressões dentro de templates são muito convenientes, mas são destinadas a operações simples. Colocar muita lógica neles pode fazer com que o seu código fique verboso e que a sua manutenção fique mais complicada. Por isso que, para qualquer lógica mais complexa, usamos **dados computados**.

```html
<template>
    <div id="example">
        <p>Mensagem original: "{{ message }}"</p>
        <p>Mensagem ao contrário: "{{ reversedMessage }}"</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: 'Olá Vue'
            }
        },
        computed: {
            reversedMessage: function () {
                return this.message.split('').reverse().join('')
            }
        }
    }
</script>
```

---
## 4. Watch
Funções assincronas que ficam monitorando alterações na propriedade.

> Precisam ter o mesmo nome que a propriedade que vai ser alterada.

```js
watch: {
    propriedade(<valornovo>, <valorantigo>) {
        // faça algo
    }
},
```

Para monitorar o **estado interno** de cada um dos elementos da propriedade que está sendo monitorada, deve-se alterar o método com nome da propriedade para um objeto com um atributo chamado `deep: true` e o método que deve ser executado é passado no atributo `handler`.

```js
watch: {
    propriedade: {
      deep: true,
      handler() {
        // faça algo
      }
    }
  },
```

---

## 5. Ciclo de Vida  
![image](https://br.vuejs.org/images/lifecycle.png)  

### 5.1. Métodos do Ciclo de Vida

**beforeCreate**  
Chamado uma unica vez na criação da instância, antes de criar instância.  
**created**  
Chamado uma unica vez na criação da instância, depois de criar instância. 

**beforeMount**  
Chamado uma unica vez na criação da instância, antes de criar template e jogar na DOM. 

**mounted**  
Chamado uma unica vez na criação da instância, quando a DOM está montada. 

**beforeUpdate**  
Chamado sempre que houver uma mudança para ser aplicada na DOM, antes de criar template e jogar na DOM. 

**updated**  
Chamado sempre que houver uma mudança para ser aplicada na DOM, depois de criar template e atualizar na DOM. 

**beforeDestroy**  
Chamado uma única vez antes da instância ser destruida. 

**destroyed**  
Chamado uma única vez depois da instância ser destruida. 


```js
new Vue({
    el: '#app',
    data: {
        titulo: 'Ciclo de vida'
    },
    beforeCreate() {
        console.log('antes de criar instância')
    },
    created() {
        console.log('depois de criar instância')
    },
    beforeMount() {
        console.log('antes de criar template e jogar na DOM')
    },
    mounted() {
        console.log('quando a DOM está montada')
    },
    beforeUpdate() {
        console.log('antes de criar template e jogar na DOM')
    },
    updated() {
        console.log('depois de criar template e atualizar na DOM')
    },
    beforeDestroy() {
        console.log('Chamado uma única vez antes da instância ser destruida');
    },
    destroyed() {
        console.log('Chamado uma única vez depois da instância ser destruida')
    }
})
```


### 5.2. Métodos do Ciclo de Vida Adicionais para Componente Vivo
**activated**  
Chamado quando o componente é criado pela primeira vez, ou reativado apos ter sido desativado. 

**deactivated**  
Chamado quando o componente é removido do contexto porém não é destruido(keep-alive) mantendo seu estado como se estivesse oculto e esperando para ser reativado. 

---
## 6. Components
**slot**  
Recebe tudo que foi passado dentro da tag do compenente para seu escopo sem ser necessário uso de props por exemplo.
Podem ser nomeados diversos elemento para serem identificados no componente.  

```html
<!-- Passando dados dentro do componente -->
<Component>
    <h1 slot="autor">{{ citacoes[indice].autor }}</h1>
    <p slot="texto">{{ citacoes[indice].texto }}</p>
    <h6 slot="fonte">{{ citacoes[indice].fonte }}</h6>
</Component>

<!-- Recebendo dados no componente -->
<div class="citacao">
    <slot name="autor"/>
    <slot name="texto"/>
    <slot name="fonte"/>
</div>
```

**keep-alive**  
Evita que no recarregamento de página ou na troca do componente, ele não seja destroido e criado novamente mantendo estado atual quando componente for acessado novamente.
> Podem ser escutados nos métodos do ciclo de vida:
> `activated(), deactivated()`

```html
<keep-alive>
    <component :is="componente"/>
</keep-alive>

```
---
## 7. Filters (Filtros)
Métodos que podem ser criados dentro do atributo `filters` onde fazem um tratativa em um determinado dado. A **sintaxe** funciona com um **pipe (|)** antes e depois o filtro. São suportados dentro de **interpolações** e no contexto de valores do **v-bind**.

**Exemplo filtro local:**
```html
<template>
	<div id="app">
		<p>{{ cpf | cpfFormat }}</p>
        <input type="text" :value="cpf | cpfFormat">
	</div>
</template>

<script>
export default {
	filters: {
		cpfFormat(valor){
			const arr = valor.split('')
			arr.splice(3, 0, '.')
			arr.splice(7, 0, '.')
			arr.splice(11, 0, '-')
			return arr.join('')
		}
	},
	data() {
		return {
			cpf: '01234567891'
		}
	}
}
</script>
```

**Exemplo filtro global:**
No arquivo `main.js`:  
```js
Vue.filter('inverter', (valor) => {
	return valor.split('').reverse().join('')
})
```
No componente:  

```html
<template>
	<div id="app">
		<p>{{ cpf | inverter }}</p>
        <input type="text" :value="cpf | inverter">
	</div>
</template>

<script>
export default {
	data() {
		return {
			cpf: '01234567891'
		}
	}
}
</script>
```

> Filtros podem ser encadeados recebendo o valor retornado do filtro anterior:
> ```html
> <template>
> 	<div id="app">
> 		<p>{{ cpf | inverter | cpfFormat }}</p>
>       <input type="text" :value="cpf | inverter | cpfFormat">
> 	</div>
> </template>
> ```

---
## 8. Mixins
Mixins são uma forma flexível de distribuir funcionalidade reutilizável em diversos componentes Vue. Um objeto mixin pode conter quaisquer opções de componente. Quando um componente utiliza um mixin, todas as opções deste serão misturadas (em inglês, mixed in) com as opções do próprio componente.  
`frutasMixin.js`
```js
export default {
    data() {
        return {
            fruta: '',
            frutas: ['banana', 'maçã', 'laranja']
        }
    },
    methods: {
        add() {
            this.frutas.push(this.fruta)
            this.fruta = ''
        }
    },
}
```
O componente vai receber tudo que foi declarado no mixin e mesclar com seus próprios parâmetros quando for criado sua instância.  

`component.vue`
```html
<script>
import frutasMixin from '@/frutasMixin'

export default {
    mixins: [
        frutasMixin
    ]
}
<script/>
```

**Mixin global**
```js
Vue.mixin({
    created() {
        console.log('Created GLOBAL mixin')
    }
})
```

---
## 9. Animações
Vue disponibiliza um componente encapsulador (wrapper) chamado `transition`, permitindo que você adicione transição de entrada/saída para qualquer elemento ou componente dentro do seguinte contexto:

- Renderização condicional (usando `v-if`)
- Exibição condicional (usando `v-show`)
- Componentes dinâmicos
- Componentes de nós de raiz

**Appear** - atributo usado no componente `transition` para o efeito aplicado também funcionar quando o componente é criado na dom.

### 9.1. Transições classes
A partir do atributo `name` passado no componente são criados estilos de acordo com estado.  

![transition](https://user-images.githubusercontent.com/45276342/124758002-8938db00-df04-11eb-991b-b8dc74d2c73e.png)

```js
<template>
    <transition name="fade" appear>
        <elemento/>
    </transition>
</template>

<style>
.fade-enter {}

.fade-enter-active {}

.fade-enter-to {}

.fade-leave {}

.fade-leave-active {}

.fade-leave-to {}
</style>
```
#### 9.1.1. Personalizando Classes
Também é possível especificar uma classe de transição personalizada fornecendo os seguintes atributos:
- enter-class
- enter-active-class
- enter-to-class (2.1.8+)
- leave-class
- leave-active-class
- leave-to-class (2.1.8+)

```html
<transition
    enter-active-class="animated bounce"
    leave-active-class="animated shake"
>
      <elemento/>
</transition>
```

#### 9.1.2. Transições Dinâmicas
É popssivel passar nome para o elemento `transition` via binding e também ter trocas de elementos dentro da transição atráves do `v-if`. Para isso é necessário que cada elemento possua uma chave única (key) e também deve ser passado a diretiva `mode` na transition para um elemento não sobrepor o outro.

```html
<transition :name="animacao" mode="out-in">
    <b-alert variant="info" show v-if="exibir" key="info">{{ msg }}</b-alert>
    <b-alert variant="warning" show v-else key="warning">{{ msg }}</b-alert>
</transition>

<!-- Também pode ser usado com componentes dinâmicos -->
<transition name="animacao" mode="out-in">
    <component :is="componenteSelecionado"></component>
</transition>
```

### 9.2. Transition com Hooks JS
![hooks](https://user-images.githubusercontent.com/45276342/125286025-af3df100-e2f1-11eb-9e66-59ff7d4c438f.png)

```html
<template>
    <button @click="exibir2 = !exibir2">Mostrar</button>
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"

      @before-leave="beforeLeave"
      @leave="Leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
    >
      <div v-if="exibir2" class="caixa"></div>
    </transition>
</template>

<script>
    export default {
    data() {
        return {
            exibir2: true,
        };
    },
    methods: {
        beforeEnter(el) {
            console.log('beforeEnter');
        },
        enter(el, done) {
            console.log('enter');
            done()
        },
        afterEnter(el) {
            console.log('afterEnter');
        },
        enterCancelled() {
            console.log('enterCancelled');
        },
        beforeLeave(el) {
            console.log('beforeLeave');
        },
        leave(el, done) {
            console.log('leave');
            done()
        },
        afterLeave(el) {
            console.log('afterLeave');
        },
        leaveCancelled() {
            console.log('leaveCancelled');
        }
    }
};
</script>
```
---
## 10 Vue-Router
```sh
npm install vue-router
```

### 10.1. Configuração

`/src/router.js`  
Cria-se um objeto Router com as configurações das rotas. 
```js
import Vue from 'vue'
import Router from 'vue-router'
import Component from './components/component'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Component
        }
    ]
})
```

`/src/main.js`  
No arquivo principal onde o webpack gera o bundle da aplicação é passado o router no objeto criado por meio da função construtora do 
vue.
```js
import Vue from 'vue'
import App from './App.vue'
import router from './router'

new Vue({
  router, // router: router,
  render: h => h(App),
}).$mount('#app')
```

### 10.2. Modos navegação
**Modo Hash**  
Modo default da aplicação.  
Na url: `localhost:8080/#/pagina`  
Na request: `localhost:8080/`

**Modo History**  
Na url: `localhost:8080/pagina`  
Na request: `localhost:8080/pagina`  

```js
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Component
        }
    ]
})
```

### 10.3. Componentes globais
**Router-Link**  
Usado para navegação, a rota é especificada na prop `to`.  
Será renderizado uma tag `<a>` por default.  
Para alterar a tag renderizada passa a prop `tag`.
Também é possivel passar prop para quando rota estiver ativa e aplicar uma classe, 
e também usar o `exact` para dar match exato com path passado.
```html
<template>
    <router-link 
        to="/"
        tag="div"
        active-class="active"
        exact
    >Link</router-link>
</template>
```

**Router-View**  
Resultado da rota atual, irá renderizar o **componente** correspondente a **rota**.
```html
<template>
    <router-view />
</template>
```

### 10.4. Rotas Dinâmicas
Passando `props` na rota, o componente referenciado receberá esses dados passados no path como props. Sendo necessário sua declaração dentro do componente também.

```js
// no router
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Init
        },
        {
            path: '/user/:id',
            component: User,
            props: true
        }
    ]
})

// no componente
export default {
    props: ['id'],
}
```

Além de `props` também é possivel aceesar dados da rota pelo **componente** por meio de `this.$route.params`.
```js
export default {
    data() {
        return {
            id: this.$route.params.id
        }
    }
}
```

### 10.5. Rotas Aninhadas
Para renderizar componentes aninhados, precisamos usar a opção `children` na configuração do **construtor** `VueRouter`.  

> Os `paths` das rotas aninhadas seguirão a partir do `path` da rota principal.

```js
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/users',
            component: Users,
            children: [
                { path: '', component: UserList }, // path = '/users'
                { path: ':id', component: UserDetail, props: true }, // path = '/users/:id'
                { path: ':id/edit', component: UserEdit, props: true }, // path = '/users/:id/edit'
            ]
        }
    ]
})
```

### 10.6. Nomeando Rotas
As rotas podem ser nomeadas facilitando sua identificação e a compreensão do código.  

```js
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        }
    ]
})
```
No componente temos mais de uma maneira de chamar a rota.  
> A instância do router pode ser acessada globalmente por meio de `this.$router`.
```html
<template>
    <div class="App">
        <!-- Para chamar a rota por nome é passado dentro de um objeto -->
        <router-link to="{ name: 'home' }">Voltar</router-link>

        <!-- A rota também pode ser carregada por um método -->
        <button v-on:click="toHome">Voltar</button>
    </div>
</template>

<script>
export default {
    methods: {
        toHome() {
            // this.$router.push('/')
            // this.$router.push({ path: '/' })
            this.$router.push({ name: 'home' })
        }
    }
}
</script>
```

### 10.7. Rotas com múltiplos componentes
Na configuração do **construtor** `VueRouter` passamos os componentes que devem ser renderizados ao carregar a rota.
```js
export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'home',
        components: {
            default: Home,
            menu: Menu
        }
    }
}
```
No template que vai usar o componente da rota pode ser passado mais de um `router-view` para renderizar mais de um componente de acordo com a rota. São diferenciados de acordo com nome passado no **Router**.
```html
<template>
	<div id="app">
        <!-- O router-view que não é passado o atributo "name" 
        renderiza o componente passado no default no Router. -->
		<router-view /> 
		<router-view name="menu"/>
	</div>
</template>
```

### 10.8. Redirecionando rotas
Para redirecionar uma rota passamos a opção `redirect` e no seu valor o caminho que deve ser redirecionado.  
> Para pegar qualquer coisa que seja digitada e não seja igual nossas rotas passamos um `*` (asterisco).
```js
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '*',
            redirect: '/notfound'
        }
    ]
}
```

### 10.9. ScroolBehavior
Ao usar o roteamento do lado do cliente, podemos querer rolar para cima ao navegar para uma nova rota ou preservar a posição de rolagem das entradas do histórico da mesma forma que o recarregamento de página real faz. O `vue-router` permite que você consiga isso e, melhor ainda, permite que você personalize completamente o comportamento de rolagem na navegação da rota. Na configuração do **construtor** `VueRouter` podemos passar.  

```js
export default new Router({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if(savedPosition) {
            return savedPosition
        } else if (to.hash) {
            return { selector: to.hash, behavior: 'smooth' }
        } else {
            return { x: 0, y: 0, behavior: 'smooth' }
        }
    },
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    }]
}
```

### 10.10. Interceptando Rotas
Interceptando rotas globalmente, antes de cada rota vai ser rodado o callback passado no `beforeEach`.  Nesse passo não temos acesso ao `this` porque o componente ainda não foi montado.

```js
/**
 * to   = rota de origem
 * from = rota de destino
 * next = comando que encaminha para rota, 
 *        sem passar ele não é finalizada a rota.
 *        Pode ser passado uma rota especifica no next,
 *        ou passar um false para ele não seguir.
 * 
 * 
 */
router.beforeEach((to, from, next) => {
    console.log('Roda antes de todas rotas serem chamadas');
    next();
})
```
Interceptando diretamente em uma rota.

```js
const router = new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'home',
        component: Home,
        beforeEnter: (to, from, next) => {
            console.log('antes da rota local');
            next();
        }
    }
}
```
Interceptando no componente que vai ser chamado pela rota.

```js
export default {
    beforeRouteEnter(to, from, next) {
        console.log('Chamado antes rota do componente');
        next();
    }
  }
}
```

Também é possivel interceptar antes de sair da rota.
```js
export default {
    beforeRouteLeave(to, from, next) {
        if (this.confirm) {
            next()
        } else {
            if(confirm('Sair da rota?')) {
                next()
            } else {
                next(false)
            }
        }
  }
}
```

### 10.11. Rotas Tardias
Podemos configurar componentes que serão chamados nas rotas, 
para serem carregados apenas quando forem chamados, 
optimizando carregamento da página.  

```js
const Users = () => import('./components/user/Users')
const UserList = () => import('./components/user/UserList')
const UserDetail = () => import('./components/user/UserDetail')
const UserEdit = () => import('./components/user/UserEdit')
```

Agrupando arquivos `JS` no mesmo bundle para serem carregados.
```js
const Users = () => import(/* webpackChunkName: 'user' */'./components/user/Users')
const UserList = () => import(/* webpackChunkName: 'user' */'./components/user/UserList')
const UserDetail = () => import(/* webpackChunkName: 'user' */'./components/user/UserDetail')
const UserEdit = () => import(/* webpackChunkName: 'user' */'./components/user/UserEdit')
```
---
## 11. Vuex
O Vuex é um **padrão de gerenciamento de estado + biblioteca** para aplicações Vue.js. Ele serve como um **store** centralizado para todos os componentes em uma aplicação, com regras garantindo que o estado só possa ser mutado de forma previsível.  

![image](https://user-images.githubusercontent.com/45276342/127239471-332e6dcb-4b1b-4fc0-a86e-19ee927214be.png)

### 11.1. State
Estado central da aplicação.  
Cria-se arquivo `/src/store/store.js`
```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        nome: 'Gui',
        sobrenome: 'Almeida'
    }
})
```

Declara store no `main.js`
```js
import Vue from 'vue'
import App from './App.vue'
import store from './store/store'

new Vue({
    store, // store: store
    render: h => h(App),
}).$mount('#app')
```

Acessando `state` nos componentes
```html
<template>
    <p>{{ nome }}</p>
</template>

<script>
export default {
    computed: {
        nome() {
            return this.$store.state.nome
        }
    }
}
</script>
```

### 11.2. Getters
Funções que retornam informação (dados) do state.  

![getter](https://user-images.githubusercontent.com/45276342/127073358-b6c7029b-8589-475b-977b-af3cb2a7bce9.png)

Criando getter:
```js
export default new Vuex.Store({
    state: {
        nome: 'Gui',
        sobrenome: 'Almeida'
    }
    getters: {
        nomeCompleto(state){
            `${state.nome} ${state.sobrenome}`
        }
    }
})
```

Um método getter pode receber como segundo parâmetro os `getters` de toda aplicação mesmo sendo criados a partir de outros módulos:  

```js
export default new Vuex.Store({
    getters: {
        getAnotherModuleData(state, getters){
            return getters.anotherModuleGetter
        }
    }
})
```

Acessando getters no componente por meio do `this.$store.getters` ou pelo método `mapGetters`:
```html
<template>
    <p>{{ nomeCompleto }}</p>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        nomeCompleto() {
            return this.$store.getters.nomeCompleto
        },
        ...mapGetters({
            'nomeCompleto'
        })
    }
}
</script>
```

### 11.3. Setters (Mutations)
Alteram o estado global da aplicação, 
por meio das `mutations` que possuem a finalidade de alterar a store diretamente e por isso devem ser sempre **sincronas**.

![setter](https://user-images.githubusercontent.com/45276342/127151855-d9b7e2af-dbb1-45c2-96cd-fb7345756459.png)

Criando mutations:
```js
export default new Vuex.Store({
    state: {
        nome: 'Gui',
        sobrenome: 'Almeida',
        hobbys: []
    }
    getters: {
        nomeCompleto(state){
            `${state.nome} ${state.sobrenome}`
        }
    },
    mutations: {
        addHobby(state, payload) {
            state.hobbys.push(payload)
        }
    }
})
```

**commit**  
Você não pode chamar diretamente uma mutation pelo componente. Pense nisso mais como registro de evento: "Quando uma mutação com o tipo `addHobby` é acionada, chame este manipulador." Para invocar uma mutation, você precisa chamar `store.commit` com seu tipo.
Disparando **mutations** no componente pelo `this.$store.commit`:
```html
<template>
    <p>{{ nomeCompleto }}</p>
    <p>Gosta de:</p>
    <input type="number" v-model="hobby">
    <button @click="addHobby">Adicionar!</button>

    <ul>
        <li v-for="hobby in hobbys">{{hobby}}</li>
    </ul>
</template>

<script>
export default {
    methods: {
        addHobby() {
            this.$store.commit('addHobby', hobby)
        }
    },
    computed: {
        hobbys() {
            return this.$store.state.hobbys
        }
    }
}
</script>
```

**mapMutations**  
Cria um função nos `methods` com mesmo nome da mutation criada no store.  
Acessando mutations no componente pelo método `mapMutations`:
```html
<template>
    <p>{{ nomeCompleto }}</p>
    <p>Gosta de:</p>
    <input type="number" v-model="hobby">
    <button @click="addHobby">Adicionar!</button>

    <ul>
        <li v-for="hobby in hobbys">{{hobby}}</li>
    </ul>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
    methods: {
        ...mapMutations(['addHobby'])
    },
    computed: {
        hobbys() {
            return this.$store.state.hobbys
        }
    }
}
</script>
```

### 11.4. Actions
Chamam mutations por meio de `commits`, podemos realizar operações **assíncronas** dentro de uma action.  

![image](https://user-images.githubusercontent.com/45276342/127229758-71667b5d-06d3-4434-85d0-6bfd307a9332.png)

**dispatch**  
Método para disparar as actions.

```js
// no store
export default new Vuex.Store({
    state: {
        produtos: []
    },
    mutations: {
        addProduto(state, payload) {
            state.produtos.push(payload)
        }
    },
    actions: {
        addProdutoAction(context, payload) {
            context.commit('addProduto', payload)
        }
    }
})

// no componente
export default {
    methods: {
        adicionar() {
            this.$store.dispatch('addProdutoAction', produto)
        }
    }
}
```

**mapActions**  
Cria um função nos `methods` com mesmo nome da action criada no store.

```js
// no store
export default new Vuex.Store({
    state: {
        produtos: []
    },
    mutations: {
        addProduto(state, payload) {
            state.produtos.push(payload)
        }
    },
    actions: {
        addProdutoAction(context, payload) {
            context.commit('addProduto', payload)
        }
    }
})

// no componente
import { mapActions } from 'vuex'

export default {
    methods: {
        ...mapActions(['addProdutoAction']),
        adicionar() {
            this.addProdutoAction(produto)
        }
    }
}
```

### 11.5 Modules
O Vuex nos permite dividir nosso store em módulos. 
Cada módulo pode conter seu próprio estado, mutações, ações, getters e até módulos aninhados.  

```js
const moduloA = {
  state: { ... },
  getters: { ... },
  mutations: { ... },
  actions: { ... },
}

const moduloB = {
  state: { ... },
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    a: moduloA,
    b: moduloB
  }
})

this.$store.state.a // -> `moduloA`'s state
this.$store.state.b // -> `moduloB`'s state
```

### 11.6 Namespacing
Por padrão, ações, mutações e getters dentro dos **módulos** ainda são registrados sob o **namespace global** - isso permite que vários módulos reajam ao mesmo tipo de ação/mutação.  
Se você quer que seus módulos sejam mais independentes ou reutilizáveis, você pode marcá-los como **namespaced** com `namespaced: true`. 
Quando o módulo é registrado, todos os getters, ações e mutações serão automaticamente nomeados com base no caminho no qual o módulo está registrado.  
```js
const store = new Vuex.Store({
  modules: {
    account: {
      namespaced: true,

      // module assets
      state: { ... }, // o estado do módulo já está aninhado e não é afetado pela opção de namespace
      getters: {
        isAdmin () { ... } // -> getters['account/isAdmin']
      },
      actions: {
        login () { ... } // -> dispatch('account/login')
      },
      mutations: {
        login () { ... } // -> commit('account/login')
      },

      // módulos aninhados
      modules: {
        // herda o namespace do modulo pai
        myPage: {
          state: { ... },
          getters: {
            profile () { ... } // -> getters['account/profile']
          }
        },

        // aninhar ainda mais o namespace
        posts: {
          namespaced: true,
          state: { ... },
          getters: {
            popular () { ... } // -> getters['account/posts/popular']
          }
        }
      }
    }
  }
})
```

---
## 12. Plugins
Plugins oficiais do vue: @vue/cli-plugin-nomedoplugin  
**Ex.:** @vue/cli-plugin-babel

Plugins de terceiros: vue-cli-plugin-nomedoplugin  
**Ex.:** vue-cli-plugin-electron-builder

---
## 13. Referências

[Documentação Oficial - Introdução](https://br.vuejs.org/v2/guide/)

[Documentação Oficial - Sintaxe de Template](https://br.vuejs.org/v2/guide/syntax.html)

[Documentação Oficial - Manipulação de Eventos](https://br.vuejs.org/v2/guide/events.html)

[Documentação Oficial - Dados Computados & Observadores](https://br.vuejs.org/v2/guide/computed.html)

[Documentação Oficial - Interligações de Classe e Estilo](https://br.vuejs.org/v2/guide/class-and-style.html)

[Documentação Oficial - Renderização Condicional](https://br.vuejs.org/v2/guide/conditional.html)

[Documentação Oficial - Renderização de Listas](https://br.vuejs.org/v2/guide/list.html)

[Documentação Oficial - Instância Vue](https://br.vuejs.org/v2/guide/instance.html)

[Documentação oficial - Arquivo `.vue`](https://br.vuejs.org/v2/guide/single-file-components.html)

[Documentação oficial - Método `render()`](https://br.vuejs.org/v2/guide/render-function.html)

[Documentação oficial - Componentes](https://br.vuejs.org/v2/guide/components.html)

[Documentação oficial - Registro de componentes](https://br.vuejs.org/v2/guide/components-registration.html)

[Documentação Oficial - Props](https://br.vuejs.org/v2/guide/components.html#Passando-Dados-aos-Filhos-com-Props)

[Documentação Oficial - Eventos Personalizados](https://br.vuejs.org/v2/guide/components.html#Enviando-Mensagens-ao-Pai-com-Eventos)

[Documentação Oficial - Slots](https://br.vuejs.org/v2/guide/components.html#Distribuicao-de-Conteudo-com-Slots)

[Documentação Oficial - Componentes Dinâmicos](https://br.vuejs.org/v2/guide/components.html#Componentes-Dinamicos)

[Documentação Oficial - Formulários](https://br.vuejs.org/v2/guide/forms.html)

[Documentação Oficial - Diretivas Personalizadas](https://br.vuejs.org/v2/guide/custom-directive.html)

[Documentação Oficial - Filtros](https://br.vuejs.org/v2/guide/filters.html)

[Documentação Oficial - Mixins](https://br.vuejs.org/v2/guide/mixins.html)

[Vue Developer Tools](https://github.com/vuejs/vue-devtools)

[Documentação do Vuex](https://vuex.vuejs.org/guide/)

[Vue CLI](https://cli.vuejs.org/)
