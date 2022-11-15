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
     const [lsnComponentPages, setLsnComponentPages] = useState(
          lsn.lsnComponent
     ); // the component with lesson pages
     // const [compVisible, setCompVisible] = useState(
     //   arrCourseLsn[lsnId].lsnComponent[Number(pgComponentId)].isVisible
     // );
     const [pgAudioMedia, setPgAudioMedia] = useState(
          lsnComponentPages[Number(pgComponentId)].setaudio
     );
     const [pgCount, setPgCount] = useState(Number(lsnComponentPages.length));
     const lsnCount = useRef(arrCourseLsn.length);
     const currLsn = useRef(lsn);
     const currCompNum = useRef(0);
     const currLsnPage = useRef(0);
     const currLessonId = useRef(0);
     const numOfPages = useRef(0);
     const currLsnTitle = useRef(lsnName);
     const currLsnTitleNum = useRef(lsnNum);
     const currLsnComponent = useRef(lsnComponentPages);
     const courseTitle = "Gas Monitor And TIC Vapor Detector (Multi-RAE)";
     const currAudioMedia = useRef();
     // const currVisibility = useRef(compVisible);
     useEffect(() => {
          currLsn.current = lsn;
          currLsnTitle.current = lsnName;
          currLsnTitleNum.current = lsnNum;
          currAudioMedia.current = pgAudioMedia;
          console.log(
               "effect lsn " +
                    lsn.lsnTitle +
                    "pgAudioMedia" +
                    pgAudioMedia +
                    " currLsnTitle.current " +
                    currLsnTitle.current +
                    " lsnName " +
                    lsn +
                    " currLsnTitleNum.current " +
                    currLsnTitleNum.current +
                    " lsnNum " +
                    lsn.lsnNum
          );
     }, [lsn, lsnNum, lsnName]);

     useEffect(() => {
          currAudioMedia.current = pgAudioMedia;
          console.log("pgAudioMedia " + pgAudioMedia);
     }, [pgAudioMedia]);

     useEffect(() => {
          numOfPages.current = pgCount;
          console.log(
               "effect pgCount " +
                    pgCount +
                    " numOfPages.current " +
                    numOfPages.current
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

     // useEffect(() => {
     //   currVisibility.current = compVisible;
     // }, [compVisible]);

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

     const backClick = (pageComponentId, lessonId) => {
          if (pageComponentId > 0) {
               arrCourseLsn[Number(lessonId)].lsnComponent[
                    currCompNum.current
               ].isVisible = false;
               arrCourseLsn[Number(lessonId)].lsnComponent[
                    Number(currCompNum.current - 1)
               ].isVisible = true;

               setPgComponentId(currCompNum.current - 1);
               setPgAudioMedia(
                    lsnComponentPages[Number(currCompNum.current - 1)].setaudio
               );
               // setCompVisible(
               //   lsnComponentPages[Number(currCompNum.current - 1)].isVisible
               // );
               console.log("Don't change lessons");
               console.log("back numOfPages " + numOfPages.current);
          } else if (pageComponentId === 0 && lessonId > 0) {
               console.log(
                    "go back a lesson" +
                         lessonId +
                         " numOfPages " +
                         numOfPages.current
               );
               arrCourseLsn[Number(lessonId)].lsnComponent[
                    currCompNum.current
               ].isVisible = false;

               setLsnId(Number(lessonId) - 1);
               setLsn(arrCourseLsn[Number(lessonId - 1)]);
               setLsnName(arrCourseLsn[(Number(lessonId) - 1).lsnTitle]);
               setLsnNum(arrCourseLsn[(Number(lessonId) - 1).lsnTitleNum]);
               setLsnComponentPages(
                    arrCourseLsn[Number(lessonId) - 1].lsnComponent
               );
               setPgCount(
                    arrCourseLsn[Number(lessonId) - 1].lsnComponent.length
               );
               // // setCompVisible(lsnComponentPages[Number(pgComponentId) - 1].isVisible);
               // arrCourseLsn[Number(lessonId)].lsnComponent[currCompNum].isVisible = true;

               setPgComponentId(
                    Number(
                         arrCourseLsn[Number(lessonId) - 1].lsnComponent.length
                    ) - 1
               );
               arrCourseLsn[Number(lessonId) - 1].lsnComponent[
                    Number(
                         arrCourseLsn[Number(lessonId) - 1].lsnComponent.length
                    ) - 1
               ].isVisible = true;

               console.log(
                    "currLsnTitleNum " +
                         currLsnTitleNum.current +
                         " pageComponentId " +
                         pageComponentId +
                         " pgComponentId " +
                         pgComponentId +
                         " numOfPages.current " +
                         numOfPages.current +
                         " pgCount " +
                         pgCount
               );
               setPgAudioMedia(
                    lsnComponentPages[Number(numOfPages.current - 1)].setaudio
               );
          }
          // setCompVisible(currVisibility.current);
     };

     const nextClick = (pageComponentId, lessonId) => {
          // console.log(
          //   "pgComponentId, " +
          //     (Number(pageComponentId) + 1) +
          //     " lessonId, " +
          //     lessonId +
          //     " lsnId, " +
          //     lsnId +
          //     " next lsnId, " +
          //     (Number(lessonId) + 1) +
          //     " currLessonId " +
          //     currLessonId.current +
          //     " currLsnTitleNum " +
          //     lsnNum +
          //     " currLsnName " +
          //     lsnName
          // );
          if (Number(pageComponentId) + 1 < Number(numOfPages.current)) {
               arrCourseLsn[lsnId].lsnComponent[
                    currCompNum.current
               ].isVisible = false;
               arrCourseLsn[lsnId].lsnComponent[
                    currCompNum.current + 1
               ].isVisible = true;
               setPgComponentId(Number(currCompNum.current + 1));
               setPgAudioMedia(
                    lsnComponentPages[Number(currCompNum.current + 1)].setaudio
               );

               // setCompVisible(
               //   lsnComponentPages[Number(currCompNum.current + 1)].isVisible
               // );
               // setPgAudioMedia(
               //   arrCourseLsn[Number(currCompNum.current + 1)].lsnComponent[
               //     pgComponentId
               //   ].setaudio
               // );
               // console.log(
               //   "next numOfPages " +
               //     (Number(pgComponentId) + 1) +
               //     " of " +
               //     numOfPages.current
               // );
          } else if (
               Number(pageComponentId) + 1 === Number(numOfPages.current) &&
               lessonId !== Number(lsnCount.current) - 1
          ) {
               arrCourseLsn[Number(lessonId)].lsnComponent[
                    currCompNum.current
               ].isVisible = false;
               arrCourseLsn[
                    Number(lessonId) + 1
               ].lsnComponent[0].isVisible = true;
               // console.log("wait " + pgCount + ", numOfPages" + numOfPages.current);
               setLsnId(Number(lessonId) + 1);
               setLsn(arrCourseLsn[Number(lessonId) + 1]);
               setLsnName(arrCourseLsn[(Number(lessonId) + 1).lsnTitle]);
               setLsnNum(arrCourseLsn[(Number(lessonId) + 1).lsnTitleNum]);
               setLsnComponentPages(
                    arrCourseLsn[Number(lessonId) + 1].lsnComponent
               );
               // setPgAudioMedia(
               //   arrCourseLsn[Number(lessonId) + 1].lsnComponent[Number(pageComponentId)]
               //     .setaudio
               // );
               setPgComponentId(0);
               // setLsn(arrCourseLsn[Number(lessonId + 1)]);
               setPgCount(
                    Number(
                         arrCourseLsn[Number(lessonId) + 1].lsnComponent.length
                    )
               );

               // console.log(
               //   "pgComponentId, " +
               //     (Number(pageComponentId) + 1) +
               //     " lessonId, " +
               //     lessonId +
               //     " lsnId, " +
               //     lsnId +
               //     " next lsnId, " +
               //     (Number(lessonId) + 1) +
               //     " currLessonId " +
               //     currLessonId.current +
               //     " currLsnTitleNum " +
               //     lsnNum +
               //     " currLsnName " +
               //     lsnName
               // );
               setPgAudioMedia(
                    lsnComponentPages[Number(pageComponentId) + 1].setaudio
               );

               // setCompVisible(lsnComponentPages[Number(pgComponentId) + 1].isVisible);
               // console.log(
               //   "Number(lsnComponentPages.length) " +
               //     Number(lsnComponentPages.length) +
               //     " pgCount " +
               //     pgCount +
               //     " currLsnTitleNum " +
               //     currLsnTitleNum.current
               // );
          }
          // arrCourseLsn[lsnId].lsnComponent[pgComponentId].isVisible = true;
          console.log(
               "visibility " +
                    arrCourseLsn[lsnId].lsnComponent[pgComponentId].isVisible
          );
          // setCompVisible(currVisibility.current);
     };

     return (
          <section id='component-section'>
               <div className='pgContentHeader'>
                    {Number(pgComponentId) !== 0 && (
                         <div>
                              <row className='col-12'>
                                   <div className='courseHdr'>
                                        <p>{courseTitle}</p>
                                   </div>
                              </row>
                         </div>
                    )}
               </div>
               <div className='pgLsnHeader'>
                    {Number(pgComponentId) !== 0 && (
                         <div>
                              <row className='col-12'>
                                   <div className='lsnHdr'>
                                        <p>
                                             Lesson {lsnId}: {lsn.lsnTitle}
                                        </p>
                                   </div>
                              </row>
                         </div>
                    )}
               </div>
               {/* {pgComponentId === id && component} */}
               <div id='component-container' className='row main-row col-12'>
                    {lsnComponentPages.map(({ id, component, isVisible }) => (
                         <div
                              className={
                                   "component-wrapper-visible-" + isVisible
                              }
                         >
                              {pgComponentId === id && (
                                   <div
                                        id={"component-container-" + id}
                                        className={"component-show"}
                                   >
                                        <div>{component}</div>
                                   </div>
                              )}
                         </div>
                    ))}
               </div>
               <div className='courseFooter'>
                    <footer className='row'>
                         <div className='footer-nav'>
                              <div className='footer-logo'>
                                   <img src={LogoImg} alt='L2 Defense Logo' />
                                   <img
                                        src={FooterImg}
                                        alt='Chemical Hazmat Team'
                                   />
                              </div>
                              <div className='col-12'>
                                   {pgAudioMedia !== null && (
                                        <div className='mediaPlayer'>
                                             <PgAudio
                                                  mediaFile={pgAudioMedia}
                                             />
                                        </div>
                                   )}
                              </div>
                              {/* <div className="footer-pgCount">
              <p>
                {Number(pgComponentId) + 1} of {pgCount}
              </p>
            </div> */}
                              <div className='btnPrev col-1'>
                                   <Button
                                        className='btn btn-primary btn-sm btn-prev'
                                        onClick={() =>
                                             backClick(pgComponentId, lsnId)
                                        }
                                   >
                                        Back
                                   </Button>
                              </div>
                              <div className='btnNext col-1'>
                                   <Button
                                        className='btn btn-primary btn-sm btn-next'
                                        onClick={() =>
                                             nextClick(pgComponentId, lsnId)
                                        }
                                   >
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
