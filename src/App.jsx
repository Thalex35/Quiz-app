import { useState } from "react";
import StartScreen from "./components/Startscreen";

export default function App() {

    const [ isStarted, setIsStarted ] = useState(false);

    const handleStartQuiz = () => {
        setIsStarted(true);
    }

    return (
        <>
            {!isStarted ? ( <StartScreen onStartQuiz={handleStartQuiz} />) : <h1>Quiz Started</h1>}
        </>
        
    )
}

