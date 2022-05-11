import React from "react";

export default function StartScreen(){

    const [visible,setVisible] = React.useState(true);

    return (
     visible ?  
        <>
            <div className="containerStart">
                <img className="logoStart" src="/images/logo.png" alt="logo"></img>
                <h1> Zap Recall</h1>
                <button className="buttonStart" onClick={()=>setVisible(false)}> Iniciar Recall!</button>
            </div>
        </> 
        : <></>
    );
}