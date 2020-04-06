const ReactCodeProducer = require("../src/index")

let AppCode = new ReactCodeProducer('App')
console.log(AppCode.getComponentCode('App'))
console.log(ReactCodeProducer)