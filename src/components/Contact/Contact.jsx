import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { useDispatch } from "react-redux";
import s from './Contact.module.css';
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.item}>
      <div className={s.container}>
        <p className={s.name}><IoPerson />{name}</p>
        <p className={s.number}><FaPhone />{number}</p>
      </div>
      <button className={s.button} onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </li>
  )

};

export default Contact;