import propTypes from 'prop-types';
import Filter from 'components/Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import {deleteContacts} from '../../redux/contacts/contacts-operations';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import { Inner, Title, Wrapper, Button, PersonBadge, TelephonePlus,  XCircle } from './ContactList.styled';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

export const ContactList = () => {
  
  const filteredContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  const onDeleteButton = id => dispatch(deleteContacts(id));

  return (
    <>
      {filteredContacts.length > 0 &&
        <><Inner>
          {filteredContacts.length > 1 &&
            <Filter />}
      </Inner><Inner>
          <Title>Added contacts</Title>
          <ul>
           <TransitionGroup className="todo-list">
              {filteredContacts.map(({ id, name, number }) => (
                <CSSTransition
                  key={id}
                  timeout={500}
                  classNames="item"
                >
               <li key={id}>
                  <Wrapper>
                    <PersonBadge /> <Title>{name} </Title>  <TelephonePlus /> <Title>{number}</Title>
                    <Button type="button" onClick={() => onDeleteButton(id)}>
                      <XCircle />
                    </Button>
                  </Wrapper>
                  </li>
                </CSSTransition>
              ))}
               </TransitionGroup>
            </ul>
          </Inner></>
      }
    </>
  );
}

ContactList.propTypes = {
  onDeleteBtn: propTypes.func,
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string,
      name: propTypes.string,
      number: propTypes.string,
    }),
  ),
};
