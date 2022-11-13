import React from "react";
import LsnPage01 from "../../pages/Novice/Lesson03/01_lsnMenu";
import LsnPage02 from "../../pages/Novice/Lesson03/02_lsnSplash";
import LsnPage03 from "../../pages/Novice/Lesson03/03_objectives";
import LsnPage04 from "../../pages/Novice/Lesson03/04_configMultiRae";
import LsnPage05 from "../../pages/Novice/Lesson03/05_sensorNH3";
import LsnPage06 from "../../pages/Novice/Lesson03/06_sensorHCN";
import LsnPage07 from "../../pages/Novice/Lesson03/07_sensorH2S_CO";
import LsnPage08 from "../../pages/Novice/Lesson03/08_checkOnLearning";

import audio_01 from "../../assets/media/novice/L3-NC_audio/01_lsnMenu.mp3";
import audio_02 from "../../assets/media/novice/L3-NC_audio/02_lsnSplash.mp3";
import audio_03 from "../../assets/media/novice/L3-NC_audio/03_objectives.mp3";
import audio_04 from "../../assets/media/novice/L3-NC_audio/04_configMultiRae.mp3";

const LsnContent03 = [
  {
    id: 0,
    lessonName: "Lesson03",
    component: <LsnPage01 />,
    setaudio: audio_01,
    isVisible: true,
  },

  {
    id: 1,
    lessonName: "Lesson03",
    component: <LsnPage02 />,
    setaudio: audio_02,
    isVisible: false,
  },

  {
    id: 2,
    lessonName: "Lesson03",
    component: <LsnPage03 />,
    setaudio: audio_03,
    isVisible: false,
  },

  {
    id: 3,
    lessonName: "Lesson03",
    component: <LsnPage04 />,
    setaudio: audio_04,
    isVisible: false,
  },

  {
    id: 4,
    lessonName: "Lesson03",
    component: <LsnPage05 />,
    setaudio: null,
    isVisible: false,
  },

  {
    id: 5,
    lessonName: "Lesson03",
    component: <LsnPage06 />,
    setaudio: null,
    isVisible: false,
  },

  {
    id: 6,
    lessonName: "Lesson03",
    component: <LsnPage07 />,
    setaudio: null,
    isVisible: false,
  },

  {
    id: 7,
    lessonName: "Lesson03",
    component: <LsnPage08 />,
    setaudio: null,
    isVisible: false,
  },
];

export default LsnContent03;
