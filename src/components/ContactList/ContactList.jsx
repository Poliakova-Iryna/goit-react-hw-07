import {  useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactSlice';
import s from './ContactList.module.css';
import Contact from '../Contact/Contact';

export const ContactList = () => {

  const filteredData =  useSelector(selectFilteredContacts);

  return (
    <ul className={s.wrapper}>
      {filteredData.map(contact => (
        <Contact {...contact} key={contact.id} />
      ))}
    </ul>
  )
};