# Bergen-Ngrx-Todo-App

Welcome to Bergen ngrx/redux first session! The goal of this group is to create a good environment to learn ngrx/redux and related technologies.

In this first session we will take a look at how to setup the project with the angular cli, install our ngrx dependencies and do as far as we can get towards a todo-app.

## Angular-cli

You will need to install angular-cli if you havn't already:

```
npm install -g @angular/cli
```

After that is finished installing you simply run the command:

```
ng new your-app-name
```

This generates our app for us.

And to serve it:

```
cd your-app-name
ng serve
```

* [Angular-cli docs] (https://github.com/angular/angular-cli/wiki) - if you want to dive deeper.

## Ngrx

We will go over ngrx/effects and ngrx/router-store in different sessions.

### Ngrx-store

To install ngrx/store run:

```
npm install @ngrx/store --save
```
or
```
yarn add @ngrx/store
```

* [Ngrx] (https://github.com/ngrx/platform/blob/master/docs/store/README.md) - Setup store docs.

### Ngrx-store-devtools

To install ngrx/store-devtools run:
```
npm install @ngrx/store-devtools --save
``` 
OR 
```
yarn add @ngrx/store-devtools
```

Then install the extension to chrome or firefox.

* [Devtools extensions] (http://extension.remotedev.io/) - Installation.

Then we can use the docs to set it up.

* [Devtools] (https://github.com/ngrx/platform/blob/master/docs/store-devtools/README.md) - Installation and setup.

## Structuring your app

You can structure your app as you like, but reducers should be at src/app/ level since they can be used from wherever in our app.

I like to have a folder for interfaces, actions, models and components/containers as well in the src/app level to easily find what you are looking for and separate concerns.

## Skip

If you have done these steps before feel free to skip and clone this repo then remember to run:

```
npm install .
```
