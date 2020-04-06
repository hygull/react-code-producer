// Example 1
const ReactCodeProducer = require("../src/index")

let App = new ReactCodeProducer()
console.log(App.getComponentCode('box'))


// Example 2 - Starter code for 2 components
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