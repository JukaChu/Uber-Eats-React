import React from "react";
import "./Dish.css";
import ConsumerBasket from '../ContextBasket/ContextBasket';

export class Dish extends  React.PureComponent{

  constructor(props) {
    super(props);
        this.state = {
        amount: 0,
        dishName: this.props.dish.title,
        item: {},
    }
  }

  addToBasket(title, uuid, itemIn) {
      this.setState( {items: this.state.amount++});
    console.log(this.state.amount, this.state.dishName);
      let itemInfo = {};

      itemInfo[uuid] =   {
          key: uuid,
          amount: this.state.amount,
          name: this.state.dishName,};

      console.log('-----obj');
      console.log(itemInfo);
      console.log('-----obj');

      this.setState({item: itemInfo});
      console.log('-----');
      console.log(this.state.item);
      console.log('----2');

//понять шо не так
      function basketHasOwnProperty(item) {
          return item.hasOwnProperty(itemInfo[uuid])
      }
      if(this.props.context.some(basketHasOwnProperty) === true) {
          this.props.context.map((item)=>{
              if(basketHasOwnProperty(item) === true){
                  return itemInfo;
              } else {
                  return item
              }});
          console.log('this');
          console.log(this);
          // context[uuid] = {...context[uuid], amount: this.state.amount};
          console.log('context')
          console.log(this.props.context);
          this.props.context.push(itemInfo);
          console.log('context222')
          console.log(this.props.context);
      } else {
          // context[uuid] = this.state.totalItems;
          this.props.context.push(itemInfo);
          console.log('context')

          console.log(this.props.context)
      }
  }

    onClickHandler() {

    }

render() {
    let context = this.props.context;

    const itemIn = this.props.itemIn;

    const { title, itemDescription, price, imageUrl, uuid, onClickHandler} = this.props.dish;
  let amount = this.state.amount;
  let priceFixed = (price/100).toFixed(2);
    return (

      <div className={this.state.amount === 0 ? 'dish' : 'dish dish--in-basket'} onClick={() => this.addToBasket(title, uuid, itemIn)}>
        <div className="dish__basket">
          <div className="dish__description">
            <p className="dish__name">{title}</p>
            {itemDescription && (
                <p className="dish__additive">{itemDescription}</p>
            )}
            <p className="dish__price">{priceFixed}₴</p>
            {amount !== 0 ? <div className="dish__amount">{amount}</div> : <div className="dish__amount">No</div>}
          </div>
          {imageUrl && (
              <img src={imageUrl} alt={title} className="dish__photo-preview" onClick={() => onClickHandler()}/>
          )}
        </div>
      </div>
  );
}

}
