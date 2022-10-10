import React, { useState } from "react";
import ActiveQuiz from "../Quiz/ActiveQuiz/ActiveQuiz";
import classes from "./Home.module.css";
import Button from "../UI/Button/Button";
import "bootstrap/dist/css/bootstrap.css";

const questions = [
  {
    questionNumber: 1,
    questionText: "What is the capital of India?",
    answerOptions: [
      { key: 1, answerText: "Mumbai", isCorrect: false },
      { key: 2, answerText: "Kolkata", isCorrect: false },
      { key: 3, answerText: "Delhi", isCorrect: true },
      { key: 4, answerText: "Chennai", isCorrect: false },
    ],
  },
  {
    questionNumber: 2,
    questionText: "Who is CEO of Tesla?",
    answerOptions: [
      { key: 1, answerText: "Jeff Bezos", isCorrect: false },
      { key: 2, answerText: "Elon Musk", isCorrect: true },
      { key: 3, answerText: "Bill Gates", isCorrect: false },
      { key: 4, answerText: "Tony Stark", isCorrect: false },
    ],
  },
  {
    questionNumber: 3,
    questionText: "The iPhone was created by which company?",
    answerOptions: [
      { key: 1, answerText: "Apple", isCorrect: true },
      { key: 2, answerText: "Intel", isCorrect: false },
      { key: 3, answerText: "Amazon", isCorrect: false },
      { key: 4, answerText: "Microsoft", isCorrect: false },
    ],
  },
  {
    questionNumber: 4,
    questionText: "How many Harry Potter books are there?",
    answerOptions: [
      { key: 1, answerText: "1", isCorrect: false },
      { key: 2, answerText: "4", isCorrect: false },
      { key: 3, answerText: "6", isCorrect: false },
      { key: 4, answerText: "7", isCorrect: true },
    ],
  },
];

const Home = () => {
  const [questionsList, setQuestionsList] = useState(questions);
  const [takeQuiz, setTakeQuiz] = useState(false);

  const takeQuizHandler = () => {
    setTakeQuiz(true);
  };

  return (
    <>
      {takeQuiz ? (
        <div className={classes.quizWrapper}>
          <ActiveQuiz items={questionsList} />
        </div>
      ) : (
        <div className={classes.wrapper}>
          <h1>ReactJS Quiz</h1>
          <Button onClick={takeQuizHandler}>Take Quiz</Button>
        </div>
      )}
    </>
  );
};

export default Home;
