Testing React 
Jest + React Testing Library
Test driven devlopment
Jest is a deleightfull js framework with as focus on simplicity.

Setup Testing libary
npm i --save -dev @testing-library/react
npm i -D jest
configure jest

npx jest --init
choose test environpment jsdom
coverage report yes
use babel

after all of these, it creates jest.config.js
setup test command
npm run test

npm i -D jest-environment-jsdom

npm run test

Create first test case

Create a folder__tests__ we call it as dunder
file sum.test.js
```
import {sum} from "../sum"; 
test("Sum of two positive numbers",()=>{
    expect(sum(2,5)).toBe(5)
})
```

configure babel

instal bebel-jest from official documentation

make the changes .babelrc.
{

}

jsdom?
gitignore coverage

Create Header.test.js

```
import {render} from '@testing-library/react'
import Header from './Header'
test('logo should be rendering header',()=>{
    // Load header
    const header = render(
        <Provider store = {store}>
        <Header/>
        </Provider>
        );

    // Check if logo is loaded
})
```
{
    "presets":[
        [@babel/preset-env",{"tagets":{"node":"current"}}],
        ["@babel/preset-react",{"runtime":"automatic"}]
    ]
}

npm i -D @babel/preset-react

import store in test file
use Provider

Search.test.js
import {render} from '@testing-library/react';

import Body from '../Body'
import {Provider} from 'react-redux';
import store from "../../utils/store.js";
import {StaticRouter} from 'react-router-dom/server'
import RESTAURANT_DATA from '.data';
global.fetch = jest.fn(()=>{
    Promise.resolve({
        json:Promise.resolve(RESTAURANT_DATA)
    })
})
test('search result on home page',()=>{
    const body = render(
        <StaticRouter>
        <Provider store={store}>
        <Body />
        </Provider>
        </StaticRouter>
        );
        console.log(body);
})



