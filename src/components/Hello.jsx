import React from 'react'

export default class Hello extends React.Component {

    constructor(props) {
        super(props)
        this.increment = this.increment.bind(this)
        this.state = {
            counter: 0
        }
    }
    render() {
        return <div>
            Hello {this.props.name}<br/>
            Compteur : {this.state.counter}<br/>
            {this.state.counter > 10 && <div>vous avez depassé 10</div>}
            <button onClick={this.increment}>+1</button>
        </div>
    }

    increment() {
        this.setState({counter: this.state.counter + 1})
        console.log('e')
    }
}