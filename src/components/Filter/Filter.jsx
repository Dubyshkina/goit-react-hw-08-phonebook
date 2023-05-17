import s from '../Filter/Filter.module.css';

import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterReducer';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <label htmlFor="filter">
        <input
          className={s.input}
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={e => dispatch(changeFilter(e.target.value))}
          required
        />
      </label>
    </>
  );
};
