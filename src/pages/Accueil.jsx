import Menu from "./Menu";
import { Link } from 'react-router-dom';



function Accueil() {
    return (
        <div className="accueil-container">
          <Menu />
            <p>Voce está entrando no divertido mundo do Quiz App, uma aplicação onde você poderá testar seus conhecimentos.</p>
            <Link to="/">
            <button>Ir para Quiz</button>   
            </Link>     
        </div>
      );
    }

export default Accueil