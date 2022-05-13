import React from "react";
import logo from './assets/images/logo.png';

export default function StartScreen({setVisible}){

    return (
        <>
            <div className="containerStart">
                <img className="logoStart" src={logo} alt="logo"></img>
                <h1> Zap Recall</h1>
                <button className="buttonStart" onClick={() => setVisible(false)}> Iniciar Recall!</button>
            </div>
        </> 
    );
}
