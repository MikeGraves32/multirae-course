import React, { useEffect, useState, useRef } from "react";
import { BlackBoot_Scrn } from "./blackBootScrn";
const images = BlackBoot_Scrn;

export default function ImageSwapper() {
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(images[Math.floor(Math.random() * images.length)].url);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <img src={currentImage} alt="Screen" />
    </div>
  );
}
