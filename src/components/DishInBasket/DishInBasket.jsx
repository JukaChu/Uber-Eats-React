import React from 'react';
import './DishInBasket.css'

export class DishInBasket extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            amount: this.props.amount,
            price: this.props.price,
        }

    }
    onOptionClick(e){
        let selectedAmount = +e.target.value;
        let id = e.target.closest('div').id;

        if(selectedAmount === 0){
            this.props.context.map((item)=>{
                if(item.hasOwnProperty(id) === true){
                    item[id].amount = selectedAmount;
                    let index = this.props.context.indexOf(item);
                    this.props.context.splice(index, 1);
                    e.target.closest('div').remove();
                } else {

                };
            });
            let jsonContext = JSON.stringify(this.props.context);

            localStorage.setItem('basket', jsonContext);
        } else {
        this.setState({amount: selectedAmount});
        console.log(id);
        this.props.context.map((item)=>{
            if(item.hasOwnProperty(id) === true){
                item[id].amount = selectedAmount;

            } else {

            };
        });
        let jsonContext = JSON.stringify(this.props.context);

        localStorage.setItem('basket', jsonContext);
        console.log(e.target.closest('div').id);}
    }

    render() {
        const allOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        return (
            <div className='dish-in-basket__order-item' key={this.props.key} id={this.props.id}>
                <select name="" id="dish-in-basket__select-amount" onChange={(e) => this.onOptionClick(e)}>
                    <option value={0}>Delete</option>
                    {allOptions.map((option)=>{
                        if(option === this.state.amount){
                            return <option selected  value={option}>{option}</option>} else {
                            return <option  value={option}>{option}</option>
                        }
                    })}
                </select>
                <h2 className='dish-in-basket__name'>{this.props.name}</h2>
                <h3 className='dish-in-basket__amount'>{this.state.price*this.state.amount} грн</h3>
            </div>
        );
    }

}