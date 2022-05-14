import ContactItem from '../ContactIItem';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { contactsApi } from '../../redux/app/contacts';

const StyledList = styled.ul`
  width: 100%;
  max-width: 440px;
  margin: 0 auto;
`;

export const ContactList = () => {
  const { data: contacts } = useSelector(
    contactsApi.endpoints.getAllContacts.select()
  );
  const filter = useSelector(state => state.filter);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <StyledList>
      {getVisibleContacts().map(c => (
        <ContactItem key={c.id} contact={c} />
      ))}
    </StyledList>
  );
};
