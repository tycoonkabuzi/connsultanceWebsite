import Carousel from "react-bootstrap/Carousel";
import car1 from "../assets/car1.jpg";
import car2 from "../assets/car2.jpg";
import car3 from "../assets/car3.jpg";
import car4 from "../assets/car4.jpg";
function CarousselHeader() {
  return (
    <Carousel data-bs-theme="light">
      <Carousel.Item className="carousel-image-wrapper">
        <img className="d-block w-100 " src={car1} alt="First slide" />
        <Carousel.Caption className="centerCaption">
          <h1>Taking Businesses Global Profitably</h1>
          <p>
            With more than four extraordinary decades of successful
            international business experience spanning virtually every corner of
            the world and many business sectors, EGS understands the global
            business landscape like no other. We are uniquely qualified to steer
            executives successfully through the complexities of Going Global
            with the help of our expert international business consulting
            services.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="carousel-image-wrapper">
        <img className="d-block w-100" src={car2} alt="First slide" />
        <Carousel.Caption className="centerCaption">
          <h1>Taking Businesses Global Profitably</h1>
          <p>
            With more than four extraordinary decades of successful
            international business experience spanning virtually every corner of
            the world and many business sectors, EGS understands the global
            business landscape like no other. We are uniquely qualified to steer
            executives successfully through the complexities of Going Global
            with the help of our expert international business consulting
            services.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="carousel-image-wrapper">
        <img className="d-block w-100" src={car3} alt="First slide" />
        <Carousel.Caption className="centerCaption">
          <h1>Taking Businesses Global Profitably</h1>
          <p>
            With more than four extraordinary decades of successful
            international business experience spanning virtually every corner of
            the world and many business sectors, EGS understands the global
            business landscape like no other. We are uniquely qualified to steer
            executives successfully through the complexities of Going Global
            with the help of our expert international business consulting
            services.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="carousel-image-wrapper">
        <img className="d-block w-100" src={car4} alt="First slide" />
        <Carousel.Caption className="centerCaption">
          <h1>Taking Businesses Global Profitably</h1>
          <p>
            With more than four extraordinary decades of successful
            international business experience spanning virtually every corner of
            the world and many business sectors, EGS understands the global
            business landscape like no other. We are uniquely qualified to steer
            executives successfully through the complexities of Going Global
            with the help of our expert international business consulting
            services.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarousselHeader;
