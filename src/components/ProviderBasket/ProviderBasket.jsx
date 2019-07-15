import React from 'react';
import ContextBasket from '../ContextBasket/ContextBasket';

export class ProviderBasket extends React.Component {
    basket = [];

    render() {
        return (
            <ContextBasket.Provider
                value={this.basket}
            >

            </ContextBasket.Provider>
        );
    }
}