import { Container } from "react-bootstrap";
import Header from "./components/Header/header";
import { Suspense } from "react";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import Loader from "./components/Loader/Loader";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Container style={{ minHeight: "100vh", minWidth: "100%", padding: "0" }}>
          <Suspense fallback={<Loader/>}>
            <AppRoutes />
          </Suspense>
        </Container>
        
      </Router>
    </>
  );
}

export default App;
