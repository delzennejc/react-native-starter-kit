# React Native Starter Kit

This starter kit is designed to get you up and running with a complete React Native project as fast as possible.

## Table of Contents
1. [Features](#features)
1. [Requirements](#requirements)
1. [Getting Started](#getting-started)
1. [Application Structure](#application-structure)
1. [Storybook](#storybook)

## Features
* [react](https://github.com/facebook/react)
* [redux](https://github.com/rackt/redux)
* [redux-saga](https://github.com/redux-saga/redux-saga)
* [expo](https://github.com/expo/expo)
* [react-native-elements](https://react-native-training.github.io/react-native-elements/)
* [styled-components](https://github.com/styled-components/styled-components)
* [react-router-native](https://github.com/rackt/react-router)
* [babel](https://github.com/babel/babel)
* [Storybook](https://storybooks.js.org/)

## Requirements
* node `^4.5.0`
* yarn `^0.22.0` or npm `^3.0.0`
* flow-typed `^2.0.0` (if you wanna use flow)

## Getting Started

After confirming that your development environment meets the specified [requirements](#requirements), you can create a new project based on `react-native-starter-kit` by doing the following:

### Install from source

First, clone the project:

```bash
$ git clone https://github.com/prattjames/react-native-starter-kit.git <my-project-name>
$ cd <my-project-name>
```

Then install dependencies and check to see it works. It is recommended that you use [Yarn](https://yarnpkg.com/) for deterministic installs, but `npm install` will work just as well.

```bash
$ yarn install          # Install project dependencies
$ flow-typed install    # Install dependencies types if you want to use flow
$ yarn start            # Compile and launch (same as `npm start`)
```

While developing, you will probably rely mostly on `npm start`; however, there are additional scripts at your disposal:

|`npm run <script>`|Description|
|------------------|-----------|
|`start`|Starts your app with expo and also launch Storybook. HMR will be enabled in development.|
|`ios`|Starts your app with the iOS simulator(mac only), and also launch Storybook.|
|`android`|Starts the android simulator (needs android studio), and also launch Storybook.|
|`test`|Runs unit tests with Jest in watch mode.|
|`eject`|All the configurations are given back to you instead of expo.|

## Application Structure

```
.
├── .expo                    # Project and build configurations
├── flow-typed               # Dependencies types for flow
├── node_modules             # All the dependencies
├── src                      # Application source code
│   ├── components           # All the application's components
│   ├── helpers              # Application's helpers
│   ├── pages                # Application pages
│   │   ├── Home             # The first page the user will see
│   │   │   ├── containers   # All the page's containers
│   │   │   ├── reducks      # All that concerns Redux (Model, Creators, Reducers)
│   │   │   ├── routes       # all the routes connected to the Home page
│   │   │   ├── sagas        # All the sagas of the Home page
│   │   │   └── selectors    # All the selectors of the Home page
│   │   ├── Main             # The inbetween component of all pages
│   │   │   ├── containers   # All the page's containers
│   │   │   ├── reducks      # All that concerns Redux (Model, Creators, Reducers)
│   │   │   ├── sagas        # All the sagas of the Main page
│   │   │   └── selectors    # All the selectors of the Main page
│   ├── routes               # Routes of the application
│   ├── services             # Communication with things outside of the app
│   ├── store                # Creation of the redux store and middlewares
│   └── styles               # Application-wide styles (generally settings)
├── tests                    # Unit tests
├── .babelrc                 # Babel configuration file
├── .flowconfig              # Flow configuration file
├── .watchmanconfig          # Watchman configuration file
├── App.js                   # Application entry component
├── app.json                 # Expo configuration file
├── package.json             # Application's dependencies configuration
├── README.md                # Application instructions for the project
└── yarn.lock                # Yarn dependencies configuration
```

## Storybook

React Storybook is realy cool when you are building your UI. It makes you focus on the UI instead of trying to
create a route to make it fit your component etc...

Storybook is already in the boilerplate but you need to activate it when you want to use it.

To activate it you must go to in `App.js` in the root of the project and comment the ***App*** component and 
uncomment the ***Storybook*** Component
the 

```js
//*********** COMMENT THE CODE BELOW TO USE STORYBOOK *************/
/*import React, { Component } from 'react'
import { NativeRouter } from 'react-router-native';
import { Provider } from 'react-redux'

// all routes
import Routes from './src/routes'

// store redux
import store from './src/store'

// history
import { history } from './src/store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <Routes />
        </NativeRouter>
      </Provider>
    );
  }
} */
//*********** UNCOMMENT THE CODE BELOW TO USE STORYBOOK *************/

import Storybook from './storybook'
export default Storybook

```

after that, run `npm start` or any other command(ios|android) to run your project then go to `http://localhost:7007`.
***You gonna see some errors in the terminal but it's okey wait the end***

That's it, you have ***Storybook*** in a React Native app with Expo, all need to do now is create your **stories** ;-)

MIT License