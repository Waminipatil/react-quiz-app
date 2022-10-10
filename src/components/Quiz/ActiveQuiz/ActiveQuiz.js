import React, { useState } from "react";
import AnswerList from "../AnswerList/AnswerList";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import classes from "./ActiveQuiz.module.css";
import EndQuiz from "../EndQuiz/EndQuiz";

const ActiveQuiz = (props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [endQuiz, setEndQuiz] = useState(false);
  let totalQues = props.items.length;

  const nextQues = () => {
    setCurrentQuestion(currentQuestion + 1);
    const wrongBtn = document.querySelector("button.bg-danger");
    wrongBtn?.classList.remove("bg-danger");
    const rightBtn = document.querySelector("button.bg-success");
    rightBtn?.classList.remove("bg-success");
  };

  const submitAnsHandler = (point) => {
    setScore(score + point);
  };
  const scoreBoardHandler = () => {
    setEndQuiz(true);
    console.log("FINAL SCORE:", score);
  };

  return (
    <>
      {!endQuiz && (
        <Card className={classes.quizCard}>
          <div className={classes.question}>
            <h5>{props.items[currentQuestion].questionText}</h5>
            <h5 className={classes.quesNumber}>
              {props.items[currentQuestion].questionNumber} / {totalQues}
            </h5>
          </div>

          <AnswerList
            options={props.items[currentQuestion].answerOptions}
            onSubmitAns={submitAnsHandler}
          />
          {currentQuestion + 1 !== props.items.length ? (
            <Button onClick={nextQues}>Next</Button>
          ) : (
            <Button onClick={scoreBoardHandler}>Finish Quiz</Button>
          )}
        </Card>
      )}

      {endQuiz && (
        <Card className={classes.end}>
          {endQuiz && <EndQuiz finalScore={score} />}
        </Card>
      )}
    </>
  );
};

export default ActiveQuiz;
