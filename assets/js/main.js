class App extends React.Component {
    state = {
        name : 'Ryu',
        age : 35
    }
    render() {
        return (
            <div className="app-content">
                <h1>Hey, ninjas</h1>
                <p>My name is : {this.state.name} and i am {this.state.age}</p>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));