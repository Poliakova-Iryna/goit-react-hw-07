import ContactForm from "./components/ContactForm/ContactForm";
import { SearchBox } from './components/SearchBox/SearchBox';
import { ContactList } from "./components/ContactList/ContactList";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectIsLoading } from './redux/contactSlice.js';
import { fetchContacts } from "./redux/contactsOps.js";

const App = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])
  
  return (
  <div>
    <h1>Phonebook</h1>
    <ContactForm /> 
    <SearchBox />
    {isLoading && <h3>Loading...</h3>}
    <ContactList /> 
  </div>
  )
}

export default App;