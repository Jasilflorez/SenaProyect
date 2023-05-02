import React from "react";
import "../style/Sesion.css";
import carruselsena from "../img/carruselsena.jpg";
import carruselsena2 from "../img/carruselsena2.jpg";
import carruselsena3 from "../img/carruselsena3.jpg";
export default function Informacion() {
  return (
    <div className="Box_Estudiante">
      <div className="Barra_aside">
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
            >
              <div className="accordion-body">
                <strong>EN REPARACION</strong> <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
                distinctio numquam ad at quasi vero laboriosam non id
                repudiandae, excepturi natus ipsam odit veritatis mollitia
                aliquam similique qui, in eveniet?
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body">
                <strong>EN REPARACION</strong>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Necessitatibus totam rem cumque est consequuntur, ullam error
                repudiandae labore culpa consequatur maxime libero? Odio quae
                porro, natus voluptatibus tempora sint aperiam.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body">
                <strong>EN REPARACION</strong>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                sapiente optio voluptate atque fuga quam est qui, sit minus
                corporis eaque facilis, facere dolorum, distinctio eum doloribus
                minima labore! Aperiam.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="TD_Estudiante">
        <div className="Infor_Main">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={carruselsena} className="imagenCarrusel" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={carruselsena2} className="imagenCarrusel" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={carruselsena3} className="imagenCarrusel" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
