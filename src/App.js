import React from "react";

import StartScreen from "./components/StartScreen";
import GameScreen from "./components/GameScreen";

export default function App(){

    const [visible, setVisible] = React.useState(true);

    return (
        <>
        {visible ? <StartScreen setVisible={setVisible} /> : <GameScreen />}
        </>
    );
}