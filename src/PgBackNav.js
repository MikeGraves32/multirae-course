import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { isTemplateExpression } from "typescript";
import Button from "react-bootstrap/Button";
import LsnContent00 from "./data/pgContent/lsn00";
import LsnContent01 from "./data/pgContent/lsn01";
import LsnContent02 from "./data/pgContent/lsn02";

const courseLsn = [
  {
    lsnId: 0,
    lessonNum: "Lesson00",
    lesson: LsnContent00,
  },
  {
    lsnId: 1,
    lessonNum: "Lesson01",
    lesson: LsnContent01,
  },
  {
    lsnId: 2,
    lessonNum: "Lesson02",
    lesson: LsnContent02,
  },
];

const PgBackNav = () => {
  const [currentPgComponent, setCurrentPgComponent] = useState(0);
  const [currentLsnId, setCurrentLsnId] = useState(courseLsn[0].lsnId);
  const [pgComponents, setPgComponents] = useState(
    courseLsn[currentLsnId].lesson
  );

  //   useEffect(()=>{

  //   }
  //   )
  const getPageNav = (pgComponentNum, lsnNum) => {
    setCurrentPgComponent(pgComponentNum);
  };

  const backClick = (id, lessonId) => {
    console.log("outside here ");
  };

  return backClick(currentPgComponent, currentLsnId);
};

export default PgBackNav;
