import React from "react";
import Bottom from "./Bottom";
import Questions from "./Questions";

export default function GameScreen(){
    const [arrayResults, setArrayResults] = React.useState([]);

    return (
        <>
            <div className="containerGame">
                <div className="top">
                    <img className="logoGame" src="/images/logo.png" alt="logo"></img>
                    <h1> Zap Recall</h1>
                </div>
                <Questions arrayResults={arrayResults} setArrayResults={setArrayResults}/>
                <Bottom  />
            </div>
        </> 
    );
}