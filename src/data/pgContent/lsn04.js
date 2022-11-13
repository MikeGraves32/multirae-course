import React from "react";
import LsnPage01 from "../../pages/Novice/Lesson04/01_lsnMenu";
import LsnPage02 from "../../pages/Novice/Lesson04/02_lsnSplash";
import LsnPage03 from "../../pages/Novice/Lesson04/03_objectives";
import LsnPage04 from "../../pages/Novice/Lesson04/04_capabilities";
import LsnPage05 from "../../pages/Novice/Lesson04/05_limitations";
import LsnPage06 from "../../pages/Novice/Lesson04/06_infographic";
import LsnPage07 from "../../pages/Novice/Lesson04/07_checkOnLearning";

import audio_01 from "../../assets/media/novice/L4-NC_audio/01_lsnMenu.mp3";
import audio_02 from "../../assets/media/novice/L4-NC_audio/02_lsnSplash.mp3";
import audio_03 from "../../assets/media/novice/L4-NC_audio/03_objectives.mp3";
import audio_04 from "../../assets/media/novice/L4-NC_audio/04_capabilities.mp3";
import audio_05 from "../../assets/media/novice/L4-NC_audio/05_limitations.mp3";
import audio_06 from "../../assets/media/novice/L4-NC_audio/06_infographic.mp3";

const LsnContent04 = [
  {
    id: 0,
    lessonName: "Lesson04",
    component: <LsnPage01 />,
    setaudio: audio_01,
    isVisible: true,
  },

  {
    id: 1,
    lessonName: "Lesson04",
    component: <LsnPage02 />,
    setaudio: audio_02,
    isVisible: false,
  },

  {
    id: 2,
    lessonName: "Lesson04",
    component: <LsnPage03 />,
    setaudio: audio_03,
    isVisible: false,
  },

  {
    id: 3,
    lessonName: "Lesson04",
    component: <LsnPage04 />,
    setaudio: audio_04,
    isVisible: false,
  },

  {
    id: 4,
    lessonName: "Lesson04",
    component: <LsnPage05 />,
    setaudio: audio_05,
    isVisible: false,
  },

  {
    id: 5,
    lessonName: "Lesson04",
    component: <LsnPage06 />,
    setaudio: audio_06,
    isVisible: false,
  },

  {
    id: 6,
    lessonName: "Lesson04",
    component: <LsnPage07 />,
    setaudio: null,
    isVisible: false,
  },
];

export default LsnContent04;
