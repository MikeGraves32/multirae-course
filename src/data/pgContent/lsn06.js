import React from "react";
import LsnPage01 from "../../pages/Novice/Lesson06/01_lsnMenu";
import LsnPage02 from "../../pages/Novice/Lesson06/02_lsnSplash";
import LsnPage03 from "../../pages/Novice/Lesson06/03_objectives";
import LsnPage04 from "../../pages/Novice/Lesson06/04_fastStartUp";
import LsnPage05 from "../../pages/Novice/Lesson06/05_startUpProcedures";
import LsnPage06 from "../../pages/Novice/Lesson06/06_calibrationTypes";
import LsnPage07 from "../../pages/Novice/Lesson06/07_calibrationSubMenu";
import LsnPage08 from "../../pages/Novice/Lesson06/08_freshAirCalib";
import LsnPage09 from "../../pages/Novice/Lesson06/09_singleSensorSpanCalib";
import LsnPage10 from "../../pages/Novice/Lesson06/10_multiSensorSpanCalib01";
import LsnPage11 from "../../pages/Novice/Lesson06/10_multiSensorSpanCalib02";
import LsnPage12 from "../../pages/Novice/Lesson06/11_bumpTest";
import LsnPage13 from "../../pages/Novice/Lesson06/12_bumpTestProcess";
import LsnPage14 from "../../pages/Novice/Lesson06/13_bumpTestSteps";
import LsnPage15 from "../../pages/Novice/Lesson06/14_matching";
import LsnPage16 from "../../pages/Novice/Lesson06/15_checkOnLearning";

import audio_01 from "../../assets/media/novice/L6-NC_audio/01_lsnMenu.mp3";
import audio_02 from "../../assets/media/novice/L6-NC_audio/02_lsnSplash.mp3";
import audio_03 from "../../assets/media/novice/L6-NC_audio/03_objectives.mp3";
import audio_04 from "../../assets/media/novice/L6-NC_audio/04_fastStartUp.mp3";
import audio_05 from "../../assets/media/novice/L6-NC_audio/05_startUpProcedures.mp3";
import audio_06 from "../../assets/media/novice/L6-NC_audio/06_calibrationTypes.mp3";
import audio_07 from "../../assets/media/novice/L6-NC_audio/07_calibrationSubMenu.mp3";
import audio_08 from "../../assets/media/novice/L6-NC_audio/08_freshAirCalib.mp3";
import audio_09 from "../../assets/media/novice/L6-NC_audio/09_singleSensorSpanCalib.mp3";
import audio_10 from "../../assets/media/novice/L6-NC_audio/10_multiSensorSpanCalib01.mp3";
import audio_11 from "../../assets/media/novice/L6-NC_audio/10_multiSensorSpanCalib02.mp3";
import audio_12 from "../../assets/media/novice/L6-NC_audio/11_bumpTest.mp3";
import audio_13 from "../../assets/media/novice/L6-NC_audio/12_bumpTestProcess.mp3";
import audio_14 from "../../assets/media/novice/L6-NC_audio/13_bumpTestSteps.mp3";

const LsnContent06 = [
     {
          id: 0,
          lessonName: "Lesson06",
          component: <LsnPage01 />,
          setaudio: audio_01,
          isVisible: true,
     },

     {
          id: 1,
          lessonName: "Lesson06",
          component: <LsnPage02 />,
          setaudio: audio_02,
          isVisible: false,
     },

     {
          id: 2,
          lessonName: "Lesson06",
          component: <LsnPage03 />,
          setaudio: audio_03,
          isVisible: false,
     },

     {
          id: 3,
          lessonName: "Lesson06",
          component: <LsnPage04 />,
          setaudio: audio_04,
          isVisible: false,
     },

     {
          id: 4,
          lessonName: "Lesson06",
          component: <LsnPage05 />,
          setaudio: audio_05,
          isVisible: false,
     },

     {
          id: 5,
          lessonName: "Lesson06",
          component: <LsnPage06 />,
          setaudio: audio_06,
          isVisible: false,
     },

     {
          id: 6,
          lessonName: "Lesson06",
          component: <LsnPage07 />,
          setaudio: audio_07,
          isVisible: false,
     },

     {
          id: 7,
          lessonName: "Lesson06",
          component: <LsnPage08 />,
          setaudio: audio_08,
          isVisible: false,
     },
     {
          id: 8,
          lessonName: "Lesson06",
          component: <LsnPage09 />,
          setaudio: audio_09,
          isVisible: false,
     },

     {
          id: 9,
          lessonName: "Lesson06",
          component: <LsnPage10 />,
          setaudio: audio_10,
          isVisible: false,
     },

     {
          id: 10,
          lessonName: "Lesson06",
          component: <LsnPage11 />,
          setaudio: audio_11,
          isVisible: false,
     },

     {
          id: 11,
          lessonName: "Lesson06",
          component: <LsnPage12 />,
          setaudio: audio_12,
          isVisible: false,
     },

     {
          id: 12,
          lessonName: "Lesson06",
          component: <LsnPage13 />,
          setaudio: audio_13,
          isVisible: false,
     },

     {
          id: 13,
          lessonName: "Lesson06",
          component: <LsnPage14 />,
          setaudio: audio_14,
          isVisible: false,
     },

     {
          id: 14,
          lessonName: "Lesson06",
          component: <LsnPage15 />,
          setaudio: null,
          isVisible: false,
     },

     {
          id: 15,
          lessonName: "Lesson06",
          component: <LsnPage16 />,
          setaudio: null,
          isVisible: false,
     },
];

export default LsnContent06;
