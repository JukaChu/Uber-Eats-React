import React from "react";
import "./Dish.css";
import ConsumerBasket from '../ContextBasket/ContextBasket';

export class Dish extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
            dishName: this.props.dish.title,
            item: {},
            price: this.props.dish.price,
        }
    }

    addToBasket(title, uuid) {
        const newAmount = this.state.amount + 1;
        const totalPrice = (newAmount*this.state.price)/100;
        this.setState({amount: this.state.amount + 1});
        let itemInfo = {};
        itemInfo[uuid] = {
            key: uuid,
            amount: newAmount,
            name: this.state.dishName,
            price: totalPrice,
        };

        function basketHasOwnProperty(item) {
            return item.hasOwnProperty(uuid)
        }

        if (this.props.context.some(basketHasOwnProperty) === true) {
            for (let j = 0; j < this.props.context.length; j++) {
                if (this.props.context[j].hasOwnProperty(uuid) === true) {
                    this.props.context[j] = itemInfo;
                } else {}
            }

        } else {
            this.props.context.push(itemInfo);
        }
    }



    render() {

        const {title, itemDescription, price, imageUrl, uuid} = this.props.dish;
        let amount = this.state.amount;
        let priceFixed = (price / 100).toFixed(2);
        console.log('pered render');
        console.log(this.props.context);
        console.log(amount);
        console.log(this.props.context);

        return (

            <div className={this.state.amount === 0 ? 'dish' : 'dish dish--in-basket'}
                 onClick={() => this.addToBasket(title, uuid, priceFixed)}>
                <div className="dish__basket">
                    <div className="dish__description">
                        <p className="dish__name">{title}</p>
                        {itemDescription && (
                            <p className="dish__additive">{itemDescription}</p>
                        )}
                        <p className="dish__price">{priceFixed}₴</p>
                        {amount !== 0 ? <div className="dish__amount">{amount}</div> :
                            <div className="dish__amount">No</div>}
                    </div>
                    {imageUrl && (
                        <img src={imageUrl} alt={title} className="dish__photo-preview"
                             />
                    )}
                </div>
            </div>
        );
    }

}
