import React, { useEffect, useState, useRef, useCallback } from "react";
import { YB_Calib_Start } from "./screens_yb_multicalib_01";
import { YB_Calib_Sensor_Warmup } from "./screens_yb_multicalib_02";
import { YB_Calib_Calibrating } from "./screens_yb_multicalib_03";
import { YB_Calib_Calibrate_SO2 } from "./screens_yb_multicalib_04";
import { YB_Calib_Apply_Gas_SO2 } from "./screens_yb_multicalib_05";
import { YB_Calib_Calibrating_SO2 } from "./screens_yb_multicalib_06";
import { YB_Calib_CL2 } from "./screens_yb_multicalib_07";
import { YB_Calib_Apply_Gas_CL2 } from "./screens_yb_multicalib_08";
import { YB_Calib_Calibrating_CL2 } from "./screens_yb_multicalib_09";
import { YB_Calib_VOC } from "./screens_yb_multicalib_10";
import { YB_Calib_Apply_Gas_VOC } from "./screens_yb_multicalib_11";
import { YB_Calib_Calibrating_VOC } from "./screens_yb_multicalib_12";
import { YB_Calib_Complete } from "./screens_yb_multicalib_13";
import { YB_Calib_Shutdown } from "./screens_yb_multicalib_14";

import power from "../../../img/powerBtn/power.png";
import nBtn from "../../../img/powerBtn/N-.png";
import yBtn from "../../../img/powerBtn/Y+.png";
import "./index.css";
const images_01 = YB_Calib_Start;

const images = [
  YB_Calib_Start,
  YB_Calib_Sensor_Warmup,
  YB_Calib_Calibrating,
  YB_Calib_Calibrate_SO2,
  YB_Calib_Apply_Gas_SO2,
  YB_Calib_Calibrating_SO2,
  YB_Calib_CL2,
  YB_Calib_Apply_Gas_CL2,
  YB_Calib_Calibrating_CL2,
  YB_Calib_VOC,
  YB_Calib_Apply_Gas_VOC,
  YB_Calib_Calibrating_VOC,
  YB_Calib_Complete,
  YB_Calib_Shutdown,
];
const startValues = [
  { id: 0, startIndex: 0, startInit: false, startPaused: false },
];

