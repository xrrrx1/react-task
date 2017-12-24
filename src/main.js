import React from 'react'
import {render} from 'react-dom'
import "../styles/main.sass"
import App from "./components/App";
import todos from "./todos";

render(<App initialData={todos}/>, document.getElementById('container'));
