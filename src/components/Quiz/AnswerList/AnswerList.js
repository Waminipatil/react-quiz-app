import React, { useEffect, useState } from "react";
import classes from "./AnswerList.module.css";
import Button from "../../UI/Button/Button";

const AnswerList = (props) => {
  const [isSelected, setIsSelected] = useState(false);
  const optionSelectHandler = () => {
    setIsSelected(true);
  };

  useEffect(() => {
    setIsSelected(false);
  }, [props.options]);

  const checkAnswer = (e, isCorrect) => {
    if (isCorrect === true) {
      e.target.classList.add("bg-success");
      props.onSubmitAns(1);
    } else {
      e.target.classList.add("bg-danger");
      props.onSubmitAns(0);
    }
  };

  return (
    <ul
      className={`${classes["AnswersList"]} ${
        isSelected === true && classes["disabled"]
      }`}
      onClick={optionSelectHandler}
    >
      {props.options.map((item) => {
        return (
          <Button
            key={item.key}
            onClick={(event) => checkAnswer(event, item.isCorrect)}
            className={`${classes.button}`}
          >
            {item.answerText}
          </Button>
        );
      })}
    </ul>
  );
};

export default AnswerList;
