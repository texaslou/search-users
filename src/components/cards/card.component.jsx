import React from "react";
import './card.styles.css';

const Card = (props)=>{
    return(
        <div className="card-container">   
        <img src={`https://i.pravatar.cc/150?img=${props.monster.id}`} alt="photo" />        
                 
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    )
}

export default Card;