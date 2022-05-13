import React from "react";

export default function Bottom(props){

    console.log(props.arrayStats)
    console.log(props.setArrayStats)
    const arraytest = [1,2,3,4,5,6,7,8]; 
    return (
        <>
            <div className="bottom">
                <p> {props.arrayStats.length}/8 CONCLUÍDOS</p>

            </div>
        </> 
    );
}