import React from "react";
import "../style/componet.css";
import imagen from "../img/logo.png";
export default function Formulario() {
  return (
    <form className="box_form" action="">
      <div className="Form_logo">
        <img className="form_img_logo" src={imagen} alt="" />
      </div>
      <input
        placeholder="Ingresa tu email"
        className="input_form"
        type="text"
      />
      <input
        placeholder="Ingresa tu password"
        className="input_form"
        type="password"
      />
      <button className="Button_form">login</button>
    </form>
  );
}
