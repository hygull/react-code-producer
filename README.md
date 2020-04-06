# react-code-producer

![Custom badge](https://img.shields.io/endpoint?color=green&label=react-code-producer&logo=react&style=plastic&url=https%3A%2F%2Fshields.redsparr0w.com%2F2473%2Fmonday)

An npm package to generate React code snippets for Component, functions etc.

## Note

+ React uses different style to add comments among JSX code. 
So please write code after `{ /* Add elements here */ }` line, not just inside.


## :point_right: Getting started

+ **`npm install react-code-producer --save`**  

    > `Installs locally`

+ **`npm install react-code-producer --global`**  

    > `Installs globally`


## :pushpin: Code samples

### Example 1

> **Code**

```javascript
// Example 1
const ReactCodeProducer = require("react-code-producer")

let App = new ReactCodeProducer()

console.log(App.getComponentCode('App'))
```

> **Output**

```bash
import React from 'react';
import ReactDOM from 'react-dom';

// React Component class `App`
class App extends React.Component {
    render() {
        return (
            <div className="App">
                { /* Add elements here */ }

            </div>
        )
    }
}
```

### Example 2

> **Code**

```javascript
const ReactCodeProducer = require("react-code-producer")

let AppIndex = new ReactCodeProducer({
    component: {
        code: true,
        names: [
            'App',
            'Index'
        ]
    }
})

console.log(AppIndex.code)
```

> **Output**

```bash
import React from 'react';
import ReactDOM from 'react-dom';

// React Component class `App`
class App extends React.Component {
    render() {
        return (
            <div className="App">
                { /* Add elements here */ }

            </div>
        )
    }
}


// React Component class `Index`
class Index extends React.Component {
    render() {
        return (
            <div className="Index">
                { /* Add elements here */ }

            </div>
        )
    }
}
```

Thank you very much.
