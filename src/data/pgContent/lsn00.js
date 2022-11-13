import React from "react";
import LsnPage01 from "../../pages/Novice/Lesson00/01_introSplash";
// import LsnPage02 from "../../pages/Novice/Lesson02/00_SensorsDrop";
import LsnPage02 from "../../pages/Novice/Lesson00/02_vidSlide";
import LsnPage03 from "../../pages/Novice/Lesson00/03_introduction";
import LsnPage04 from "../../pages/Novice/Lesson00/04_choosePath";
import LsnPage05 from "../../pages/Novice/Lesson00/05_avatarEnter";
import LsnPage06 from "../../pages/Novice/Lesson00/06_avatarOption";
import LsnPage07 from "../../pages/Novice/Lesson00/07_courseWelcome";
import LsnPage08 from "../../pages/Novice/Lesson00/08_theoryOpsBook";

import audio_01 from "../../assets/media/novice/L0-NC_audio/01_introSplash.mp3";
import audio_03 from "../../assets/media/novice/L0-NC_audio/03_introduction.mp3";
import audio_04 from "../../assets/media/novice/L0-NC_audio/04_choosePath.mp3";
import audio_05 from "../../assets/media/novice/L0-NC_audio/05_avatarEnter.mp3";
import audio_07 from "../../assets/media/novice/L0-NC_audio/07_courseWelcome.mp3";

const LsnContent00 = [
  {
    id: 0,
    lessonName: "Lesson00",
    component: <LsnPage01 />,
    setaudio: audio_01,
    isVisible: true,
  },

  {
    id: 1,
    lessonName: "Lesson00",
    component: <LsnPage02 />,
    setaudio: null,
    isVisible: false,
  },

  {
    id: 2,
    lessonName: "Lesson00",
    component: <LsnPage03 />,
    setaudio: audio_03,
    isVisible: false,
  },

  {
    id: 3,
    lessonName: "Lesson00",
    component: <LsnPage04 />,
    setaudio: audio_04,
    isVisible: false,
  },

  {
    id: 4,
    lessonName: "Lesson00",
    component: <LsnPage05 />,
    setaudio: audio_05,
    isVisible: false,
  },

  {
    id: 5,
    lessonName: "Lesson00",
    component: <LsnPage06 />,
    setaudio: null,
    isVisible: false,
  },

  {
    id: 6,
    lessonName: "Lesson00",
    component: <LsnPage07 />,
    setaudio: audio_07,
    isVisible: false,
  },

  {
    id: 7,
    lessonName: "Lesson00",
    component: <LsnPage08 />,
    setaudio: null,
    isVisible: false,
  },
];

export default LsnContent00;
