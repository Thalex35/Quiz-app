

export default function StartScreen({onStartQuiz}) {
    return(
        <div>
            <h1>Quiz App</h1>
            <p>Test your web Developement knowledge</p>
            <p>10 Questions</p>
            <button onClick={onStartQuiz}>Start Quiz</button>
        </div>
    )       
}