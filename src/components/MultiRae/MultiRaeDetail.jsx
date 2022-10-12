import React from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";

const DetailsContainer = styled.div`
     width: 100%;
     height: 100%;
     display: flex;
     flex-direction: column;
     padding: 2.5em 6px 0 6px;
     line-height: 1.4;
`;

const MediumText = styled.span`
     font-size: 18px;
     color: #fff;
     font-weight: 800;
     text-transform: uppercase;
`;

const SmallText = styled.span`
     font-size: 11px;
     color: #fff;
     font-weight: 700;
     text-transform: uppercase;
`;

const SpaceHorizontalContainer = styled.div`
     display: flex;
     justify-content: space-between;
     align-items: center;
`;

export function MultiRaeDetails(props) {
     return (
          <DetailsContainer>
               <MediumText>MultiRAE Lite</MediumText>
               <SpaceHorizontalContainer>
                    <SmallText>Model #MAB6-0EC1000-020</SmallText>
                    <SmallText>Pumped O2,LEL,CO,H2S and PID Sensors</SmallText>
               </SpaceHorizontalContainer>
               <Marginer direction='vertical' margin='1.2em' />
               <SpaceHorizontalContainer>
                    <SmallText>Model #MAB6-0EC1000-020</SmallText>
                    <SmallText>Pumped O2,LEL,CO,H2S and PID Sensors</SmallText>
               </SpaceHorizontalContainer>
          </DetailsContainer>
     );
}
