const format = require('string-format');


class ReactCodeBase {
    constructor(configurations) {
        this.configurations = configurations && Object.prototype.toString.call(configurations).slice(8, -1) === 'Object' ? configurations: {}
        this.setup()
    }

    setup() {
        // Setup the configurations based on properties, take proper actions
    }

    getComponentName(name) {
        return name? name: ''
    }

    getComponentCode(name) {
        // Double work, no external set function, jsut do it in one go
        let componentCode = require("./snippets/component");
        console.log(this.getComponentName(name), name)
        this.code = format(componentCode, this.getComponentName(name))
        return this.code
    }
}


class ReactCodeProducer extends ReactCodeBase {
    constructor(configurations) {
        super(configurations)
    }
}

module.exports = ReactCodeProducer
