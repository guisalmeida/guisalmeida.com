---
title: Zopa Clothing
description: An e-commerce SPA store made with Typescript and React, that
  consumes its own products from a Firebase database, manages state with Redux
  and payments with Stripe.
date: 2023-11-18 05:01:07
thumbnailImage: ../../static/assets/img/screenshot-from-2023-11-18-17-03-52.png
category: project
tags:
  - react
  - redux
  - typescript
  - firebase
  - stripe
---
- - -

## Index

```toc
exclude: Index
```

- - -

## 1 Intro

Zopa Clothing it's a friend's brand, and I embarked on this project to delve into advanced concepts in React and Typescript. Here are the key links:

<p>
    Source code:  
    <a href="https://github.com/guisalmeida/zopa-store" target="_blank">
        https://github.com/guisalmeida/zopa-store
    </a>
    <br>
    Demo:
    <a href="https://zopa-clothing.netlify.app/" target="_blank">
        https://zopa-clothing.netlify.app/
    </a>
</p>

## 2 Backend
The backend of this application is made with Firebase, which provides tools that make app development faster and more straightforward. Such as database options of using Firestore and Firestore Realtime Database. For now, just to have some products available in our database, I created a function to update it with new products, we just need to call it passing the new products object.

```ts
// Update database
export const addCollectionsAndDocuments = async <T extends TObjectToAdd>(
  collectionKey: string,
  objectsToAdd: T[],
): Promise<void> => {
  const collectionRef = collection(db, collectionKey)

  // Batch - Prevent lose data in the requests
  const batch = writeBatch(db)

  objectsToAdd.forEach(object => {
    const docRef = doc(collectionRef, object.code_color.toLowerCase())
    batch.set(docRef, object)
  })

  await batch.commit()
}

addCollectionsAndDocuments('products', NewItems)
```

Once executed, the new products seamlessly integrate into our database.  

![Firestore-database](static/assets/img/screenshot-from-2023-11-18-17-59-46.png)

### 2.1 Google Support  
Firebase, backed by Google, elevates our app development experience. Leveraging Firebase Authentication, users can effortlessly sign in or sign up using their Google accounts. 

![Sign In](static/assets/img/sign-in.gif)  

## 3. Frontend
Crafted with Vite, React, and Typescript, our frontend is a testament to thoughtful implementation.

### 3.1 State Management  
This is the most challenging part of this project, I managed to implement Redux with Sagas which is a library to work with asynchronous state and prevent side effects.

#### 3.1.1 Asynchrounous state with Sagas  
Implementing Redux with Sagas for asynchronous state and side effect prevention was challenging but rewarding. Sagas ensures our state stays in sync with asynchronous requests.   
The saga functions are used as the base for the generator functions, I wrote about them in my post about Javascript.  

<p>
  <a href="https://www.guisalmeida.com/my-cheat-sheet-of-javascript/#8-generators" target="_blank">[Generators post link]</a>
</p>



```ts
import { takeLatest, all, call, put } from 'typed-redux-saga'
import { FirebaseError } from 'firebase/app'

import { getProductsCollection } from '../../utils/firebase'
import {
  fetchProductsSuccess,
  fetchProductsFailed,
} from '../actions/productsActions'

export function* fetchProductsAsync() {
  try {
    const products = yield* call(getProductsCollection)
    yield* put(fetchProductsSuccess(products))
  } catch (error) {
    yield* put(fetchProductsFailed(error as FirebaseError))
  }
}

export function* onFetchProducts() {
  yield* takeLatest('FETCH_PRODUCTS_START', fetchProductsAsync)
}

export function* productsSaga() {
  yield* all([call(onFetchProducts)])
}
```

- **`takeLatest`** is used to listen for a Redux action, and when that action is dispatched, it automatically cancels any previous instances of the same saga that might still be running and starts a new one. It ensures that only the latest instance of the saga is active, which can be useful in scenarios where you want to handle only the most recent occurrence of a specific action.

- **`call`** is used to call a function (usually a function that returns a Promise) in a synchronous manner inside a saga. It allows for better testing and handling of asynchronous code by providing a more natural way to invoke functions that return promises. It can also be used to call other sagas, making it a versatile tool in managing asynchronous flow.

- **`put`** is used to dispatch a Redux action from within a saga. When a saga needs to trigger a change in the application state, it uses `put` to dispatch an action. This action is then processed by the Redux store, updating the state accordingly.

- **`all`** is used to run multiple sagas concurrently. It takes an array of sagas as arguments and runs them in parallel. It is often used in scenarios where multiple asynchronous tasks need to be performed simultaneously. The `all` function resolves when all the sagas in the array have completed.


#### 3.1.2 Memoization  
Memorization is a specific form of caching that involves saving the return value at the first request, after that we can leverage of the cached value if the subsequent requests are for the same value.
We are using the [Reselect library](https://github.com/reduxjs/reselect) for creating memoized "selector" functions, commonly used with Redux. This helps us to prevent unnecessary calls to our backend for example if the state is still the same.


```ts
import { createSelector } from 'reselect'
import { TProductsState } from '../reducers/productsReducer'
import { TRootState } from '../store'

const selectProductsReducer = (state: TRootState): TProductsState =>
  state.products

export const selectAllProducts = createSelector(
  [selectProductsReducer],
  products => products.allProducts,
)

export const selectIsLoading = createSelector(
  [selectProductsReducer],
  products => products.isLoading,
)

```
#### 3.1.3 Persisting local store data
To have the stare persisted in local storage I used the library [Redux Persist](https://github.com/rt2zz/redux-persist). This helps us to keep the cart data even if the user closes the browser.
This is set up in our `store.ts` config and passed as a provider in our `main.tsx`.

Following is a basic configuration:  
```js
// store.js
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import rootReducer from './reducers'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}
```

```js
// App.js
import { PersistGate } from 'redux-persist/integration/react'

// ... normal setup, create store and persistor, import components etc.

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootComponent />
      </PersistGate>
    </Provider>
  );
};
```



### 3.2 User Experience
A seamless user experience is crucial for conversions. Here are some key features enhancing user interaction. 

#### 3.2.1 Toast messages  
Toast messages are used to notify users with important information using a modal message box. These notification messages pop up in the top-center of the screen but do not require the user to dismiss them, enhancing user feedback during actions like payments.   

![Toast](static/assets/img/toast2.png)


#### 3.2.2 Stripe
Implementing [Stripe](https://stripe.com/) for payments, we ensure a secure and smooth checkout experience. Our frontend integrates Stripe's UI components seamlessly.  

![Payment](static/assets/img/payment.gif)

To interact with the Strapi API, a serverless function is employed, ensuring secure transactions.

```js
require('dotenv').config()

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

exports.handler = async event => {
  try {
    const { amount } = JSON.parse(event.body)

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'brl',
      automatic_payment_methods: { enabled: true },
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    }
  } catch (error) {
    console.log({ error })

    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    }
  }
}
```

In the frontend, Stripe UI components are imported to create a user-friendly payment form.  

```ts
...
import {
  PaymentElement,
  AddressElement,
} from '@stripe/react-stripe-js'

...

export default PaymentForm = () => {
  return (
    <>
    ...
      <AddressElement options={{ mode: 'shipping', allowedCountries: ['BR'] }} />

      <PaymentElement id="payment-element" options={{ layout: 'tabs' }} />
    ...
    </>
  )
}

```

## 4 Conclusion

Zopa Clothing Store served as a playground for advanced React and Typescript concepts and effective state management using Redux and Sagas.  

What are your thoughts on this project? Any suggestions or critiques? Feel free to leave a reaction or a comment below. Thank you for visiting! 😉