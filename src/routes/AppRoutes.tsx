import {Route, Routes} from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import Menu from "../pages/Menu";
import SobreNos from "../pages/SobreNos";
import Componentes from "../pages/Componentes";



const AppRoutes: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/sobrenos" element={<SobreNos/>}/>
        <Route path="/componentes" element={<Componentes/>}/>
    </Routes>
  )
}

export default AppRoutes;