let componentCode = `
// React Component class \`{0}\`
class {0} extends React.Component {
    render() {
        return (
            <div className="{0}">
                { 
                    /* Add elements here */ 
                }

            </div>
        )
    }
}

export default {0};
`

module.exports = componentCode