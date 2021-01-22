import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";

import StyledHero from "../components/StyledHero";
export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg
    };
  }
  static contextType = RoomContext;

  // componentDidMount() {
  //   console.log(this.props);
  // }
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <h3> No hay habitación disponible...</h3>
          <Link to="/rooms" className="btn-primary">
            volver habitaciones
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
      /*<h6>Tamaño : {size} metros cuadrados</h6> */
    } = room;
    const [main, ...defaultImages] = images;
    console.log(defaultImages);

    return (
      <>
        <StyledHero img={images[0] || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              Volver a habitaciones
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Detalles</h3>
              <div id="espaciadolistil">
                <ul className="extras">
                  {description.map((item, index) => (
                    <li type="disc" key={index}> {item}   </li>

                  ))}
                </ul>
              </div>
            </article>
            <article className="información">
              <h3>Información</h3>
              <h6>Precio : ${price}</h6>

              <h6>
                Capacidad:
                {capacity > 1 ? ` ${capacity} Personas` : `${capacity} Persona`}
              </h6>
              <h6>{pets ? "Permitido mascotas" : "No permitido mascotas"}</h6>
              <h6>{breakfast && "Desayuno gratis incluído"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>Nota </h6>
          <div id="espaciadolistil">
            <ul className="extras">
            {extras.map((item, index) => (
              <li type="disc" key={index}> {item}</li>
            ))}
          </ul>
          </div>
        </section>
      </>

    );
  }
}