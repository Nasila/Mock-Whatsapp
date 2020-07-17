import React from 'react';
import { data } from '../data/mock-data.json';
import '../style.css';


function DataComponent(props) {
    let typeOfCall  = props.typeOfCall;
    if(typeOfCall === "call") {
        const callData = data.map((item) => {
            return (
                <div className = "data">
                    <p>{item.contactName}</p>
                    <p>{item.time}</p>
                    <p>{item.callType}</p>
                </div>
            )
        });
        
        return callData;
    }

    if(typeOfCall === "chat") {
        const chatData = data.map((item) => {
            return (
                <div className = "data">
                    <div>
                        <img src = {item.profileImage} alt={item.username}/>
                    </div>
                    <table>
                        <tr>
                            <th>{item.username}</th>
                        </tr>
                        <tr>
                            <td>{item.message}</td>
                        </tr>
                    </table>                
                   
                    <span>{item.time}</span>
                </div>
            )
        });
        return chatData;
    }

    if(typeOfCall === "contact") {
        const contactData = data.map((item) => {
            return (
                <div className = "data">
                    <p>{item.contactName}</p>
                    <p>{item.phoneNumber}</p>
                </div>
            )
        });
        
        return contactData;
    }
    return null;
}
 
export default DataComponent;