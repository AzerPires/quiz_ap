import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Accueil from "./pages/Accueil";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="Accueil" element={<Accueil/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App