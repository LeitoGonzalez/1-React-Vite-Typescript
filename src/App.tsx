import Header from "./components/Header/header";

import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
          <AppRoutes/>
      </Router>
    </>
  );
}

export default App;
