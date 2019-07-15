import React from 'react';



const ContextBasket = React.createContext([]);
export const ProviderBasket = ContextBasket.Provider;
export const ConsumerBasket = ContextBasket.Consumer;

export default ConsumerBasket;