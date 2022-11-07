import React from "react";
import LsnPage01 from "../../pages/Novice/Lesson03/01_lsnMenu";
import LsnPage02 from "../../pages/Novice/Lesson03/02_lsnSplash";
import LsnPage03 from "../../pages/Novice/Lesson03/03_objectives";
import LsnPage04 from "../../pages/Novice/Lesson03/04_configMultiRae";
import LsnPage05 from "../../pages/Novice/Lesson03/05_sensorNH3";
import LsnPage06 from "../../pages/Novice/Lesson03/06_sensorHCN";
import LsnPage07 from "../../pages/Novice/Lesson03/07_sensorH2S_CO";
import LsnPage08 from "../../pages/Novice/Lesson03/08_checkOnLearning";

const LsnContent03 = [
  { id: 0, lessonName: "Lesson03", component: <LsnPage01 />, isVisible: true },

  { id: 1, lessonName: "Lesson03", component: <LsnPage02 />, isVisible: false },

  { id: 2, lessonName: "Lesson03", component: <LsnPage03 />, isVisible: false },

  { id: 3, lessonName: "Lesson03", component: <LsnPage04 />, isVisible: false },

  { id: 4, lessonName: "Lesson03", component: <LsnPage05 />, isVisible: false },

  { id: 5, lessonName: "Lesson03", component: <LsnPage06 />, isVisible: false },

  { id: 6, lessonName: "Lesson03", component: <LsnPage07 />, isVisible: false },

  { id: 7, lessonName: "Lesson03", component: <LsnPage08 />, isVisible: false },
];

export default LsnContent03;
