import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      canavarlar: [
        { name: "Linda", id: 1 },
        { name: "Frank", id: 2 },
        { name: "Jackie", id: 3 },
        { name: "Joe", id: 4 },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        {/* <h1>{this.state.canavar1.name}</h1>
        <h1>{this.state.canavar2.name}</h1>
        <h1>{this.state.canavar3.name}</h1> */}
        {this.state.canavarlar.map((canavar) => {
          return (
            <div key={canavar.id}>
              <h1>{canavar.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
