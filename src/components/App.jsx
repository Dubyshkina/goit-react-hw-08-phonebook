import s from 'components/App.module.css';

import { Form } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts.items);
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const checkDuplicate = name =>
    contacts.some(cont => cont.name.toLowerCase() === name.toLowerCase());

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div className={s.container}>
      <div className={s.section}>
        <h2>Phonebook</h2>
        <Form checkDuplicate={checkDuplicate} />
      </div>
      <div className={s.section}>
        <h2>Contacts</h2>
        <Filter />
        <ContactsList contacts={filteredContacts()}></ContactsList>
      </div>
    </div>
  );
};
