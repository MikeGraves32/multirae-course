import { dividerClasses } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import QuizStart from "./QuizStart";

const Question = ({
  data,
  onAnswerUpdate,
  numberOfQuestions,
  activeQuestion,
  onSetActiveQuestion,
  onSetStep,
}) => {
  const [selected, setSelected] = useState("");
  const [error, setError] = useState("");
  const radiosWrapper = useRef();

  useEffect(() => {
    const findCheckedInput =
      radiosWrapper.current.querySelector("input:checked");
    if (findCheckedInput) {
      findCheckedInput.checked = false;
    }
  }, [data]);

  const changeHandler = (e) => {
    setSelected(e.target.value);
    if (error) {
      setError("");
    }
  };

  const nextClickHandler = (e) => {
    if (selected === "") {
      return setError("Please select an option!");
    }
    onAnswerUpdate((prevState) => [
      ...prevState,
      { q: data.question, a: selected },
    ]);
    setSelected("");
    if (activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    } else {
      onSetStep(3);
    }
  };

  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <div className="row">
            <div className="col-4">
              <h3 className="questionHeader">
                {data.id}. {data.question}
              </h3>
            </div>
            <div className="col-8">
              <div className="control" ref={radiosWrapper}>
                {data.choices.map((choice, i) => (
                  <>
                    <div>
                      <img src={data.images[i]} alt="" />
                    </div>
                    <label className="radio has-background-light">
                      <input
                        type="radio"
                        name="answer"
                        value={choice}
                        onChange={changeHandler}
                      />
                      {choice}
                    </label>
                  </>
                ))}
              </div>
            </div>
            {error && <div className="has-text-danger">{error}</div>}
          </div>
          <button
            className="button is-link is-medium is-fullwidth mt-4"
            onClick={nextClickHandler}>
            Next Question
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
