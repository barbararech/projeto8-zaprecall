import React from "react";
import Bottom from "./Bottom";
import Questions from "./Questions";

export default function GameScreen(){

    return (
        <>
            <div className="containerGame">
                <div className="top">
                    <img className="logoGame" src="/images/logo.png" alt="logo"></img>
                    <h1> Zap Recall</h1>
                </div>
                <Questions />
                <Bottom />
            </div>
        </> 
    );
}