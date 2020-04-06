# react-code-producer

![Custom badge](https://img.shields.io/endpoint?color=green&label=react-code-producer&logo=react&style=plastic&url=https%3A%2F%2Fshields.redsparr0w.com%2F2473%2Fmonday)

An npm package to generate React code snippets for Component, functions etc.

## Generate code at terminal &

+ copy and use it to quickly test what you learned (beginners)

+ use in projects or other developement environment if your editor/IDE does have any plugins etc. (professionals)

+ Other usages e.g. to test functionality in scripts etc. (beginners, professionals)

![Box At Codepen](./docs/images/codepen.png)

## Note

+ React uses different style to add comments among JSX code. 
So please write code after 
```javascript
{ 
    /* Add elements here */ 
    
}
``` 
React comment statement, not just inside the curly braces while using the copied in your **React** application.


## :point_right: Getting started

+ **`npm install react-code-producer --save`**  

    > `Installs locally`

+ **`npm install react-code-producer --global`**  

    > `Installs globally`


## :pushpin: Code samples

### Example 1

> **Code** `code.js`

```javascript
const ReactCodeProducer = require("react-code-producer")

let App = new ReactCodeProducer()

console.log(App.getComponentCode('App'))
```

> **Output** `node code.js`

```bash
import React from 'react';
import ReactDOM from 'react-dom';

// React Component class `App`
class App extends React.Component {
    render() {
        return (
            <div className="App">
                { 
                    /* Add elements here */ 
                }

            </div>
        )
    }
}
```

### Example 2

> **Code** `code.js`, `(Automatic class name conversion, if it looks improper)`

```javascript
const ReactCodeProducer = require("react-code-producer")

let App = new ReactCodeProducer()

console.log(App.getComponentCode('box'))
```

> **Output** `node code.js`

```bash
import React from 'react';
import ReactDOM from 'react-dom';

// React Component class `Box`
class Box extends React.Component {
    render() {
        return (
            <div className="Box">
                { 
                    /* Add elements here */ 
                }

            </div>
        )
    }
}

export default Box;
```

### Example 3

> **Code** `code.js`

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

> **Output** `node code.js`

```bash
import React from 'react';
import ReactDOM from 'react-dom';

// React Component class `App`
class App extends React.Component {
    render() {
        return (
            <div className="App">
                { 
                    /* Add elements here */ 
                }

            </div>
        )
    }
}

export default App;

// React Component class `Index`
class Index extends React.Component {
    render() {
        return (
            <div className="Index">
                { 
                    /* Add elements here */ 
                }

            </div>
        )
    }
}

export default Index;
```

## Project Structure

```bash
react-code-producer
|
├── LICENSE
├── README.md
├── _config.yml
├── docs
│   └── images
│       └── codepen.png
├── node_modules
│   └── string-format
│       ├── LICENSE
│       ├── README.md
│       ├── index.js
│       └── package.json
├── package-lock.json
├── package.json
├── src
│   ├── index.js
│   └── snippets
│       ├── component.js
│       └── imports.js
└── tests
    └── test.js
```

Thank you very much.
