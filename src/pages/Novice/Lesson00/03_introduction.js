import "../../../App.css";
import React, { useState } from "react";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { LoremIpsum } from "react-lorem-ipsum";
// const Div = styled("div")``;
export default (props) => {
  const pgTitle = "Introduction - Why It Matters?";
  return (
    <section className="container">
      <h2 className="pgTitle">{pgTitle}</h2>
      <div className="container-lg">
        <div>
          <p>
            Meth labs are often found in remote areas. As an environmental
            hazard, the byproducts of meth labs contaminate their surroundings
            with harmful fumes and highly explosive chemical compounds.
          </p>
          <p>
            Abandoned meth labs are basically time bombs, waiting for an
            ignition source that can ignite the contents of the lab.
          </p>
          <p>
            This is just one example of a situation you may encounter; however,
            the same principles apply.
          </p>
        </div>
        <div className="split-container">
          <p>As a first responder, it is imperative that you possess:</p>
          <ul>
            <li>
              thorough knowledge-base of detection equipment and their
              capabilities.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
