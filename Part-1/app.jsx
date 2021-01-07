class ComponentA extends React.Component {
    render() {
        return (
            <div>
                <h1>My very First Component</h1>
            </div>
        )
    }
}

class ComponentB extends React.Component {
    render() {
        return (
            <div>
                <h2>My second Component</h2>
            </div>
        )
    }
}

class ComponentC extends React.Component {
    render() {
        return (
            <div>
                <p>My name is {this.props.name}</p>
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <FirstComponent />
                <SecondComponent />
                <NamedComponent name='Adeyemo' />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));