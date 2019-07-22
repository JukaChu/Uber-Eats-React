import React from "react";
import basket from "../../img/basket.svg";
import './Cabinet.css';
import Modal from 'react-modal';
import {ConsumerBasket} from "../ContextBasket/ContextBasket";
import {Basket} from '../Basket/Basket';


const customStyles = {
    content: {
        top: '0',
        right: '0',
        width: '30%',
        height: '100vh',
        left: 'auto',
        bottom: 'auto',
        padding: '10px',
        paddingTop: '0',


    }
};

export class Cabinet extends React.PureComponent{

    constructor(props) {
        super(props);
        this.state = {
            totalAmount: 0,
            modalIsOpen: false,
        };
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal= this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    componentDidMount() {
        Modal.setAppElement('body');

    }

    afterOpenModal() {
        // this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render(){
  return (
    <div className="cabinet">
      <button className="cabinet__signIn">Sign In</button>
      <button className="cabinet__register">Register</button>
      <button className="cabinet__basket" onClick={this.openModal}>
        <img src={basket} alt="" className="cabinet__basket-image" />
      </button>
        <ConsumerBasket>
            {context => {
                return (
        <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel='example'
        >
            <Basket closeModal={this.closeModal}
                 context = {context}
            />
        </Modal>)}}
        </ConsumerBasket>
    </div>
  );
}}
