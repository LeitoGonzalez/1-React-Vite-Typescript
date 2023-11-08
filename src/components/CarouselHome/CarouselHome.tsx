import Carousel from "react-bootstrap/Carousel";

const CarouselHome = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ maxHeight: "500px", objectFit: "cover" }}
          src="public/carousel1.jpeg"
          alt=""
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ maxHeight: "500px", objectFit: "cover" }}
          src="public/carousel2.jpeg"
          alt=""
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ maxHeight: "500px", objectFit: "cover" }}
          src="public/carousel3.png"
          alt=""
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselHome;
