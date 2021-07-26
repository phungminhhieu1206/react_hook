import React, { Component } from 'react';

class ExampleClass extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            name: "Hieu",
            age: 21,
            general: "male"
        }

    }

    handleClick = () => {
        this.setState({
            count: this.state.count + 1,
            name: "Mai"
        });
    };

    render() {
        return (
            <div>
                <pre>Class Component</pre>
                <p>You clicked {this.state.count} times</p>
                <button onClick={this.handleClick}>Click me</button>
                <p>{JSON.stringify(this.state)}</p>
            </div>
        );
    }
}

export default ExampleClass;