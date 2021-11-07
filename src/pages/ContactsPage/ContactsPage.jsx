import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/contacts-operations';
import { getLoading } from '../../redux/contacts/contacts-selectors';


import Preloader from '../../components/Loader/Loader';
import { ContactList } from 'components/ContactList/ContactList';
import  ContactForm  from 'components/ContactForm/ContactForm';

import { Inner, Wrapper, Title } from './ContactsPage.styled';



const ContactsPage = () => {
  const loading = useSelector(getLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  return (
    <Inner>
      <Wrapper>
        <Title>Add contacts</Title>
        <ContactForm  />
      </Wrapper>
      {loading ? (
        <Preloader />
      ) : null}

      <ContactList />    
    </Inner>
  );
}

export default ContactsPage;