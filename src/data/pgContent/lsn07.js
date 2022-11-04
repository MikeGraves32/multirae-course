import React from "react";
import LsnPage01 from "../../pages/Lesson07/01_lsnMenu";
import LsnPage02 from "../../pages/Lesson07/02_introSplash";
import LsnPage03 from "../../pages/Lesson07/03_objectives";
import LsnPage04 from "../../pages/Lesson07/04_fastStartUp";
import LsnPage05 from "../../pages/Lesson07/05_startUpProcedures";
import LsnPage06 from "../../pages/Lesson07/06_calibrationTypes";
import LsnPage07 from "../../pages/Lesson07/07_calibrationSubMenu";
import LsnPage08 from "../../pages/Lesson07/08_freshAirCalib";
import LsnPage09 from "../../pages/Lesson07/09_singleSensorSpanCalib";
import LsnPage10 from "../../pages/Lesson07/10_bumpTest";
import LsnPage11 from "../../pages/Lesson07/11_bumpTestProcess";
import LsnPage12 from "../../pages/Lesson07/12_bumpTestSteps";
import LsnPage13 from "../../pages/Lesson07/13_checkOnLearning";

const LsnContent01 = [
  { id: 0, lessonName: "Lesson07", component: <LsnPage01 />, isVisible: true },

  { id: 1, lessonName: "Lesson07", component: <LsnPage02 />, isVisible: false },

  { id: 2, lessonName: "Lesson07", component: <LsnPage03 />, isVisible: false },

  { id: 3, lessonName: "Lesson07", component: <LsnPage04 />, isVisible: false },

  { id: 4, lessonName: "Lesson07", component: <LsnPage05 />, isVisible: false },

  { id: 5, lessonName: "Lesson07", component: <LsnPage06 />, isVisible: false },

  { id: 6, lessonName: "Lesson07", component: <LsnPage07 />, isVisible: false },

  { id: 7, lessonName: "Lesson07", component: <LsnPage08 />, isVisible: false },

  { id: 8, lessonName: "Lesson07", component: <LsnPage09 />, isVisible: false },

  {
    id: 9,
    lessonName: "Lesson07",
    component: <LsnPage10 />,
    isVisible: false,
  },

  {
    id: 10,
    lessonName: "Lesson07",
    component: <LsnPage11 />,
    isVisible: false,
  },

  {
    id: 11,
    lessonName: "Lesson07",
    component: <LsnPage12 />,
    isVisible: false,
  },

  {
    id: 12,
    lessonName: "Lesson07",
    component: <LsnPage13 />,
    isVisible: false,
  },
];

export default LsnContent01;
