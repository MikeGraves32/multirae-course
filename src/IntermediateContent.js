import React, { useState, useEffect, useRef } from "react";
import { Container, Row } from "react-bootstrap";
import { isTemplateExpression, setCommentRange } from "typescript";
import Button from "react-bootstrap/Button";
import LsnContent00 from "./data/pgContent/lsn00";
import LsnContent01 from "./data/pgContent/lsn01";
import LsnContent02 from "./data/pgContent/lsn02";
import LsnContent03 from "./data/pgContent/lsn03";
import LsnContent04 from "./data/pgContent/lsn04";
import LsnContent05 from "./data/pgContent/lsn05";
import LsnContent06 from "./data/pgContent/lsn06";
import LsnContent07 from "./data/pgContent/lsn07";
import FooterImg from "./img/gui/chem-characters.png";
import LogoImg from "./img/gui/l2-logo.png";

const arrCourseLsn = [
  {
    courseLsnID: 0,
    lsnTitleNum: "Lesson00",
    lsnComponent: LsnContent00,
  },
  {
    courseLsnID: 1,
    lsnTitleNum: "Lesson01",
    lsnComponent: LsnContent01,
  },
  {
    courseLsnID: 2,
    lsnTitleNum: "Lesson02",
    lsnComponent: LsnContent02,
  },
  {
    courseLsnID: 3,
    lsnTitleNum: "Lesson03",
    lsnComponent: LsnContent03,
  },
  {
    courseLsnID: 4,
    lsnTitleNum: "Lesson04",
    lsnComponent: LsnContent04,
  },
  {
    courseLsnID: 5,
    lsnTitleNum: "Lesson05",
    lsnComponent: LsnContent05,
  },
  {
    courseLsnID: 6,
    lsnTitleNum: "Lesson06",
    lsnComponent: LsnContent06,
  },
  {
    courseLsnID: 7,
    lsnTitleNum: "Lesson07",
    lsnComponent: LsnContent07,
  },
];

const IntermediateContent = () => {
  const [lsnId, setLsnId] = useState(0); // the course lesson number
  const [lsn, setLsn] = useState(arrCourseLsn[lsnId]);
  const [pgComponentId, setPgComponentId] = useState(0); // the curr component ID number
  const [lsnComponentPages, setLsnComponentPages] = useState(lsn.lsnComponent); // the component with lesson pages
  const [pgCount, setPgCount] = useState(Number(lsnComponentPages.length));
  const lsnCount = useRef(arrCourseLsn.length);
  const currLsn = useRef(lsn);
  const currCompNum = useRef(0);
  const currLsnPage = useRef(0);
  const currLessonId = useRef(0);
  const numOfPages = useRef(pgCount);
  const currLsnComponent = useRef(lsnComponentPages);

  useEffect(() => {
    numOfPages.current = pgCount;
  }, [pgCount]);

  useEffect(() => {
    currLsn.current = lsn;
    console.log("effect lsn " + currLsn.current);
  }, [lsn]);
  useEffect(() => {
    currCompNum.current = pgComponentId;
    console.log("effect pgComponentId " + currCompNum.current);
  }, [pgComponentId]);

  useEffect(() => {
    currLessonId.current = lsnId;
    console.log("effect lessonId " + currLessonId.current);
    // setLsnId(currLessonId.current);
  }, [lsnId]);

  useEffect(() => {
    currLsnPage.current =
      arrCourseLsn[Number(currLessonId.current)].lsnComponent;
    console.log("effect lsnComponentPages " + currLsnPage.current);
  }, [lsnComponentPages]);

  const backClick = (pgComponentId, lessonId) => {
    if (pgComponentId > 0) {
      setPgComponentId(currCompNum.current - 1);
      console.log("Don't change lessons");
      console.log("back numOfPages " + numOfPages.current);
    } else if (pgComponentId === 0 && lessonId > 0) {
      console.log(
        "go back a lesson" + lessonId + " numOfPages " + numOfPages.current
      );
      setLsnId(Number(lessonId - 1));
      setLsn(arrCourseLsn[Number(lessonId - 1)]);
      setLsnComponentPages(arrCourseLsn[Number(lessonId - 1)].lsnComponent);
      setPgCount(arrCourseLsn[Number(lessonId - 1)].lsnComponent.length);

      setPgComponentId(
        Number(arrCourseLsn[Number(lessonId - 1)].lsnComponent.length) - 1
      );
    }
  };

  const nextClick = (pgComponentId, lessonId) => {
    console.log(
      "pgComponentId, " +
        Number(pgComponentId + 1) +
        " lessonId, " +
        lessonId +
        " lsnId, " +
        lsnId +
        " next lsnId, " +
        Number(lessonId + 1) +
        " currLessonId " +
        currLessonId.current
    );
    if (Number(pgComponentId + 1) < Number(numOfPages.current)) {
      setPgComponentId(Number(currCompNum.current + 1));

      console.log(
        "next numOfPages " +
          Number(pgComponentId + 1) +
          " of " +
          numOfPages.current
      );
    } else if (
      Number(pgComponentId + 1) === Number(numOfPages.current) &&
      lessonId !== Number(lsnCount.current - 1)
    ) {
      console.log("wait " + pgCount + ", numOfPages" + numOfPages.current);
      setLsnId(Number(lessonId) + 1);
      setLsnComponentPages(arrCourseLsn[Number(lessonId + 1)].lsnComponent);
      setPgComponentId(0);
      // setLsn(arrCourseLsn[Number(lessonId + 1)]);
      // setPgCount(Number(lsnComponentPages.length));
      console.log(
        "Number(lsnComponentPages.length) " + Number(lsnComponentPages.length)
      );
    }
  };

  return (
    <section id="component-section">
      <div id="component-container" className="row main-row">
        {lsnComponentPages.map(({ id, component, isVisible }) => (
          <div id={"component-container-" + id}>
            {pgComponentId === id && component}
          </div>
        ))}
      </div>
      <div className="courseFooter row">
        <footer className="row">
          <div className="footer-nav">
            <img src={LogoImg} alt="L2 Defense Logo" />
            <img src={FooterImg} alt="Chemical Hazmat Team" />
            <div className="btnPrev col-1">
              <Button
                className="btn btn-primary btn-sm btn-prev"
                onClick={() => backClick(pgComponentId, lsnId)}>
                Back
              </Button>
            </div>
            <div className="btnNext col-1">
              <Button
                className="btn btn-primary btn-sm btn-next"
                onClick={() => nextClick(pgComponentId, lsnId)}>
                Next
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default IntermediateContent;
