// import "../../node_modules/video-react/dist/video-react.css";
import React from "react";
import Video from "../assets/video/MVI_0338.mp4";
import { Player } from "video-react";
<link rel="stylesheet" href="/css/video-react.css" />;
export default () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <section className="VideoSection">
            {/* <video controls autostart autoPlay src={Video} type="video/mp4" /> */}
            <Player playsInline poster="../images/poster.png" src={Video} />
          </section>
        </div>
      </div>
    </div>
  );
};
