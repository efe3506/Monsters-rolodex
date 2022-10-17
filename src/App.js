import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/Card-list.component";
import SearchBox from "./components/search-box/search-box.component";

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
        this.setState(() => {
          return { canavarlar: users };
        })
      );
  }
  aramaDeğişikliği = (e) => {
    const aramaAlanı = e.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { aramaAlanı };
    });
  };

  render() {
    // console.log("App js render ");
    const { canavarlar, aramaAlanı } = this.state;
    const { aramaDeğişikliği } = this;
    // console.log("render");
    const filtrelenmişCanavarlar = canavarlar.filter((canavar) => {
      return canavar.name.toLocaleLowerCase().includes(aramaAlanı);
    });
    return (
      <div className="App">
        <h1 className="app-title">
          <em>-Monsters Rolodex-</em>
        </h1>
        <SearchBox
          onChangeHandler={aramaDeğişikliği}
          placeholder="Search for monsters..."
          className="monsters-search-box"
        />
        <CardList canavarlar={filtrelenmişCanavarlar} />
      </div>
    );
  }
}

export default App;
