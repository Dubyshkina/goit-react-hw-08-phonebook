import s from './Navigation.module.css';
import { Link } from "react-router-dom";

 const Navigation = () => {


    return <header>
        <nav>
      <div className={s.container}>
      <Link className={s.link} to="/">
        Home
      </Link>
        <Link className={s.link} to="/contacts">
          Phonebook
        </Link>
        </div>
        </nav>
    </header>
        }
export default Navigation;