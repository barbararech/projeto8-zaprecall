import React from "react";
import Bottom from "./Bottom";
import Questions from "./Questions";
import logo from './assets/images/logo.png';


export default function GameScreen(){
    const [arrayStats, setArrayStats] = React.useState([]);
  // console.log(props.arrayStats)
  console.log(arrayStats)
  console.log(setArrayStats)
  // console.log(props.setArrayStats)
    return (
        <>
            <div className="containerGame">
                <div className="top">
                    <img className="logoGame" src={logo} alt="logo"></img>
                    <h1> Zap Recall</h1>
                </div>
                <Questions arrayStats={arrayStats} setArrayStats={setArrayStats}/>
                <Bottom arrayStats={arrayStats} setArrayStats={setArrayStats} />
            </div>
        </> 
    );
}