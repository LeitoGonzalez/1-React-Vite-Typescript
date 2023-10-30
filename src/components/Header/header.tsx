import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand onClick={()=>navigate('/')}>El Buen Sabor</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link onClick={()=>navigate('/sobrenos')}>Sobre Nosotros</Nav.Link>
            <NavDropdown title="Ayuda" id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={()=>navigate('/contacto')}>Contacto</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>navigate('/ubicacion')}>Ubicacion</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Menu
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
