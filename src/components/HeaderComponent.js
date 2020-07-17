import React from 'react';
import '../style.css';
import DataComponent from './DataComponent';

class HeaderComponent extends React.Component{
    constructor() {
        super();
        this.state = {
            typeOfCall : ''
        }
    }
    
    handleClick = (event) => {
        this.setState({typeOfCall : event.target.value});
        console.log(this.state.typeOfCall);
    }

    render() {
        return(
            <div className = "head-container">
            <header className = "toolbar">
                <h4>Whatsapp</h4>
            </header>
            <section className = "button-toolbar">
                <button type = "submit" value = "call" onClick = { e => this.handleClick(e)}>CALLS</button>
                <button type = "submit" value = "chat" onClick = { e => this.handleClick(e)}>CHATS</button>
                <button type = "submit" value = "contact" onClick = { e => this.handleClick(e)}>CONTACTS</button>
            </section>
            <section className = "data-container">
                <DataComponent typeOfCall = {this.state.typeOfCall}/>
            </section>
        </div>
        );
        
    } 
        
        
    
}

export default HeaderComponent;