import React from "react";


export default function Bottom(props){
    console.log(props.arrayStats)
    console.log(props.arrayResult)
  
    // let arrayresultstest = ["help-circle", "help-circle","help-circle", "help-circle", "close-circle","help-circle", "help-circle", "close-circle"]

    if(props.arrayResult.length === 8){
        if(!props.arrayResult.includes("close-circle")){
            return(
                <>
                    <div className="bottom">
                        <p> &#x1f973; Parabéns!</p>
                        <p> Você não esqueceu de nenhum flashcard!</p>
                        <p> {props.arrayResult.length}/8 CONCLUÍDOS</p>
                        <div>
                            {props.arrayResult.map(item => <ion-icon name={item}></ion-icon>)}
                        </div>
                    </div>
                </> 
            )
        }  
        if(props.arrayResult.includes("close-circle")){
            return (
                <>
                    <div className="bottom">
                    <p>	&#128560; Putz...</p>
                        <p> Ainda faltam alguns... Mas não desanime!</p>
                        <p> {props.arrayResult.length}/8 CONCLUÍDOS</p>
                        <div>
                            {props.arrayResult.map(item => <ion-icon name={item}></ion-icon>)}
                        </div>
                    </div>
                </> 
            )
        }
    }
    return (
        <>
            <div className="bottom">
                <p> {props.arrayResult.length}/8 CONCLUÍDOS</p>
                <div>
                    {props.arrayResult.map(item => <ion-icon name={item}></ion-icon>)}
                </div>
            </div>
        </> 
    );
}