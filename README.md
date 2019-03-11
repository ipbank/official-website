## Technology Stack

* [Angular](https://angular.com/)
* [Material](https://material.angular.io/)
* [Ngxs](https://www.gitbook.com/book/ngxs/ngxs/)

## How to run

1. Use `npm i` to install dependencies.
2. Then run `npm start` to launch the development server on localhost:4200.

## Code specification

A independence component has it own folder in `components` or `pages`, usually it's same name as the component.
There's some file in folder such as `_com` `module` `interface` `.html` `.scss` `.ts`.

`_com`: includes sub-components which used in current page

`module`: includes all depends of the component

`interface`: includes all interface which used in `.ts`

`.ts`: most important file,in `class` there're several parts:

* Data Part: declare your parameters

* Constructor Part: angular's constructor

* Lifecycle Part: reserve angular's lifecycle hook function whatever you use or not,such as ngOnInit()

* Methods Part: write your functions here, the function's name follow the rules as far as possible:

1. start with `get`,`set`,`on` and so on.
2. end with `click`,`change` or other verb when beginning is `on`.
3. for example: `onButtonClick()`,`setCurrentNavigationIndex()`
4. and I hope you can write a function names `init()` at the beginning of this Methods Part like `components/header/header.component.ts` :)
