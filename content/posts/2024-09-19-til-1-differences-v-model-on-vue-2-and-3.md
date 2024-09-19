---
title: "TIL #1 - Differences between using the V-Model on Vue 2 and 3"
description: Today I learned the differences between using the v-model on Vue 2 and 3.
date: 2024-09-19 19:01:12
thumbnailImage: ../../static/assets/img/vue-js-programming-1589827.jpg
category: blog
tags:
  - vue
  - 🎓 til
---
___

## Index

```toc
exclude: Index
```
---

## Intro  
This post is just meant to be an insight I had when migrating a piece of code to Vue's newest version and I ended up learning the difference existing when using the v-model.  
Vue 3 has been around for a few years now (it was released in 2020), but as a Vue developer who used to work on Vue 2, and I believe still keep working because many projects created at least 2 years ago or more are likely to be still using this version.

### Key points  
- In Vue 2, **only one `v-model`** was allowed per component, which was tightly bound to the `value` prop and `input` event.
- If you needed multiple model-like bindings, you had to create custom props and events manually for each one.
- In Vue 3, you can now have multiple `v-model` bindings easily by using the format `v-model:<propName>`. Each `v-model` uses the `update:<propName>` event convention, making it cleaner and more scalable than in Vue 2.

---
## How it was in Vue 2

In Vue 2, the `v-model` directive worked differently compared to Vue 3. There was only one `v-model` per component, and it used a fixed prop/event pair (`value` and `input` by default).

- **Prop**: The default prop for `v-model` was always `value`.
- **Event**: The corresponding event emitted from the child component was always `input`.

For a single `v-model`, this was straightforward:

```html
<template>
  <input :value="value" @input="$emit('input', $event.target.value)">
</template>

<script>
export default {
  props: ['value']
}
</script>
```

When using `v-model`, it would bind to the `value` prop and listen for the `input` event.

```html
<template>
  <MyInput v-model="inputValue" />
</template>

<script>
export default {
  data() {
    return {
      inputValue: ''
    }
  }
}
</script>
```

### Problem with multiple v-model in Vue 2
If you needed multiple `v-model` bindings for different values (e.g., `name` and `age`), Vue 2 did not support multiple `v-model` natively. You had to create custom prop names and custom events manually for each prop.

#### Example of multiple "v-model-like" bindings in Vue 2

```html
<template>
  <div>
    <input :value="name" @input="$emit('update:name', $event.target.value)">
    <input :value="age" @input="$emit('update:age', $event.target.value)">
  </div>
</template>

<script>
export default {
  props: ['name', 'age']
}
</script>
```

In the parent component:

```html
<template>
  <MyComponent 
    :name="userName" 
    :age="userAge" 
    @update:name="userName = $event" 
    @update:age="userAge = $event" 
  />
</template>

<script>
export default {
  data() {
    return {
      userName: '',
      userAge: ''
    }
  }
}
</script>
```

---
## How v-model works in Vue 3

- **Prop**: Vue 3 uses `modelValue` as the prop that stores the data when you use `v-model` in the parent component.
- **Event**: The corresponding event emitted from the child component should be named `update:modelValue`.

So, when you use `v-model="value"` (here "value" could be any variable name within your SFC) in the parent, Vue automatically binds `modelValue` as the prop in the child and listens for an event named `update:modelValue`. This event is how Vue knows the model value has changed and updates the parent data accordingly.

### Why "update:"?
The use of `update` is a naming convention that clearly indicates the intent to update the `modelValue`. It makes Vue's code more explicit by:

1. Automatically tying together the prop and its event without custom event naming.
2. Allowing for multiple `v-model` bindings, where you can bind other properties (e.g., `v-model:checked`, `v-model:content`), each following the same `update:<propName>` event convention.

This change from Vue 2 simplifies things, especially when you need more than one `v-model` in a single component.

### How to use multiple v-model in Vue 3  
You can specify multiple `v-model` bindings by using the syntax `v-model:<propName>`. Each `v-model` is tied to a specific prop and an event in the child component. For each prop, Vue expects an event named `update:<propName>`.  
- **In the Child Component:** Emit `update:<propName>` events for each prop that should be bound with `v-model`.
- **In the Parent Component**: Use `v-model:<propName>` for each prop you want to bind, ensuring clear and clean syntax.

This structure makes it much easier to handle multiple v-model bindings in Vue 3, improving both flexibility and readability!

#### Example of multiple "v-model-like" bindings in Vue 3  

In the child component, you bind the props `name` and `age` to the respective input fields value.  
And emit events `update:name` and `update:age` to update the parent's `userName` and `userAge`.

```html
<template>
  <div>
    <input
      type="text"
      placeholder="Enter your name"
      :value="name"
      @input="$emit('update:name', $event.target.value)"
    />
    <input
      type="number"
      placeholder="Enter your age"
      :value="age"
      @input="$emit('update:age', $event.target.value)"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  age: number
}>()
</script>
```
In the parent, you use `v-model:name` for `userName` and `v-model:age` for `userAge`, which makes it easy to bind multiple properties at once.

```html
<template>
  <MyComponent v-model:name="userName" v-model:age="userAge" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const userName = ref('')
const userAge = ref(0)
</script>
```

---
## References  
- https://vuejs.org/guide/components/v-model.html
- https://v3-migration.vuejs.org/breaking-changes/v-model.html

---
## Conclusion
Sometimes we come across a different pattern in Vue 3 and it's good to know why it changed and how it works now. You can refer to the official docs created to help developers migrating from Vue 2 [here](https://v3-migration.vuejs.org/breaking-changes/v-model.html).

What did you think of this post? Do you have any questions, suggestions or criticisms? Leave a reaction or a comment below. Thanks for visiting! 😉