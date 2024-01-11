import Menu from "./Menu";
import { Link } from 'react-router-dom';

function Accueil() {
  return (
    <div className="accueil-container">
      <Menu />
      <div className="text">Vous entrez dans le monde amusant de Quiz App. <br /> Cliquez sur le bouton ci-dessous et testez vos connaissances en langages de programmation.
      </div>
      <div className="button-container">
        <Link to="/quiz">
          <button className="button">Ir para Quiz</button>
        </Link>
      </div>
    </div>
  );
}

export default Accueil