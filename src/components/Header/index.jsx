import './header.css';
import {Link} from 'react-router-dom';

function Header(){
    return(
        <div>
            <header>
               <Link className="logo" to="/">UCM IF</Link>
               <Link className='login' to="/login">LOGIN</Link>
               <Link className="favoritos" to="/favoritos">Meus Filmes</Link>
            </header>
        </div>
    )
}
export default Header;