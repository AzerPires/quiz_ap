import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from "./pages/quiz";
import Accueil from "./pages/Accueil";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="Quiz" element={<Quiz/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App