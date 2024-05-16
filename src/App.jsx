import NavBar from "./components/Navbar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import '../src/App.jsx'

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={ <ItemListContainer saludo="Bienvenidos!!" /> } />
        <Route path="/category/:idCategory" element={ <ItemListContainer saludo="Bienvenidos!!" /> } />
        <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
