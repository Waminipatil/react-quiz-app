import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import quizImg from "../../../assets/quiz-img.jpg";
import SignUp from "../SignUpForm/SignUp";
import Button from "../../UI/Button/Button";

const Layout = () => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <Button onClick={takeQuizHandler}>Take Quiz</Button>
        </div>
        <div className="col-md-7">
          <img className="img-fluid w-100" src={quizImg} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
