import React, { useEffect, useState, useRef, useCallback } from "react";
import { YB_BumpTest_Start } from "./screens_yb_bumpTest_01";
import { YB_BumpTest_Apply_Gas_Oxy } from "./screens_yb_bumpTest_02";
import { YB_BumpTest_Oxy_Results } from "./screens_yb_bumpTest_03";
import { YB_BumpTest_Apply_Gas_SO2 } from "./screens_yb_bumpTest_04";
import { YB_BumpTest_SO2_Results } from "./screens_yb_bumpTest_05";
import { YB_BumpTest_Apply_Gas_CL2 } from "./screens_yb_bumpTest_06";
import { YB_BumpTest_CL2_Results } from "./screens_yb_bumpTest_07";
import { YB_BumpTest_Apply_Gas_VOC } from "./screens_yb_bumpTest_08";
import { YB_BumpTest_VOC_Results } from "./screens_yb_bumpTest_09";
import { YB_BumpTest_PowerOff } from "./screens_yb_bumpTest_10";
import { YB_BumpTest_Shutdown } from "./screens_yb_bumpTest_11";

import power from "../../../img/powerBtn/power.png";
import nBtn from "../../../img/powerBtn/N-.png";
import yBtn from "../../../img/powerBtn/Y+.png";
import "./index.css";
const images_01 = YB_BumpTest_Start;

const images = [
  YB_BumpTest_Start,
  YB_BumpTest_Apply_Gas_Oxy,
  YB_BumpTest_Oxy_Results,
  YB_BumpTest_Apply_Gas_SO2,
  YB_BumpTest_SO2_Results,
  YB_BumpTest_Apply_Gas_CL2,
  YB_BumpTest_CL2_Results,
  YB_BumpTest_Apply_Gas_VOC,
  YB_BumpTest_VOC_Results,
  YB_BumpTest_PowerOff,
  YB_BumpTest_Shutdown,
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
          console.log("should be 0 still");
          if (e.key === "ArrowUp") {
            const intervalId = setInterval(() => {
              if (imgIndex.current < images.length) {
                if (imgValue.current < images[imgIndex.current].length) {
                  setValue(imgValue.current + 1);
                }
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
            console.log(
              "ArrowLeft 1 selected index " + stepValues[0].startIndex
            );
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
            console.log(
              "ArrowLeft 2 selected index " + stepValues[0].startIndex
            );
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
            console.log("ArrowUp 3 selected index " + stepValues[0].startIndex);
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
            console.log(
              "ArrowLeft 4 selected index " + stepValues[0].startIndex
            );
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
          if (e.key === "ArrowUp" && stepValues[0].startIndex === 5) {
            console.log("ArrowUp 5 selected index " + stepValues[0].startIndex);
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
          if (e.key === "ArrowLeft" && stepValues[0].startIndex === 6) {
            console.log(
              "ArrowLeft 6 selected index " + stepValues[0].startIndex
            );
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
          break;
        case 7:
          if (e.key === "ArrowUp" && stepValues[0].startIndex === 7) {
            console.log("ArrowUp 7 selected index " + stepValues[0].startIndex);
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
            console.log("ArrowUp 7 after " + stepValues[0].startIndex);
          }
          break;
        case 8:
          if (e.key === "ArrowLeft" && stepValues[0].startIndex === 8) {
            console.log(
              "ArrowLeft 8 selected index " + stepValues[0].startIndex
            );
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
            console.log("ArrowUp 9 selected index " + stepValues[0].startIndex);
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
          if (e.key === "ArrowUp" && stepValues[0].startIndex === 10) {
            console.log(
              "ArrowUp 10 selected index " + stepValues[0].startIndex
            );
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
          if (e.key === "ArrowUp" && stepValues[0].startIndex === 11) {
            console.log(
              "ArrowUp 11 selected index " + stepValues[0].startIndex
            );
            setValue(0);
            setScrIndex(stepValues[0].startIndex);
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
    const intervalId = setInterval(() => {}, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const handleNBtn = useCallback((e) => {
    console.log("N- selected");
  });

  const handleSecondButtonClick = (e) => {
    if (e.key === "ArrowRight") {
      alert("Second button was clicked.");
    }
  };
  const handlePowerClick = (e) => {
    if (e.key === "ArrowUp") {
      alert("ArrowUp button was clicked.");
    }
  };

  return (
    <li className="multirae_screen multirae_wrapper">
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
