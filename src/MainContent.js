import React, { useState, useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import LsnContent00 from "./data/pgContent/lsn00";
import LsnContent01 from "./data/pgContent/lsn01";
import LsnContent02 from "./data/pgContent/lsn02";
import LsnContent03 from "./data/pgContent/lsn03";
import LsnContent04 from "./data/pgContent/lsn04";
import LsnContent05 from "./data/pgContent/lsn05";
import LsnContent06 from "./data/pgContent/lsn06";
import LsnContent07 from "./data/pgContent/lsn07";
import PgAudio from "./components/mediaPlayer/audio";
import FooterImg from "./img/gui/chem-characters.png";
import LogoImg from "./img/gui/l2-logo.png";
// import "react-h5-audio-player/lib/styles.css";
import "./css/components/audioPlayer.css";
import { Container } from "react-bootstrap";

const arrCourseLsn = [
  {
    courseLsnID: 0,
    lsnTitleNum: "Lesson00",
    lsnComponent: LsnContent00,
    lsnTitle: "Introduction",
  },
  {
    courseLsnID: 1,
    lsnTitleNum: "Lesson01",
    lsnComponent: LsnContent01,
    lsnTitle: "Device Comparison",
  },
  {
    courseLsnID: 2,
    lsnTitleNum: "Lesson02",
    lsnComponent: LsnContent02,
    lsnTitle: "Yellow Boot Configuration",
  },
  {
    courseLsnID: 3,
    lsnTitleNum: "Lesson03",
    lsnComponent: LsnContent03,
    lsnTitle: "Black Boot Configuration",
  },
  {
    courseLsnID: 4,
    lsnTitleNum: "Lesson04",
    lsnComponent: LsnContent04,
    lsnTitle: "Capabilities and Limitations",
  },
  {
    courseLsnID: 5,
    lsnTitleNum: "Lesson05",
    lsnComponent: LsnContent05,
    lsnTitle: "Controls and Indicators",
  },
  {
    courseLsnID: 6,
    lsnTitleNum: "Lesson06",
    lsnComponent: LsnContent06,
    lsnTitle: "Components",
  },
  {
    courseLsnID: 7,
    lsnTitleNum: "Lesson07",
    lsnComponent: LsnContent07,
    lsnTitle: "Device Operation",
  },
];

const PgContent = () => {
  const [lsnId, setLsnId] = useState(0); // the course lesson number
  const [lsn, setLsn] = useState(arrCourseLsn[lsnId]);
  const [lsnName, setLsnName] = useState(arrCourseLsn[lsnId].lsnTitle);
  const [lsnNum, setLsnNum] = useState(arrCourseLsn[lsnId].lsnTitleNum);
  const [pgComponentId, setPgComponentId] = useState(0); // the curr component ID number
  const [pgAudioMedia, setPgAudioMedia] = useState(
    arrCourseLsn[lsnId].lsnComponent[pgComponentId].setaudio
  );
  const [lsnComponentPages, setLsnComponentPages] = useState(lsn.lsnComponent); // the component with lesson pages
  const [pgCount, setPgCount] = useState(Number(lsnComponentPages.length));
  const lsnCount = useRef(arrCourseLsn.length);
  const currLsn = useRef(lsn);
  const currCompNum = useRef(0);
  const currLsnPage = useRef(0);
  const currLessonId = useRef(0);
  const numOfPages = useRef(0);
  const currLsnTitle = useRef(lsnName);
  const currLsnTitleNum = useRef(lsnNum);
  const pgAudioFile = "";
  const currLsnComponent = useRef(lsnComponentPages);
  const courseTitle = "Gas Monitor And TIC Vapor Detector (Multi-RAE)";
  const currAudioMedia = useRef();

  useEffect(() => {
    currLsn.current = lsn;
    currLsnTitle.current = lsnName;
    currLsnTitleNum.current = lsnNum;
    currAudioMedia.current = pgAudioMedia;
    console.log(
      "effect lsn " + currLsn.current + "pgAudioMedia" + pgAudioMedia
    );
  }, [lsn, lsnName, lsnNum, pgAudioMedia]);

  useEffect(() => {
    numOfPages.current = pgCount;
    console.log(
      "effect pgCount " + pgCount + " numOfPages.current " + numOfPages.current
    );
  }, [pgCount, lsnComponentPages]);

  useEffect(() => {
    currCompNum.current = pgComponentId;
    console.log("effect pgComponentId " + currCompNum.current);
  }, [pgComponentId]);

  useEffect(() => {
    currLessonId.current = lsnId;
    currLsnTitle.current = lsnName;
    currLsnTitleNum.current = lsnNum;
    console.log("effect lessonId " + currLessonId.current);
    // setLsnId(currLessonId.current);
  }, [lsnId, lsnName, lsnNum]);

  useEffect(() => {
    currLsnPage.current =
      arrCourseLsn[Number(currLessonId.current)].lsnComponent;
    console.log(
      "effect lsnComponentPages " +
        currLsnPage.current +
        "pgAudioMedia" +
        pgAudioMedia
    );
  }, [lsnComponentPages, pgAudioMedia]);

  const backClick = (pgComponentId, lessonId) => {
    if (pgComponentId > 0) {
      setPgComponentId(currCompNum.current - 1);
      console.log("Don't change lessons");
      console.log("back numOfPages " + numOfPages.current);
    } else if (pgComponentId === 0 && lessonId > 0) {
      console.log(
        "go back a lesson" + lessonId + " numOfPages " + numOfPages.current
      );
      setLsnId(Number(lessonId) - 1);
      setLsn(arrCourseLsn[Number(lessonId - 1)]);
      setLsnName(arrCourseLsn[Number(lessonId - 1).lsnTitle]);
      setLsnNum(arrCourseLsn[Number(lessonId - 1).lsnTitleNum]);
      setLsnComponentPages(arrCourseLsn[Number(lessonId) - 1].lsnComponent);
      setPgAudioMedia(
        arrCourseLsn[Number(lessonId) - 1].lsnComponent[pgComponentId].setaudio
      );
      setPgCount(arrCourseLsn[Number(lessonId) - 1].lsnComponent.length);

      setPgComponentId(
        Number(arrCourseLsn[Number(lessonId) - 1].lsnComponent.length) - 1
      );
    }
  };

  const nextClick = (pgComponentId, lessonId) => {
    console.log(
      "pgComponentId, " +
        (Number(pgComponentId) + 1) +
        " lessonId, " +
        lessonId +
        " lsnId, " +
        lsnId +
        " next lsnId, " +
        (Number(lessonId) + 1) +
        " currLessonId " +
        currLessonId.current
    );
    if (Number(pgComponentId) + 1 < Number(numOfPages.current)) {
      setPgComponentId(Number(currCompNum.current + 1));
      setPgAudioMedia(
        arrCourseLsn[Number(currCompNum.current + 1)].lsnComponent[
          pgComponentId
        ].setaudio
      );
      // console.log(
      //   "next numOfPages " +
      //     (Number(pgComponentId) + 1) +
      //     " of " +
      //     numOfPages.current
      // );
    } else if (
      Number(pgComponentId) + 1 === Number(numOfPages.current) &&
      lessonId !== Number(lsnCount.current) - 1
    ) {
      // console.log("wait " + pgCount + ", numOfPages" + numOfPages.current);
      setLsnId(Number(lessonId) + 1);
      setLsn(arrCourseLsn[Number(lessonId) + 1]);
      setLsnName(arrCourseLsn[Number(lessonId + 1).lsnTitle]);
      setLsnNum(arrCourseLsn[Number(lessonId + 1).lsnTitleNum]);
      setLsnComponentPages(arrCourseLsn[Number(lessonId) + 1].lsnComponent);
      setPgAudioMedia(
        arrCourseLsn[Number(lessonId) + 1].lsnComponent[pgComponentId].setaudio
      );
      setPgComponentId(0);
      // setLsn(arrCourseLsn[Number(lessonId + 1)]);
      setPgCount(
        Number(arrCourseLsn[Number(lessonId) + 1].lsnComponent.length)
      );
      console.log(
        "Number(lsnComponentPages.length) " +
          Number(lsnComponentPages.length) +
          " pgCount " +
          pgCount
      );
    }
  };

  return (
    <section id="component-section">
      <div className="pgContentHeader">
        {Number(pgComponentId) !== 0 && (
          <div>
            <row className="col-12">
              <div className="courseHdr">
                <p>{courseTitle}</p>
              </div>
            </row>
          </div>
        )}
        {Number(pgComponentId) !== 0 && (
          <div>
            <row className="col-12">
              <div className="lsnHdr">
                <p>
                  Lesson {lsnId}: {lsnName}
                </p>
              </div>
            </row>
          </div>
        )}
      </div>
      <div id="component-container" className="row main-row col-12">
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

export default PgContent;
