import React, { useEffect, useState, useRef, useCallback } from "react";
import { YB_BumpTest_Start } from "./screens_yb_bumpTest_01";
import { YB_BumpTest_Apply_Gas_Oxy } from "./screens_yb_bumpTest_02";
import { YB_BumpTest_Oxy_Results } from "./screens_yb_bumpTest_03";
import { YB_BumpTest_SO2 } from "./screens_yb_bumpTest_04";
import { YB_BumpTest_SO2_Results } from "./screens_yb_bumpTest_05";
import { YB_BumpTest_CL2 } from "./screens_yb_bumpTest_06";
import { YB_BumpTest_CL2_Results } from "./screens_yb_bumpTest_07";
import { YB_BumpTest_Apply_Gas_VOC } from "./screens_yb_bumpTest_08";
import { YB_BumpTest_Off } from "./screens_yb_bumpTest_09";
import { YB_BumpTest_Shutdown } from "./screens_yb_bumpTest_10";
// import { YB_BumpTest_Apply_Gas_VOC } from "./screens_yb_bumpTest_11";

import power from "../../../img/powerBtn/power.png";
import nBtn from "../../../img/powerBtn/N-.png";
import yBtn from "../../../img/powerBtn/Y+.png";
import "./index.css";
const images_01 = YB_BumpTest_Start;

const images = [
  YB_BumpTest_Start,
  YB_BumpTest_Apply_Gas_Oxy,
  YB_BumpTest_Oxy_Results,
  YB_BumpTest_SO2,
  YB_BumpTest_SO2_Results,
  YB_BumpTest_CL2,
  YB_BumpTest_CL2_Results,
  YB_BumpTest_Apply_Gas_VOC,
  YB_BumpTest_Off,
  YB_BumpTest_Shutdown,
];

