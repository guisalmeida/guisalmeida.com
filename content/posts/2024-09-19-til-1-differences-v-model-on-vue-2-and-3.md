---
title: "TIL #1 - Differences V-Model on Vue 2 and 3"
description: Vue 3 has been around few years (it has been launched in 2020), but
  as a Vue developers used to work in Vue 2 sometimes we come across a different
  pattern in Vue 3 and it is good to know why it changed and how it works now.
date: 2024-09-19 09:51:12
thumbnailImage: ../../static/assets/img/vue-js-programming-1589827.jpg
category: blog
tags:
  - vue
---

### How `v-model` Works in Vue 3:

- **Prop**: Vue 3 uses `modelValue` as the prop that stores the data when you use `v-model` in the parent component.
- **Event**: The corresponding event emitted from the child component should be named `update:modelValue`.

So, when you use `v-model="destination"` in the parent, Vue automatically binds `modelValue` as the prop in the child and listens for an event named `update:modelValue`. This event is how Vue knows the model value has changed and updates the parent data accordingly.

### Why `update`?
The use of `update` is a naming convention that clearly indicates the intent to update the `modelValue`. It makes Vue's code more explicit by:

1. Automatically tying together the prop and its event without custom event naming.
2. Allowing for multiple `v-model` bindings, where you can bind other properties (e.g., `v-model:checked`, `v-model:content`), each following the same `update:<prop>` event convention.

This change from Vue 2 simplifies things, especially when you need more than one `v-model` in a single component.

---

### How it was in Vue 2 when we need more than one v-model in a single component:

In Vue 2, the `v-model` directive worked differently compared to Vue 3. There was only one `v-model` per component, and it used a fixed prop/event pair (`value` and `input` by default).

### In Vue 2:
- **Prop**: The default prop for `v-model` was always `value`.
- **Event**: The corresponding event emitted from the child component was always `input`.

#### Example in Vue 2:
For a single `v-model`, this was straightforward:

```vue
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

```vue
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

### Problem with Multiple `v-model` in Vue 2:
If you needed multiple `v-model` bindings for different values (e.g., `name` and `age`), Vue 2 did not support multiple `v-model` natively. You had to create custom prop names and custom events manually for each prop.

#### Example of multiple "v-model-like" bindings in Vue 2:

```vue
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

```vue
<template>
  <MyComponent :name="userName" @update:name="userName = $event" :age="userAge" @update:age="userAge = $event" />
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

### Summary:
- In Vue 2, **only one `v-model`** was allowed per component, which was tightly bound to the `value` prop and `input` event.
- If you needed multiple model-like bindings, you had to create custom props and events manually for each one.

### Vue 3 Improvement:
In Vue 3, you can now have multiple `v-model` bindings easily by using the format `v-model:<propName>`. Each `v-model` uses the `update:<propName>` event convention, making it cleaner and more scalable than in Vue 2.