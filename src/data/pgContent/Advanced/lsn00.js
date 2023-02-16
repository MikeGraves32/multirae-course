import React from "react";
import LsnPage01 from "../../../pages/Advanced/Lesson00/01_avatarEnter";
import LsnPage02 from "../../../pages/Advanced/Lesson00/02_lsnMenu";
import LsnPage03 from "../../../pages/Advanced/Lesson00/03_checkOnLearning";
import LsnPage04 from "../../../pages/Advanced/Lesson00/05_bumpTest";
import LsnPage05 from "../../../pages/Advanced/Lesson00/04_fastStartUp";

import audio_01 from "../../../assets/media/advanced/01_intro.mp3";
// import audio_03 from "../../assets/media/novice/L0-NC_audio/03_introduction.mp3";
// import audio_04 from "../../assets/media/novice/L0-NC_audio/04_choosePath.mp3";
// import audio_05 from "../../assets/media/novice/L0-NC_audio/05_avatarEnter.mp3";

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
          setaudio: null,
          isVisible: false,
     },

     {
          id: 3,
          lessonName: "Lesson00",
          component: <LsnPage04 />,
          setaudio: null,
          isVisible: false,
     },

     {
          id: 4,
          lessonName: "Lesson00",
          component: <LsnPage05 />,
          setaudio: null,
          isVisible: false,
     },
];

export default LsnContent00;
