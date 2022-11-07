import "../../../App.css";
import React, { useState } from "react";

import Modal from "../../../components/modal/modal";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { LoremIpsum } from "react-lorem-ipsum";
// const Div = styled("div")``;
export default (props) => {
  const pgTitle = "Infographic";
  const [closeModal, setCloseModal] = useState(true);
  return (
    <section className="container">
      <h2 className="pgTitle">{pgTitle}</h2>

      <div className="container-lg">
        {/* <h2>Select Your Path</h2> */}
        <button
          className="closeModalBtn"
          onClick={() => {
            setCloseModal(false);
          }}>
          Choose Your Path
        </button>
        {closeModal && <Modal openModal={setCloseModal} />}
        {/* <Modal /> */}

        {/* <LoremIpsum p={2} /> */}
      </div>
    </section>
  );
};
