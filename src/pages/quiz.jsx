import Menu from "./Menu";
import { Link } from 'react-router-dom';

function Quiz() {
  return (
    <div>      
      <Menu />
      <p>QUIZ APP</p>
      <div className="button-container">
        <Link to="Accueil">
          <button className="button">Accueil</button>
        </Link>
      </div>
    </div>
  );
}

export default Quiz;