export default function StartUp_YB() {
  //   const [currentStartUpImage, setCurrentStartUpImage] = useState(
  //     YB_Calib_Start[0].url
  //   );
  const [currentStartUpImage, setCurrentStartUpImage] = useState(images[0].url);
  const [scrnIndex, setScrIndex] = useState(0);
  const [value, setValue] = useState(0);
  const [initBump, setInitBump] = useState(false);
  const [pauseStep, setPauseStep] = useState(false);
  const [stepValues, setStepValues] = useState(startValues);
  const imgValue = useRef(0);
  const imgIndex = useRef(0);
  const initBumpState = useRef(initBump);
  const isStepPaused = useRef();
  const getStepValues = useRef([]);

  const detectKeyUp = useCallback(
    (e) => {
      console.log(
        "stepValue " +
          stepValues.length +
          "stepValues index=" +
          stepValues[0].startIndex +
          " startInit=" +
          stepValues[0].startInit +
          " startPause=" +
          stepValues[0].startPaused
      );
      switch (stepValues[0].startIndex) {
        case 0:
          if (e.key === "ArrowUp") {
            const intervalId = setInterval(() => {
              if (imgValue.current < images[imgIndex.current].length) {
                setValue(imgValue.current + 1);
              }
            }, 3000);
            setStepValues(
              startValues.map((startInitial) =>
                startInitial.id === 0
                  ? {
                      ...startInitial,
                      startIndex: 1,
                      startInit: true,
                      startPaused: true,
                    }
                  : { ...startInitial }
              )
            );

            return () => clearInterval(intervalId);
          }

          break;
        case 1:
          if (e.key === "ArrowLeft" && stepValues[0].startIndex === 1) {
            setValue(0);
            setScrIndex(stepValues[0].startIndex);
            setStepValues(
              startValues.map((startInitial) =>
                startInitial.id === 0
                  ? {
                      ...startInitial,
                      startIndex: 2,
                    }
                  : { ...startInitial }
              )
            );
          }

          break;
        case 2:
          if (e.key === "ArrowLeft" && stepValues[0].startIndex === 2) {
            setValue(0);
            setScrIndex(stepValues[0].startIndex);
            setStepValues(
              startValues.map((startInitial) =>
                startInitial.id === 0
                  ? {
                      ...startInitial,
                      startIndex: 3,
                    }
                  : { ...startInitial }
              )
            );
          }
          break;
        case 3:
          if (e.key === "ArrowUp" && stepValues[0].startIndex === 3) {
            console.log("ArrowUp 2 selected key " + imgIndex.current);
            setValue(0);
            setScrIndex(stepValues[0].startIndex);
            setStepValues(
              startValues.map((startInitial) =>
                startInitial.id === 0
                  ? {
                      ...startInitial,
                      startIndex: 4,
                    }
                  : { ...startInitial }
              )
            );
          }
          break;
        case 4:
          if (e.key === "ArrowLeft" && stepValues[0].startIndex === 4) {
            console.log("ArrowLeft 3 selected key " + imgIndex.current);
            setValue(0);
            setScrIndex(stepValues[0].startIndex);
            setStepValues(
              startValues.map((startInitial) =>
                startInitial.id === 0
                  ? {
                      ...startInitial,
                      startIndex: 5,
                    }
                  : { ...startInitial }
              )
            );
          }
          break;
        case 5:
          if (e.key === "ArrowLeft" && stepValues[0].startIndex === 5) {
            console.log("ArrowLeft 4 selected key " + imgIndex.current);
            setValue(0);
            setScrIndex(stepValues[0].startIndex);
            setStepValues(
              startValues.map((startInitial) =>
                startInitial.id === 0
                  ? {
                      ...startInitial,
                      startIndex: 6,
                    }
                  : { ...startInitial }
              )
            );
          }
          break;
        case 6:
          if (e.key === "ArrowUp" && stepValues[0].startIndex === 6) {
            console.log("ArrowUp 6 selected key " + imgIndex.current);
            setValue(0);
            setScrIndex(stepValues[0].startIndex);
            setStepValues(
              startValues.map((startInitial) =>
                startInitial.id === 0
                  ? {
                      ...startInitial,
                      startIndex: 7,
                    }
                  : { ...startInitial }
              )
            );
          }
          console.log("ArrowUp 5 selected key " + imgIndex.current);
          break;
        case 7:
          if (e.key === "ArrowLeft" && stepValues[0].startIndex === 7) {
            // console.log("ArrowLeft 6 selected key " + scrIndex);
            setValue(0);
            setScrIndex(stepValues[0].startIndex);
            setStepValues(
              startValues.map((startInitial) =>
                startInitial.id === 0
                  ? {
                      ...startInitial,
                      startIndex: 8,
                    }
                  : { ...startInitial }
              )
            );
          }
          break;
        case 8:
          if (e.key === "ArrowLeft" && stepValues[0].startIndex === 8) {
            console.log("ArrowLeft 7 selected key " + imgIndex.current);
            setValue(0);
            setScrIndex(stepValues[0].startIndex);
            setStepValues(
              startValues.map((startInitial) =>
                startInitial.id === 0
                  ? {
                      ...startInitial,
                      startIndex: 9,
                    }
                  : { ...startInitial }
              )
            );
          }
          break;
        case 9:
          if (e.key === "ArrowUp" && stepValues[0].startIndex === 9) {
            console.log("ArrowUp 8 selected key " + imgIndex.current);
            setValue(0);
            setScrIndex(stepValues[0].startIndex);
            setStepValues(
              startValues.map((startInitial) =>
                startInitial.id === 0
                  ? {
                      ...startInitial,
                      startIndex: 10,
                    }
                  : { ...startInitial }
              )
            );
          }
          break;
        case 10:
          if (e.key === "ArrowLeft" && stepValues[0].startIndex === 10) {
            console.log("ArrowLeft 9 selected key " + imgIndex.current);
            setValue(0);
            setScrIndex(stepValues[0].startIndex);
            setStepValues(
              startValues.map((startInitial) =>
                startInitial.id === 0
                  ? {
                      ...startInitial,
                      startIndex: 11,
                    }
                  : { ...startInitial }
              )
            );
          }
          break;
        case 11:
          if (e.key === "ArrowLeft" && stepValues[0].startIndex === 11) {
            console.log("ArrowLeft 10 selected key " + imgIndex.current);
            setValue(0);
            setScrIndex(stepValues[0].startIndex);
            setStepValues(
              startValues.map((startInitial) =>
                startInitial.id === 0
                  ? {
                      ...startInitial,
                      startIndex: 12,
                    }
                  : { ...startInitial }
              )
            );
          }
          break;
        case 12:
          if (e.key === "ArrowUp" && stepValues[0].startIndex === 12) {
            setValue(0);
            setScrIndex(stepValues[0].startIndex);
            setStepValues(
              startValues.map((startInitial) =>
                startInitial.id === 0
                  ? {
                      ...startInitial,
                      startIndex: 13,
                    }
                  : { ...startInitial }
              )
            );

            //   const intervalId = setInterval(() => {
            //     console.log("ArrowUp 11 selected key " + imgIndex.current);
            //    }, 6000);
            //   return () => clearInterval(intervalId);
          }
          break;
        case 13:
          if (e.key === "ArrowUp" && stepValues[0].startIndex === 13) {
            console.log("ArrowUp 12 selected key " + imgIndex.current);
            setValue(0);
            setScrIndex(stepValues[0].startIndex);
            setStepValues(
              startValues.map((startInitial) =>
                startInitial.id === 0
                  ? {
                      ...startInitial,
                      startIndex: 14,
                    }
                  : { ...startInitial }
              )
            );
          }
          break;
        case 14:
          if (e.key === "ArrowUp" && stepValues[0].startIndex === 14) {
            console.log("ArrowUp 13 selected key " + imgIndex.current);
            setValue(0);
            setScrIndex(stepValues[0].startIndex);
            setStepValues(
              startValues.map((startInitial) =>
                startInitial.id === 0
                  ? {
                      ...startInitial,
                      startIndex: 15,
                    }
                  : { ...startInitial }
              )
            );
          }
          break;
        default:
          return null;
      }
    },
    [stepValues]
  );

  useEffect(() => {
    isStepPaused.current = pauseStep;
  });

  useEffect(() => {
    initBumpState.current = initBump;
    isStepPaused.current = pauseStep;
  }, [initBump, pauseStep]);

  useEffect(() => {
    getStepValues.current = stepValues[0];
  });

  useEffect(() => {
    imgIndex.current = scrnIndex;
  }, [scrnIndex]);

  useEffect(() => {
    imgValue.current = value;
    if (value < images[imgIndex.current].length) {
      setTimeout(() => {
        setCurrentStartUpImage(images[imgIndex.current][value].url);
      }, 200);
    }
  }, [value]);

  useEffect(() => {
    document.addEventListener("keyup", detectKeyUp, true);
  }, [detectKeyUp]);
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
    <li className="multirae_screen_sm multirae_wrapper">
      <div className="multiRae-yellow-boot btnOverlay">
        <img alt="Yellow Boot MultiRae" src={currentStartUpImage} />
        <img
          alt="Y+"
          src={yBtn}
          className="powerBtn-set Y-btn"
          onClick={() => handleYBtn()}
        />
        <img
          alt="Power"
          src={power}
          className="powerBtn-set power-btn"
          onClick={() => handlePowerBtn()}
        />
        <img
          alt="N-"
          src={nBtn}
          className="powerBtn-set N-btn"
          onClick={() => handleNBtn()}
          ref={secondButtonRef}
        />
      </div>
    </li>
  );
}
