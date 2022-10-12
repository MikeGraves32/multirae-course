import { motion, useMotionValue, useTransform } from "framer-motion";
import React from "react";
import styled from "styled-components";
import MultiRaeImg from "../../assets/imgs/multiRae01.png";
// import { MultiRaeDetails } from "./MultiRaeDetail";

const MultiRaeWrapper = styled.div`
     width: 100%;
     perspective: 2000;
     display: flex;
     align-items: center;
     justify-content: center;
`;

const MultiRaeContainer = styled(motion.MultiRaeDevice)`
     width: 294px;
     height: 596px;
     display: flex;
     flex-direction: column;
     border-radius: 25px;
     box-shadow: 0 2px 7px 2px rgba(31, 31, 31, 0.2);
     background-color: #1d1f21;
     color: #fff;
     position: relative;
     cursor: grab;
`;

const CircleWrapper = styled.div`
     position: absolute;
     top: 0;
     left: 0;
     min-width: 100%;
     min-height: 100%;
     overflow: hidden;
     border-top-right-radius: 25px;
`;

const Circle = styled.div`
     position: absolute;
     width: 350px;
     height: 350px;
     top: -4.2em;
     right: -10em;
     z-index: 5;
     background-color: #fbbe01;
     border-radius: 50%;
`;

const TopContainer = styled.div`
     width: 100%;
     display: flex;
     flex-direction: column;
     flex: 1.2;
     position: relative;
     align-items: center;
     justify-content: flex-end;
     padding: 1em 15px;
`;

const BottomContainer = styled.div`
     display: flex;
     flex: 0.8;
     padding: 0 1em;
`;

const MultiRaeText = styled.h1`
     color: #fff;
     text-transform: uppercase;
     margin: 0;
     z-index: 10;
     font-size: 60px;
     font-weight: 900;
`;

const DeviceWrapper = styled.div`
     width: 100%;
     height: 100%;
     position: absolute;
     display: flex;
     align-items: center;
     justify-content: center;
`;

const MultiRaeDevice = styled(motion.div)`
     width: auto;
     height: 190px;
     z-index: 99;
     user-select: none;
     img {
          width: auto;
          height: 100%;
          user-select: none;
          margin-right: 3em;
          margin-top: 4em;
     }
`;

export function MultiRae(props) {
     const x = useMotionValue();
     const y = useMotionValue();
     const rotateX = useTransform(y, [-100, 100], [30, -30]);
     const rotateY = useTransform(x, [-100, 100], [-30, 30]);

     return (
          <MultiRaeWrapper>
               {/* <BottomContainer>
        <MultiRaeText>MultiRae</MultiRaeText>
        <MultiRaeDetails />
      </BottomContainer> */}
               <MultiRaeContainer
                    style={{ x, y, rotateX, rotateY, z: 100 }}
                    drag
                    dragElastic={0.16}
                    dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                    whileTap={{ cursor: "grabbing" }}
               >
                    <TopContainer>
                         <img src={MultiRaeImg} />
                         <CircleWrapper></CircleWrapper>
                    </TopContainer>
               </MultiRaeContainer>
          </MultiRaeWrapper>
     );
}
