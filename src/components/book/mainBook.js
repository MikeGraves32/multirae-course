import React from "react";
import HTMLFlipBook from "react-pageflip";
import "./styles.css";
// import "./style.css";
import { flipData } from "./data";
// import TextImg from "../../assets/imgs/some_random_text.jpg";
// import ImageBlend from "../../assets/imgs/some_blend.jpg";

const FlipPages = () => {
  //  const { FlipData } = flipData;
  return (
    <div>
      <div className="main-page-container">
        <HTMLFlipBook
          showCover={false}
          width={800}
          height={360}
          style={{ margin: "0 auto" }}>
          {/* <img src={ImageBlend} alt='' /> */}
          {flipData.map((data, key) => (
            <div className="demoPage page" key={key}>
              <h2>{data.header}</h2>
              {/* <img src={TextImg} alt='' /> */}
              <p>{data.content}</p>
              <ul>
                <li>{data.bullet01}</li>
                <li>{data.bullet02}</li>
                {/* <li>{data.bullet03}</li>
                <li>{data.bullet04}</li>
                <li>{data.bullet05}</li> */}
              </ul>
            </div>
          ))}
        </HTMLFlipBook>
      </div>
    </div>
  );
};

export default FlipPages;
