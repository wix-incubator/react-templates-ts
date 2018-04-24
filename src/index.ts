'use strict'
import * as React from 'react';
import * as ReactDOM from "react-dom";
import {TemplateExample} from "./TemplateExample";
// require('./main.scss')
const wrapperElm = React.createElement(TemplateExample)
// const wrapperElm = React.createElement('div')
ReactDOM.render(wrapperElm, window.document.getElementById('root'))

// ReactDOM.render(
//     <h1>Hello, world!</h1>,
//     window.document.getElementById('root')
// );

console.log('Hello')
