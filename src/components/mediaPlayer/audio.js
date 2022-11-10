import React from "react";
import { ReactAudio } from "reactjs-media";
import { AiFillAudio } from "react-icons/ai";

export default function pgAudio({ mediaFile }) {
  return (
    <>
      <div>
        <ReactAudio src={mediaFile} />
      </div>
    </>
  );
}
