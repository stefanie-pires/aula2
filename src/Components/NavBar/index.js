import { Link } from 'react-router-dom';
import './index.css'

function NavBar() {
    return (
        <>
        <Link className='nav'>Menu</Link>
        <a href='/'><button>Primeiro</button></a>
        <a href='/segundo'><button>Segundo</button></a>
        <a href='/terceiro'><button>Terceiro</button></a>
        </>
    );
}
export default NavBar;