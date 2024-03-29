import React from "react";
import LsnPage01 from "../../pages/Novice/Lesson05/01_lsnMenu";
import LsnPage02 from "../../pages/Novice/Lesson05/02_lsnSplash";
import LsnPage03 from "../../pages/Novice/Lesson05/03_objectives";
import LsnPage04 from "../../pages/Novice/Lesson05/04_gasMonitorDetectorComponents_top";
import LsnPage05 from "../../pages/Novice/Lesson05/05_gasMonitorDetectorComponents_btm";
import LsnPage06 from "../../pages/Novice/Lesson05/06_gasMonitorCalibrationKit";
import LsnPage07 from "../../pages/Novice/Lesson05/07_tlcVaporCalibrationKit";
import LsnPage08 from "../../pages/Novice/Lesson05/08_checkOnLearning";

import audio_01 from "../../assets/media/novice/L5-NC_audio/01_lsnMenu.mp3";
import audio_02 from "../../assets/media/novice/L5-NC_audio/02_lsnSplash.mp3";
import audio_03 from "../../assets/media/novice/L5-NC_audio/03_objectives.mp3";
import audio_04 from "../../assets/media/novice/L5-NC_audio/04_gasMonitorDetectorComponents_top_01.mp3";
import audio_05 from "../../assets/media/novice/L5-NC_audio/05_gasMonitorDetectorComponents_btm_01.mp3";
import audio_06 from "../../assets/media/novice/L5-NC_audio/06_gasMonitorCalibrationKit_01.mp3";
import audio_07 from "../../assets/media/novice/L5-NC_audio/07_tlcVaporCalibrationKit.mp3";
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
          setaudio: null,
          isVisible: false,
     },
];

export default LsnContent05;
