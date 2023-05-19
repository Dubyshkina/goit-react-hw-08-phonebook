import { Link } from "react-router-dom";
import s from './AuthForm.module.css';
export const AuthForm=()=> {
  return (

    <div className={s.container}>
      <Link className={s.link}
        to="/register" >
        Sign up
      </Link>
      <Link className={s.link}
        to="/login" >
        Log in
      </Link>
    </div>
  );
}