import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";

export const Cards = () => {
  return (
    <Stack
      direction="horizontal"
      gap={4}
      style={{ justifyContent: "center", alignItems: "start" }}
    >
      <Card style={{ width: "18rem", padding: "8px" }}>
        <img
          className="d-block w-100"
          style={{
            maxHeight: "160px",
            objectFit: "cover",
            borderRadius: "5px",
          }}
          src="src/assets/images/item1.jpg"
          alt=""
        />
        <Card.Body>
          <Card.Title>Hamburguesa re loca</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Comprar</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem", padding: "8px" }}>
        <img
          className="d-block w-100"
          style={{
            maxHeight: "160px",
            objectFit: "cover",
            borderRadius: "5px",
          }}
          src="src/assets/images/item2.jpg"
          alt=""
        />
        <Card.Body>
          <Card.Title>Hamburguesa picante</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Comprar</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem", padding: "8px" }}>
        <img
          className="d-block w-100"
          style={{
            maxHeight: "160px",
            objectFit: "cover",
            borderRadius: "5px",
          }}
          src="src/assets/images/item3.jpg"
          alt=""
        />
        <Card.Body>
          <Card.Title>Hamburguesa de pollo</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Comprar</Button>
        </Card.Body>
      </Card>
    </Stack>
  );
};
export default Cards;
