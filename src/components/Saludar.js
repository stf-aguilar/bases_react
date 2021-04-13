import React from 'react';

export default function saludar(props){

    return(
        <div>
            <button onClick={() => props.saludarFn(props.userInfo.nombre)}>Saludar</button>
        </div>
    )
}