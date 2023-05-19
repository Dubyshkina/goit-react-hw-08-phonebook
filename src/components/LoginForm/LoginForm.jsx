import { useDispatch } from "react-redux";

import { loginUser } from "redux/operations";
import s from './LoginForm.module.css';
import { useState } from "react";

const LoginForm = () => {
    const dispatch = useDispatch();
    const [form, setForm] = useState({
      email:'',
      password:'',
    })
    const handleChange = e =>{
      const {name, value} = e.target;
      setForm(prev => ({...prev, [name]: value}) )
    }
    const handleSubmit = e => {
      e.preventDefault();
    dispatch(loginUser(form));
      
      
    }
    return (
      <form onSubmit={handleSubmit} className={s.form}>

        <label htmlFor="email" className={s.label}>
          Email
        </label>
        <input
          onChange={handleChange}
          className={s.input}
          type="text"
          name="email"
          value={form.email}
          title=""
          placeholder='Enter your email...'
        />
        <label htmlFor="password" className={s.label}>
          Password
        </label>
        <input
          onChange={handleChange}
          className={s.input}
          type="text"
          name="password"
          value={form.password}
          title=""
          placeholder='Enter your password...'
        />
        <button type="submit" className={s.btn}>
          Log In
        </button>
      </form>
    );
  };
  export default LoginForm;