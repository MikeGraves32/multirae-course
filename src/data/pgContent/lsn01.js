import React from "react";
import LsnPage01 from "../../pages/Novice/Lesson01/01_lsnMenu";
import LsnPage02 from "../../pages/Novice/Lesson01/02_lsnSplash";
import LsnPage03 from "../../pages/Novice/Lesson01/03_objectives";
import LsnPage04 from "../../pages/Novice/Lesson01/04_devDescription";
import LsnPage05 from "../../pages/Novice/Lesson01/05_devFeatures";
import LsnPage06 from "../../pages/Novice/Lesson01/06_devDescriptionStatic";
import LsnPage07 from "../../pages/Novice/Lesson01/07_commonDefinitions";
import LsnPage08 from "../../pages/Novice/Lesson01/08_capabilities";
import LsnPage09 from "../../pages/Novice/Lesson01/09_limitations";
import LsnPage10 from "../../pages/Novice/Lesson01/10_infographic";
import LsnPage11 from "../../pages/Novice/Lesson01/11_crossSensitivity";
import LsnPage12 from "../../pages/Novice/Lesson01/12_checkOnLearning";

/*** Lesson Audio ***/
import audio_01 from "../../assets/media/novice/L1-NC_audio/01_lsnMenu.mp3";
import audio_02 from "../../assets/media/novice/L1-NC_audio/02_lsnSplash.mp3";
import audio_04 from "../../assets/media/novice/L1-NC_audio/04_devDescription.mp3";
import audio_05 from "../../assets/media/novice/L1-NC_audio/05_devFeatures.mp3";
import audio_06 from "../../assets/media/novice/L1-NC_audio/06_devDescriptionStatic.mp3";
import audio_07 from "../../assets/media/novice/L1-NC_audio/07_commonDefinitions.mp3";
import audio_08 from "../../assets/media/novice/L1-NC_audio/08_capabilities.mp3";
import audio_09 from "../../assets/media/novice/L1-NC_audio/09_limitations.mp3";
import audio_10 from "../../assets/media/novice/L1-NC_audio/10_infographic.mp3";
import audio_11 from "../../assets/media/novice/L1-NC_audio/11_crossSensitivity.mp3";

const LsnContent01 = [
     {
          id: 0,
          lessonName: "Lesson01",
          component: <LsnPage01 />,
          setaudio: audio_01,
          isVisible: false,
     },

     {
          id: 1,
          lessonName: "Lesson01",
          component: <LsnPage02 />,
          setaudio: audio_02,
          isVisible: false,
     },

     {
          id: 2,
          lessonName: "Lesson01",
          component: <LsnPage03 />,
          setaudio: null,
          isVisible: false,
     },

     {
          id: 3,
          lessonName: "Lesson01",
          component: <LsnPage04 />,
          setaudio: audio_04,
          isVisible: false,
     },

     {
          id: 4,
          lessonName: "Lesson01",
          component: <LsnPage05 />,
          setaudio: audio_05,
          isVisible: false,
     },

     {
          id: 5,
          lessonName: "Lesson01",
          component: <LsnPage06 />,
          setaudio: audio_06,
          isVisible: false,
     },

     {
          id: 6,
          lessonName: "Lesson01",
          component: <LsnPage07 />,
          setaudio: audio_07,
          isVisible: false,
     },

     {
          id: 7,
          lessonName: "Lesson01",
          component: <LsnPage08 />,
          setaudio: audio_08,
          isVisible: false,
     },

     {
          id: 8,
          lessonName: "Lesson01",
          component: <LsnPage09 />,
          setaudio: audio_09,
          isVisible: false,
     },

     {
          id: 9,
          lessonName: "Lesson01",
          component: <LsnPage10 />,
          setaudio: audio_10,
          isVisible: false,
     },

     {
          id: 10,
          lessonName: "Lesson01",
          component: <LsnPage11 />,
          setaudio: audio_11,
          isVisible: false,
     },

     {
          id: 11,
          lessonName: "Lesson01",
          component: <LsnPage12 />,
          setaudio: null,
          isVisible: false,
     },
];

export default LsnContent01;
