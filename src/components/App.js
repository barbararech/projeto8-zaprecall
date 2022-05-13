import React from "react";
import './assets/styles/reset.css'
import './assets/styles/style.css';

import StartScreen from "./StartScreen";
import GameScreen from "./GameScreen";

export default function App(){

    const [visible, setVisible] = React.useState(true);

    return (
        <>
        {visible ? <StartScreen setVisible={setVisible} /> : <GameScreen />}
        </>
    );
}
