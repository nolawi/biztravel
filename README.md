<p align="center">
 <img alt="BizTravel" src="https://biztravel.ai/wp-content/uploads/2017/03/Logo256x120.png"><br><br>



  <a href="https://github.com/nolawi/biztravel/releases/latest"><img src="https://github-release-version.herokuapp.com/github/nolawi/biztravel/release.svg?style=flat-square" alt="Latest release" /></a>
  <a href="https://travis-ci.org/nolawi/biztravel"><img src="https://img.shields.io/travis/nolawi/biztravel/redux.svg?style=flat-square" alt="Build Status" /></a>
  <a href="https://codecov.io/gh/nolawi/biztravel/branch/redux"><img src="https://img.shields.io/codecov/c/github/nolawi/biztravel/redux.svg?style=flat-square" alt="Coverage Status" /></a>
  <a href="https://gitter.im/nolawi/biztravel"><img src="https://img.shields.io/badge/chat-on%20gitter-1dce73.svg?style=flat-square" alt="Gitter chat" /></a>
</p>

## `Can we do test server instance integrated with git`

- **[Test Serbver](https://google.com)**
- **[Docu](https://github.com/nolawi/biztravel/)**

## branches

- ### [`master`](https://github.com/nolawi/biztravel)




      

## Setup

### 1. get the source code




### 2. innstall dependencies

```sh
$ npm install
```

### 3. run the the base app
for now we are not going to be developing in here. 

```sh
$ npm run dev
```
### 4. run the app/biztravel
in the root folder of this app there is `src` and `src-biztravel,` this way we can run multiple apps in one repo, for now i copied an open source template and set up a little search and if you go to the info- please keep documentation alive. 

I followed this structure [link](https://marmelab.com/blog/2015/12/17/react-directory-structure.html).

```sh
$ npm run dev:biztravel
```
### 5. run the styleguid

<p align="center"><img src="https://cloud.githubusercontent.com/assets/3068563/21237760/6b941f76-c2e7-11e6-92e3-bbb7c82b3622.gif"></p>

#### for our designer
this is based on [atomic design princlples](http://bradfrost.com/blog/post/atomic-web-design/)
we can move things aroun you realize what it is, just move the component folder to the right place. Everything else should work. The template controls the components UI. One place to maintain. Based on storybook Docu TBD



```sh
npm run storybook:biztravel
```

you can open http://localhost:9001 on browser and navigate through components to see their possible states. 

### 5. run the localhost

 `npm run dev:appname` will start the development server with [hot reload module](https://webpack.github.io/docs/hot-module-replacement) on top of it. also have another tool for devs chrome extention... i think

> [http://localhost:3000](http://localhost:3000) — development <br>
> [http://localhost:3001](http://localhost:3001) — webpack assets <br>



## Techstack



| **Tech** | **Description** |**Learn More**|
|----------|-------|---|
|  [React](https://facebook.github.io/react/)  |   Fast, composable client-side components.    | [Pluralsight Course](https://www.pluralsight.com/courses/react-flux-building-applications)  |
|  [Redux](http://redux.js.org) |  Enforces unidirectional data flows and immutable, hot reloadable store. Supports time-travel debugging. Lean alternative to [Facebook's Flux](https://facebook.github.io/flux/docs/overview.html).| [Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux), [Building React Applications with Idiomatic Redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux), [Pluralsight Course](http://www.pluralsight.com/courses/react-redux-react-router-es6)|
|  [React Router](https://github.com/reactjs/react-router) | A complete routing library for React | [Pluralsight Course](https://www.pluralsight.com/courses/react-flux-building-applications) |
|  [Babel](http://babeljs.io) |  Compiles ES6 to ES5. Enjoy the new version of JavaScript today.     | [ES6 REPL](https://babeljs.io/repl/), [ES6 vs ES5](http://es6-features.org), [ES6 Katas](http://es6katas.org), [Pluralsight course](https://www.pluralsight.com/courses/javascript-fundamentals-es6)    |
| [Webpack](http://webpack.github.io) | Bundles npm packages and our JS into a single file. Includes hot reloading via [react-transform-hmr](https://www.npmjs.com/package/react-transform-hmr). | [Quick Webpack How-to](https://github.com/petehunt/webpack-howto) [Pluralsight Course](https://www.pluralsight.com/courses/webpack-fundamentals)|
| [Jest](https://facebook.github.io/jest/) | Automated tests with built-in expect assertions and [Enzyme](https://github.com/airbnb/enzyme) for DOM testing without a browser using Node. | [Pluralsight Course](https://www.pluralsight.com/courses/testing-javascript) |




Lorem Ipsum

## lice

 © [BizTravel.ai](https://biztravel.ai/about/)
