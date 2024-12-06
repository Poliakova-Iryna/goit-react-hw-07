import {  useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactSlice';
import s from './ContactList.module.css';
import Contact from '../Contact/Contact';

export const ContactList = () => {

  const contacts = useSelector(selectContacts);
  {/*const filter = useSelector(selectNameFilter);
  const filteredData = contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));*/}

  return (
    <ul className={s.wrapper}>
      {contacts.map(contact => (
        <Contact {...contact} key={contact.id} />
      ))}
    </ul>
  )
};