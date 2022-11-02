import Navbar from "./components/navbar/navbar"
import f1 from "./assets/snipez.jpg"
import 'flowbite';

import { Route, Routes } from "react-router-dom";

import { useNavegacion } from "./hooks/usenavigation";

import { Menu } from "./views/menu";
import { Productos } from "./views/Productos";
import { Usuarios } from "./views/Usuarios";
import { Ventas } from "./views/Ventas";


export default function App() {
  const {NAV} = useNavegacion();



  return (
    
<div>


<Navbar imagen={f1} navigations={NAV} />
<Routes>

  <Route path="/Menu" element={ <Menu/>}></Route> 
  <Route path="/Productos" element={ <Productos/>}></Route>
  <Route path="/Usuarios" element={ <Usuarios/> }></Route>
  <Route path="/Ventas" element={ <Ventas/> }></Route>




</Routes>


</div>
    
  )
}

<script src="../path/to/flowbite/dist/flowbite.js"></script>