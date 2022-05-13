import React from "react";

function Question(props){

    const [stage,setStage] = React.useState("1");
    const [classResult, setClassResult] = React.useState("flashcard");
    const [iconResult, seticonResult] = React.useState("play-outline");
    
    function ChangeStage1(className){
        if(className === "wrong"){
            setClassResult("flashcard wrong");
            seticonResult("close-circle");
        }
        if(className === "almost"){
            setClassResult("flashcard almost");
            seticonResult("help-circle");
        }
        if(className === "right"){
            setClassResult("flashcard right");
            seticonResult("checkmark-circle");
        }
        console.log(props.arrayStats)
        // console.log(arrayStats)
        // console.log(setArrayStats)
        console.log(props.setArrayStats)
        props.setArrayStats([...props.arrayStats, className]);
    }

    if(stage === "1"){
        return (
            <>
                <div className={classResult} onClick={()=>setStage("2")}>
                    <h4> Pergunta {props.id+1}</h4>
                    <ion-icon name={iconResult}></ion-icon>
                </div>
            </> 
        )
    }
    if(stage === "2"){
        return (
            <>
                <div className="question">
                    <p> {props.question}</p>
                    <ion-icon  onClick={()=>setStage("3")} name="refresh-outline"></ion-icon>
                </div>
            </> 
        )
    }
    if(stage === "3"){
        const button = [
            {
                className: "wrong",
                text: "Não lembrei"
            },
            {
                className: "almost",
                text: "Quase não lembrei"
            },
            {
                className: "right",
                text: "Zap!"
            },

        ]
        return (
        <>
            <div className="answers" onClick={()=>setStage("1")}>
                <p> {props.answer}</p>
                <div className="buttonsAnswer">
                    {
                        button.map(({text, index, className})=>{
                            return(
                            <button className={className} key={index} onClick={()=> {
                                ChangeStage1(className);
                                }} >
                                {text}
                            </button>)
                        })
                    }
                </div>
            </div>
            
        </> 
        )
    }
}

function RandomQuestions(){
    return Math.random() -0.5;
}

export default function Questions(props){

    // const [arrayStats, setArrayStats] = React.useState([]);

    // Logic
    const items =[
        { question: "O que é JSX?",
          answer:"Uma extensão de linguagem do JavaScript"
        },
        { question: "O React é __",
          answer:"uma biblioteca JavaScript para construção de interfaces"
        },
        { question: "Componentes devem iniciar com __",
          answer:"letra maiúscula"
        },
        { question: " Podemos colocar __ dentro do JSX",
          answer:"expressões"
        },
        { question: "O ReactDOM nos ajuda __",
          answer:"interagindo com a DOM para colocar componentes React na mesma"
        },
        { question: "Usamos o npm para __ ",
          answer:"gerenciar os pacotes necessários e suas dependências"
        },
        { question: "Usamos props para __",
          answer:"passar diferentes informações para componentes"
        },
        { question: "Usamos estado (state) para __ ",
          answer:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
        }
    ]

    const questions = items
        .sort(RandomQuestions)
        .map((item,index)=>(
            <Question key={index} id={index} question={item.question} answer={item.answer} arrayStats={props.arrayStats} setArrayStats={props.setArrayStats} />
            ))
            console.log(props.arrayStats)
            // console.log(arrayStats)
            // console.log(setArrayStats)
            console.log(props.setArrayStats)
    return (
        <>
            {questions}
        </> 
    );
}