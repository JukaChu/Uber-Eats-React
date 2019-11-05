import React from 'react';
import './Basket.css';
import basket from "../../img/basket.svg";
import {forInStatement} from "@babel/types";
import {DishInBasket} from "../DishInBasket/DishInBasket";


export class Basket extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            totalPrice: 0,
            totalAmount: 0,
        }
    }

    render(){

        document.querySelector('.ReactModalPortal').style.zIndex = 20;
        let localContext = JSON.parse(localStorage.getItem('basket'));
        let ttlAm = 0;
        let ttlPr = 0;
        {localContext.map((item)=>{for(let k in item){
            let uuid = item[k].key;
            let amount = item[k].amount;
            ttlAm = ttlAm + amount;
            let name = item[k].name;
            let price = item[k].price/100;
            ttlPr = ttlPr + price*amount;
            console.log('etamap');
            console.log(uuid, amount, name, price);
            this.setState({totalPrice: ttlPr});
            this.setState({totalAmount: ttlAm})
        }
             })}
      return (

        <div className="basket">
            <div className="basket__top">
                <img src={basket} alt="basket"/>
                <h3 className="basket__total-amount">Ваш заказ</h3>
                <div className="basket__close" onClick={this.props.closeModal}>Close</div>
            </div>
            <div className="basket__order-list">{localContext.map((item)=>{
                let uuid;
                let amount;
                let name;
                let price;
                let singlePrice;
                for(let k in item){
                    uuid = item[k].key;
                    amount = item[k].amount;
                    name = item[k].name;
                    singlePrice = item[k].price/100;
                    price = item[k].price*item[k].amount/100;

                    console.log('etomap');
                    console.log(this.props.context);
                    console.log(uuid, amount, name, price);
                }
                 return (
                     <DishInBasket key={uuid}
                     id={uuid}
                     context={localContext}
                                   name={name}
                                   amount={amount}
                                   price={singlePrice}
                                   ttlPr={ttlPr}
                                   ttlAm={ttlAm}
                     />

                )
            })}</div>
            <div className="basket__payment">
                <div className="basket__order-amount">{this.state.totalAmount} ед.</div>
                <p className="basket__next-step">Далее: оплата</p>
                <p className="basket__order-summary-price">{this.state.totalPrice} грн.</p>
            </div>
        </div>
    )
    }
}