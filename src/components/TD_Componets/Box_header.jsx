import React from "react";
import "../style/componet.css";
import RutasModulo from "./RutasModulo";
import SenaM from "../img/senaMalambo.png";
export default function Box_header() {
  return (
    <div id="TD_header">
      <img id="senaMalambo" src={SenaM} alt=""/>
      <RutasModulo />
    </div>
  );
}
