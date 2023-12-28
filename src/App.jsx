import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from "./pages/quiz";
import Accueil from "./pages/Accueil";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Quiz />} />
          <Route path="Accueil" element={<Accueil/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App