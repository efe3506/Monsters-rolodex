import { Component } from "react";
import "./card-list.styles.css";
import Card from "../card/Card.component";

class CardList extends Component {
  render() {
    // console.log(this.props.canavarlar);
    const { canavarlar } = this.props;

    return (
      <div className="card-list">
        {canavarlar.map((canavar) => {
          return <Card canavar={canavar} key={canavar.id} />;
        })}
      </div>
    );
  }
}

export default CardList;
