import "../App";
import React, { useState } from "react";
// import "@fontsource/roboto";
// import "@fontsource/roboto/300.css";
// import "@fontsource/roboto/400.css";
// import "@fontsource/roboto/500.css";
// import "@fontsource/roboto/700.css";
import Typography from "@mui/material/Typography";
import { render } from "react-dom";
import { LoremIpsum } from "react-lorem-ipsum";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
//import "../custom.scss";

const Div = styled("div")``;

function Advance() {
     //Project Systems Name table

     return (
          <Container>
               <Typography variant='h5' color='textPrimary' component='h1'>
                    Advance
               </Typography>

               <Div className='container-lg'>
                    <LoremIpsum p={1} />
               </Div>
          </Container>
     );
}

export default Advance;
