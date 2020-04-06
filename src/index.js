const format = require('string-format');


class ReactCodeBase {
    constructor(configurations) {
        this.configurations = configurations && Object.prototype.toString.call(configurations).slice(8, -1) === 'Object' ? configurations: {}
        this.code = ''
        this.setup()
    }

    setup() {
        // Setup the configurations based on properties, take proper actions
        let configurations = this.configurations
        if('component' in configurations) {
            if(this.configurations.component.code === true) {
                if('names' in configurations.component) {
                    for(let name of configurations.component.names)
                        this.code += this.getComponentCode(name, {attachImport: false})

                    this.code = this.getImports() + this.code
                }
            }
        }
        /* `this.code` setup is done */
    }

    getImports() {
        let importsCode = require("./snippets/imports");
        return importsCode
    }

    getComponentName(name) {
        return name? name: ''
    }

    getComponentCode(name, {attachImport=true} = {}) {
        // Double work, no external set function, jsut do it in one go
        let componentCode = require("./snippets/component");
        this.code = format(componentCode, this.getComponentName(name))

        if(attachImport) {
            this.code = this.getImports() + this.code
        }
        return this.code
    }
}


class ReactCodeProducer extends ReactCodeBase {
    constructor(configurations) {
        super(configurations)
    }
}

module.exports = ReactCodeProducer