export default function StartUp_YB() {
  //   const [currentStartUpImage, setCurrentStartUpImage] = useState(
  //     YB_Calib_Start[0].url
  //   );
  const [currentStartUpImage, setCurrentStartUpImage] = useState(images[0].url);
  const [scrIndex, setScrIndex] = useState(0);
  const [value, setValue] = useState(0);
  const imgValue = useRef(0);
  const imgIndex = useRef(0);

  const detectKeyDown = useCallback(
    (e) => {
      console.log("running count imgIndex.current " + imgIndex.current);
      switch (imgIndex.current) {
        case 0:
          if (e.key === "ArrowUp") {
            const intervalId = setInterval(() => {
              if (imgIndex.current < images.length) {
                if (imgValue.current < images[imgIndex.current].length) {
                  setValue(imgValue.current + 1);
                }
              }
            }, 3000);
            return () => clearInterval(intervalId);
          }

          if (e.key === "ArrowLeft") {
            setValue(0);
            setScrIndex(1);
            //   setCurrentStartUpImage(images[imgIndex.current].url);
          }
          break;
        case 1:
          if (e.key === "ArrowUp") {
            setValue(0);
            setScrIndex(2);
            console.log("ArrowUp 1 selected key " + imgIndex.current);
            console.log(
              "current image " +
                imgValue.current +
                " current index " +
                imgIndex.current
            );
          }
          break;
        case 2:
          if (e.key === "ArrowLeft" && imgIndex.current === 2) {
            console.log("ArrowLeft 2 selected key " + imgIndex.current);
            setValue(0);
            setScrIndex(3);
          }
          break;
        case 3:
          if (e.key === "ArrowLeft" && imgIndex.current === 3) {
            console.log("ArrowLeft 3 selected key " + imgIndex.current);
            setValue(0);
            setScrIndex(4);
          }
          break;
        case 4:
          if (e.key === "ArrowLeft" && imgIndex.current === 4) {
            console.log("ArrowLeft 4 selected key " + imgIndex.current);
            setValue(0);
            setScrIndex(5);
          }
          break;
        case 5:
          if (e.key === "ArrowUp" && imgIndex.current === 5) {
            console.log("ArrowUp 5 selected key " + imgIndex.current);
            setValue(0);
            setScrIndex(6);
          }
          console.log("ArrowUp 5 selected key " + scrIndex);
          break;
        case 6:
          if (e.key === "ArrowLeft" && imgIndex.current === 6) {
            console.log("ArrowLeft 6 selected key " + scrIndex);
            setValue(0);
            setScrIndex(7);
          }
          break;
        case 7:
          if (e.key === "ArrowUp" && imgIndex.current === 7) {
            console.log("ArrowUp 7 selected key " + imgIndex.current);
            setValue(0);
            setScrIndex(8);
          }
          break;
        case 8:
          if (e.key === "ArrowLeft" && imgIndex.current === 8) {
            console.log("ArrowLeft 8 selected key " + imgIndex.current);
            setValue(0);
            setScrIndex(9);
          }
          break;
        case 9:
          if (e.key === "ArrowUp" && imgIndex.current === 9) {
            console.log("ArrowUp 9 selected key " + imgIndex.current);
            setValue(0);
            setScrIndex(10);
          }
          break;
        case 10:
          if (e.key === "ArrowUp" && imgIndex.current === 10) {
            console.log("ArrowUp 10 selected key " + imgIndex.current);
            setValue(0);
            setScrIndex(11);
          }
          break;
        default:
          return null;
      }
    },
    [scrIndex]
  );

  //   const detectKeyDown = useCallback(
  //     (e) => {
  //       if (e.key === "ArrowLeft") {
  //         console.log("ArrowLeft selected key " + e.key);
  //         switch (imgIndex.current) {
  //           case 0:
  //             break;
  //           case 1:
  //             console.log("ArrowLeft 1 selected key " + imgIndex.current);
  //             break;
  //           case 2:
  //             console.log("ArrowLeft 2 selected key " + imgIndex.current);
  //             break;
  //           case 3:
  //             break;
  //           case 4:
  //             console.log("ArrowLeft 4 selected key " + imgIndex.current);
  //             break;
  //           case 5:
  //             console.log("ArrowUp 5 selected key " + scrIndex);
  //             break;
  //           case 6:
  //             console.log("ArrowUp 6 selected key " + scrIndex);
  //             break;
  //           case 7:
  //             console.log("ArrowLeft 7 selected key " + imgIndex.current);
  //             break;
  //           case 8:
  //             console.log("ArrowLeft 8 selected key " + imgIndex.current);
  //             break;
  //           default:
  //             return null;
  //         }
  //       } else if (e.key === "ArrowUp") {
  //         console.log("ArrowUp selected key " + e.key);
  //         //   setCurrentIndex(currentBtnSelect + 1);
  //         const intervalId = setInterval(() => {
  //           // console.log("get value " + imgValue.current);
  //           // value < images.length && setValue((value) => value + 1);
  //           // if (imgValue.current < images[imgIndex.current].length) {
  //           //   setValue(imgValue.current + 1);
  //           //   console.log(
  //           //     "number here " +
  //           //       value +
  //           //       " imgValue " +
  //           //       images[imgIndex.current].length
  //           //   );
  //           // }
  //           // setCurrentStartUpImage(images[0].url);
  //           //    setCurrentStartUpImage(
  //           //      images[Math.floor(Math.random() * images.length)].url
  //           //    );
  //         }, 5000);

  //         //    if (imgValue.current === images[imgIndex.current].length) {
  //         //      console.log("checking imgValue ");
  //         //      if (imgIndex.current < images.length) {
  //         //        setScrIndex(imgIndex.current + 1);
  //         //        setValue(0);
  //         //      }
  //         //    } else {
  //         //      console.log("not now");
  //         //    }
  //         //    switch (scrIndex) {
  //         //      case 3:
  //         //        console.log("ArrowUp 3 selected key " + scrIndex);
  //         //        break;
  //         //      case 5:
  //         //        console.log("ArrowUp 5 selected key " + scrIndex);
  //         //        break;
  //         //      case 6:
  //         //        console.log("ArrowUp 6 selected key " + scrIndex);
  //         //        break;
  //         //      default:
  //         //        return null;
  //         //    }

  //         return () => clearInterval(intervalId);
  //         //   secondButtonRef.current.click();
  //       } else if (e.key === "ArrowRight") {
  //         console.log("ArrowRight selected key " + e.key);
  //       }
  //     },
  //     [value, scrIndex]
  //   );

  useEffect(() => {
    imgIndex.current = scrIndex;
    //     imgValue.current = value;
    console.log("2nd use " + scrIndex);
    //     setValue(0);
  }, [scrIndex]);

  useEffect(() => {
    if (value < images[imgIndex.current].length) {
      setCurrentStartUpImage(images[imgIndex.current][value].url);
    }
    imgValue.current = value;

    console.log("use value " + value);
  }, [value]);

  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);
  }, [detectKeyDown]);
  //   const [currentIndex, setCurrentIndex] = useState(1);
  //   const [currentBtnSelect, setCurrentBtnSelect] = useState(0);

  const secondButtonRef = useRef();
  const handleFirstButtonClick = (e) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      secondButtonRef.current.click();
    }
  };

  const handleYBtn = useCallback((e) => {
    console.log("Y+ selected");
    if (value === images_01.length) {
    }
  });

  const handlePowerBtn = useCallback((e) => {
    console.log("Power selected");
    const intervalId = setInterval(() => {
      //    if (currentIndex === images.length - 1) {
      //      setCurrentIndex(0);
      //    } else {
      //      setCurrentIndex(currentIndex + 1);
      //    }
      //    setCurrentStartUpImage(images[currentIndex].url);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const handleNBtn = useCallback((e) => {
    console.log("N- selected");
  });

  const handleSecondButtonClick = (e) => {
    if (e.key === "ArrowRight") {
      alert("Second button was clicked.");
      //  const intervalId = setInterval(() => {
      //    if (currentIndex === images.length - 1) {
      //      setCurrentIndex(0);
      //    } else {
      //      setCurrentIndex(currentIndex + 1);
      //    }
      //    setCurrentStartUpImage(images[currentIndex].url);
      //  }, 5000);
      //  return () => clearInterval(intervalId);
    }
  };
  const handlePowerClick = (e) => {
    if (e.key === "ArrowUp") {
      alert("ArrowUp button was clicked.");
      //  const intervalId = setInterval(() => {
      //    if (currentIndex === images.length - 1) {
      //      setCurrentIndex(0);
      //    } else {
      //      setCurrentIndex(currentIndex + 1);
      //    }
      //    setCurrentStartUpImage(images[currentIndex].url);
      //  }, 5000);
      //  return () => clearInterval(intervalId);
    }
  };

  return (
    <div className="multirae_screen">
      <img alt="Yellow Boot MultiRae" src={currentStartUpImage} />
      <div className="multiRae-yellow-boot">
        <img
          alt="Y+"
          src={yBtn}
          className="powerBtn-set Y+"
          onClick={() => handleYBtn()}
        />
        <img
          alt="Power"
          src={power}
          className="powerBtn-set power"
          onClick={() => handlePowerBtn()}
        />
        <img
          alt="N-"
          src={nBtn}
          className="powerBtn-set N-"
          onClick={() => handleNBtn()}
          ref={secondButtonRef}
        />
      </div>
    </div>
  );
}
