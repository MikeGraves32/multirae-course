import React, { useState, useRef } from "react";

const AudioImage = ({ imageSrc, audioSrc, labels }) => {
  const audioRef = useRef();
  const [currentLabel, setCurrentLabel] = useState(0);

  const handleTimeUpdate = () => {
    for (let i = currentLabel; i < labels.length; i++) {
      if (audioRef.current.currentTime >= labels[i].time) {
        setCurrentLabel(i);
      } else {
        break;
      }
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <img src={imageSrc} alt={labels[currentLabel].text} />
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate}>
        <source src={audioSrc} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <p>{labels[currentLabel].text}</p>
    </div>
  );
};

export default AudioImage;
