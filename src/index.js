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
                    let exportsCode = ''
                    for(let name of configurations.component.names) {
                        this.code += this.getComponentCode(name, {attachImport: false})
                        exportsCode += this.getExports(name)
                    }

                    this.code = this.getImports() + this.code + exportsCode
                }
            }
        }
        /* `this.code` setup is done */
    }

    getImports() {
        let {importsCode} = require("./snippets/imports");
        return importsCode
    }

    getExports(name) {
        let {exportsCode} = require("./snippets/exports");
        return format(exportsCode, name)
    }

    getComponentName(name) {
        name = name? name: ''
        if(name === '') {
            name = 'App'
        } else {
            if(!/^[a-zA-Z]+$/.test(name)) {
                name = name.replace(/[^a-zA-Z]+/ig, '').tolowerCase()
            }
        }
        name = name[0].toUpperCase() + name.slice(1)
        return name
    }

    getComponentCode(name, {attachImport=true} = {}) {
        // Double work, no external set function, jsut do it in one go
        let {componentCode} = require("./snippets/component");
        this.code = format(componentCode, this.getComponentName(name))

        if(attachImport) {
            this.code = this.getImports() + this.code + this.getExports(name);
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
