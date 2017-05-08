# React Native Starter Kit

This starter kit is designed to get you up and running with React Native as fast as possible.

## Table of Contents
1. [Features](#features)
1. [Requirements](#requirements)
1. [Getting Started](#getting-started)
1. [Application Structure](#application-structure)
1. [Development](#development)
  1. [Developer Tools](#developer-tools)
  1. [Routing](#routing)

## Features
* [react](https://github.com/facebook/react)
* [redux](https://github.com/rackt/redux)
* [redux-saga](https://github.com/redux-saga/redux-saga)
* [expo](https://github.com/expo/expo)
* [styled-components](https://github.com/styled-components/styled-components)
* [react-router-native](https://github.com/rackt/react-router)
* [babel](https://github.com/babel/babel)

## Requirements
* node `^4.5.0`
* yarn `^0.22.0` or npm `^3.0.0`
* flow-typed `^2.0.0`

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
$ flow-typed install    # Install dependencies types 
$ yarn start            # Compile and launch (same as `npm start`)
```

While developing, you will probably rely mostly on `npm start`; however, there are additional scripts at your disposal:

|`npm run <script>`|Description|
|------------------|-----------|
|`start`|Starts your app with expo. HMR will be enabled in development.|
|`ios`|Starts your app with the iOS simulator(mac only).|
|`android`|Starts the android simulator (needs android studio).|
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

MIT License