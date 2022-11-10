import React from "react";
import AudioPlayer from "react-h5-audio-player";

import { Container, Row, Col } from "react-bootstrap";
// import { ReactAudio } from "reactjs-media";
// import { AiFillAudio } from "react-icons/ai";

export default function pgAudio({ mediaFile }) {
  return (
    <>
      <div>
        <Container>
          <Row>
            <Col lg={8}>
              <AudioPlayer
                layout="horizontal-reverse"
                customAdditionalControls={[]}
                showJumpControls={false}
                customVolumeControls={[]}
                // autoPlay
                src={mediaFile}
                onPlay={(e) => console.log("onPlay")}
                // other props here
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
