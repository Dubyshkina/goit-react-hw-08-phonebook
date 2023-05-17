import PropTypes from 'prop-types';
import s from '../ContactsList/ContactsList.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ContactsList = ({ contacts }) => {
  const dispatch = useDispatch();
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, phone }) => {
        return (
          <li key={id}>
            <span>{name}: </span>
            <span>{phone}</span>
            <button
              className={s.btn}
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
ContactsList.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      phone: PropTypes.string,
    })
  ),
};
