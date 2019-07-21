import React from "react";
import basket from "../../img/basket.svg";
import './Cabinet.css';

export class Cabinet extends React.PureComponent{

    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
            dishName: this.props.dish.title,
            item: {},
            price: this.props.dish.price,
        }
    }
    render(){
  return (
    <div className="cabinet">
      <button className="cabinet__signIn">Sign In</button>
      <button className="cabinet__register">Register</button>
      <button className="cabinet__basket">
        <img src={basket} alt="" className="cabinet__basket-image" />
      </button>
    </div>
  );
}}
