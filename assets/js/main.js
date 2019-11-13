class App extends React.Component {
        state = {
            name : 'Ryu',
            age : 35
        }

        handleClick(e) {//this function fires everytime a user clicks
            console.log(e.target)
        }

        handleMouseHover(e) {//this function fires everytime  a user hovers over the element
            console.log(e.target, e.pageX); //logging the target element and the 
        }

        handleCopy(e) {//this function fires every time a user tries to copy stuff
            console.log('try being original for once');
        }

        render() {
        return (
            <div className="app-content">
                <h1>Hey, ninjas</h1>
                <p>My name is : {this.state.name} and i am {this.state.age}</p>
                <button onClick={this.handleClick}>Click me</button>
                <button onMouseOver={this.handleMouseHover}>Hover me</button>
                <p onCopy={this.handleCopy}>What we think, we become</p>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));