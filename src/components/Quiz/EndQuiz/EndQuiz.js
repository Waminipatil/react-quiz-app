import React from "react";

const EndQuiz = (props) => {
  return (
    <div>
      <h1>Thank You!!</h1>
      <h3>Your Score is {props.finalScore}</h3>
    </div>
  );
};

export default EndQuiz;
