import { Component } from "react";
import "./App.css";

//!6 AĞUSTOS 01.55.24
class App extends Component {
  constructor() {
    super();
    this.state = {
      canavarlar: [],
      aramaAlanı: "",
    };
    // console.log("constructor");
  }
  componentDidMount() {
    // console.log("didMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) =>
        this.setState(
          () => {
            return { canavarlar: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }
  aramaDeğişikliği = (e) => {
    const aramaAlanı = e.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { aramaAlanı };
    });
  };
  render() {
    const { canavarlar, aramaAlanı } = this.state;
    const { aramaDeğişikliği } = this.aramaDeğişikliği;
    // console.log("render");
    const filtrelenmişCanavarlar = this.state.canavarlar.filter((canavar) => {
      return canavar.name.toLocaleLowerCase().includes(this.state.aramaAlanı);
    });
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search for monsters..."
          onChange={this.aramaDeğişikliği}
        />
        {filtrelenmişCanavarlar.map((canavar) => {
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
