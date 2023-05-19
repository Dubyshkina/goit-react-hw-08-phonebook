import { registerUser } from 'redux/operations';
import s from './RegisterForm.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';


const AuthForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name:'',
    email:'',
    password:'',
  })
  const handleChange = e =>{
    const {name, value} = e.target;
    setForm(prev => ({...prev, [name]: value}) )
  }
  const handleSubmit = e => {
    e.preventDefault();
  dispatch(registerUser(form));
    
    
  }
  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label htmlFor="email" className={s.label}>
        Name
      </label>
      <input
        onChange={handleChange}
        className={s.input}
        type="text"
        name="name"
        value={form.name}
        title=""
        placeholder='Enter your first name...'
      />
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
        Register
      </button>
    </form>
  );
};
export default AuthForm;