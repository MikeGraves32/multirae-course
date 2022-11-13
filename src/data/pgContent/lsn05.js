import React from "react";
import LsnPage01 from "../../pages/Novice/Lesson05/01_lsnMenu";
import LsnPage02 from "../../pages/Novice/Lesson05/02_lsnSplash";
import LsnPage03 from "../../pages/Novice/Lesson05/03_objectives";
import LsnPage04 from "../../pages/Novice/Lesson05/04_controlIndicators";
import LsnPage05 from "../../pages/Novice/Lesson05/05_userInterface01";
import LsnPage06 from "../../pages/Novice/Lesson05/05_userInterface02";
import LsnPage07 from "../../pages/Novice/Lesson05/06_displayFeatures";
import LsnPage08 from "../../pages/Novice/Lesson05/07_keysInterface01";
import LsnPage09 from "../../pages/Novice/Lesson05/07_keysInterface02";
import LsnPage10 from "../../pages/Novice/Lesson05/08_turningOnMultirae";
import LsnPage11 from "../../pages/Novice/Lesson05/09_turningOffMultirae";
import LsnPage12 from "../../pages/Novice/Lesson05/10_testingAlarmIndicators";
import LsnPage13 from "../../pages/Novice/Lesson05/11_checkOnLearning";

import audio_01 from "../../assets/media/novice/L5-NC_audio/01_lsnMenu.mp3";
import audio_02 from "../../assets/media/novice/L5-NC_audio/02_lsnSplash.mp3";
import audio_03 from "../../assets/media/novice/L5-NC_audio/03_objectives.mp3";
import audio_04 from "../../assets/media/novice/L5-NC_audio/04_controlIndicators.mp3";
import audio_05 from "../../assets/media/novice/L5-NC_audio/05_userInterface01.mp3";
import audio_06 from "../../assets/media/novice/L5-NC_audio/05_userInterface02.mp3";
import audio_07 from "../../assets/media/novice/L5-NC_audio/06_displayFeatures.mp3";
import audio_08 from "../../assets/media/novice/L5-NC_audio/07_keysInterface01.mp3";
import audio_09 from "../../assets/media/novice/L5-NC_audio/07_keysInterface02.mp3";
import audio_10 from "../../assets/media/novice/L5-NC_audio/08_turningOnMultirae.mp3";
import audio_11 from "../../assets/media/novice/L5-NC_audio/09_turningOffMultirae.mp3";
import audio_12 from "../../assets/media/novice/L5-NC_audio/10_testingAlarmIndicators.mp3";

const LsnContent05 = [
  {
    id: 0,
    lessonName: "Lesson05",
    component: <LsnPage01 />,
    setaudio: audio_01,
    isVisible: true,
  },

  {
    id: 1,
    lessonName: "Lesson05",
    component: <LsnPage02 />,
    setaudio: audio_02,
    isVisible: false,
  },

  {
    id: 2,
    lessonName: "Lesson05",
    component: <LsnPage03 />,
    setaudio: audio_03,
    isVisible: false,
  },

  {
    id: 3,
    lessonName: "Lesson05",
    component: <LsnPage04 />,
    setaudio: audio_04,
    isVisible: false,
  },

  {
    id: 4,
    lessonName: "Lesson05",
    component: <LsnPage05 />,
    setaudio: audio_05,
    isVisible: false,
  },

  {
    id: 5,
    lessonName: "Lesson05",
    component: <LsnPage06 />,
    setaudio: audio_06,
    isVisible: false,
  },

  {
    id: 6,
    lessonName: "Lesson05",
    component: <LsnPage07 />,
    setaudio: audio_07,
    isVisible: false,
  },

  {
    id: 7,
    lessonName: "Lesson05",
    component: <LsnPage08 />,
    setaudio: audio_08,
    isVisible: false,
  },

  {
    id: 8,
    lessonName: "Lesson05",
    component: <LsnPage09 />,
    setaudio: audio_09,
    isVisible: false,
  },

  {
    id: 9,
    lessonName: "Lesson05",
    component: <LsnPage10 />,
    setaudio: audio_10,
    isVisible: false,
  },

  {
    id: 10,
    essonName: "Lesson05",
    component: <LsnPage11 />,
    setaudio: audio_11,
    isVisible: false,
  },

  {
    id: 11,
    essonName: "Lesson05",
    component: <LsnPage12 />,
    setaudio: audio_12,
    isVisible: false,
  },

  {
    id: 12,
    essonName: "Lesson05",
    component: <LsnPage13 />,
    setaudio: null,
    isVisible: false,
  },
];

export default LsnContent05;
