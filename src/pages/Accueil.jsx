import Menu from "./Menu";
import { Link } from 'react-router-dom';



function Accueil() {
  return (
    <div className="accueil-container">
      <Menu />
      <div className="text">Voce está entrando no divertido mundo do Quiz App. <br /> Clique no botão abaixo e teste seus conhecimentos em linguagens de programação.
      </div>
      <div className="button-container">
        <Link to="/">
          <button className="button">Ir para Quiz</button>
        </Link>
      </div>
    </div>
  );
}

export default Accueil