import React from "react";
import LsnPage01 from "../../pages/Novice/Lesson02/01_lsnMenu";
import LsnPage02 from "../../pages/Novice/Lesson02/02_lsnSplash";
import LsnPage03 from "../../pages/Novice/Lesson02/03_objectives";
import LsnPage04 from "../../pages/Novice/Lesson02/04_configMultiRae";
import LsnPage05 from "../../pages/Novice/Lesson02/05_sensorLEL";
import LsnPage06 from "../../pages/Novice/Lesson02/06_sensorSO2";
import LsnPage07 from "../../pages/Novice/Lesson02/07_sensorO2";
import LsnPage08 from "../../pages/Novice/Lesson02/08_sensorCl2";
import LsnPage09 from "../../pages/Novice/Lesson02/09_sensorPID";
import LsnPage10 from "../../pages/Novice/Lesson02/10_checkOnLearning";

import audio_01 from "../../assets/media/novice/L2-NC_audio/01_lsnMenu.mp3";
import audio_02 from "../../assets/media/novice/L2-NC_audio/02_lsnSplash.mp3";
import audio_03 from "../../assets/media/novice/L2-NC_audio/03_objectives.mp3";
import audio_04 from "../../assets/media/novice/L2-NC_audio/04_configMultiRae.mp3";

const LsnContent02 = [
  {
    id: 0,
    lessonName: "Lesson02",
    component: <LsnPage01 />,
    setaudio: audio_01,
    isVisible: true,
  },

  {
    id: 1,
    lessonName: "Lesson02",
    component: <LsnPage02 />,
    setaudio: audio_02,
    isVisible: false,
  },

  {
    id: 2,
    lessonName: "Lesson02",
    component: <LsnPage03 />,
    setaudio: audio_03,
    isVisible: false,
  },

  {
    id: 3,
    lessonName: "Lesson02",
    component: <LsnPage04 />,
    setaudio: audio_04,
    isVisible: false,
  },

  {
    id: 4,
    lessonName: "Lesson02",
    component: <LsnPage05 />,
    setaudio: null,
    isVisible: false,
  },

  {
    id: 5,
    lessonName: "Lesson02",
    component: <LsnPage06 />,
    setaudio: null,
    isVisible: false,
  },

  {
    id: 6,
    lessonName: "Lesson02",
    component: <LsnPage07 />,
    setaudio: null,
    isVisible: false,
  },

  {
    id: 7,
    lessonName: "Lesson02",
    component: <LsnPage08 />,
    setaudio: null,
    isVisible: false,
  },

  {
    id: 8,
    lessonName: "Lesson02",
    component: <LsnPage09 />,
    setaudio: null,
    isVisible: false,
  },

  {
    id: 9,
    lessonName: "Lesson02",
    component: <LsnPage10 />,
    setaudio: null,
    isVisible: false,
  },
];

export default LsnContent02;
