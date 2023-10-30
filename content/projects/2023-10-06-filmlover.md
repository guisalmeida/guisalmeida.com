---
title: FilmLover
description: A ReactJS application for users engaging with movies by swiping to
  like or dislike.
date: 2023-10-06 04:10:05
thumbnailImage: ../../static/assets/img/filmlover-home-desktop.png
category: project
tags: 
- 'react'
- 'redux'
- 'toolkit'
- 'tmdb'
---
- - -

## Index

```toc

exclude: Index

```

---

## Intro

**FilmLover** is a ReactJS application for users engaging with movies by swiping to like or dislike. Users are able to see the movies they like/dislike and search for movies. Think about Tinder for movies.

Implemented the project architecture using Vite, React, Redux Toolkit, React Router, Styled Components, and Axios.  
Used React Persist lib to save in the local storage movies that the user likes or dislikes.
Used the API themoviedb.org to show movies.

<p>
  Source code:
  <a href="https://github.com/guisalmeida/filmlover" target="_blank">
    https://github.com/guisalmeida/filmlover
  </a>
  <br>
  Demo:
  <a href="https://filmlover.netlify.app/" target="_blank">
    https://filmlover.netlify.app/
  </a>
</p>

## Layout

The application consists of 4 main views:

### Movie cards (home)
Popup random movies to swipe to like or dislike.  

![Home](static/assets/img/filmlover-home-desktop.png)

### Favorites
List of movies the user liked.  

![Favorites](static/assets/img/filmlover-favorites-desktop.png)

### Wall of Shame
List of movies the user disliked.  

![Disliked Movies](static/assets/img/filmlover-wallofshame-desktop.png)

### Search Results
List the movies and implement swipe for like/dislike for each result.  

![Search Results](static/assets/img/filmlover-search-desktop.png)


## Conclusion

This project helped me a lot to put into practice concepts of **state management** using Redux Toolkit.

So, what did you think of this project? Do you have any suggestions or criticisms? Leave a reaction or a comment below. And thanks for visiting! 😉