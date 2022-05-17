import ContactItem from '../ContactIItem';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useGetAllContactsQuery } from '../../redux/app';
import { useMemo } from 'react';
const StyledList = styled.ul`
  width: 100%;
  max-width: 440px;
  margin: 0 auto;
`;

export const ContactList = () => {
  const {
    data: contacts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllContactsQuery();

  const filter = useSelector(state => state.filter);

  const getVisibleContacts = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();

    return contacts?.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }, [contacts, filter]);

  if (isLoading) {
    return <p>...Loading contacts</p>;
  }

  if (isSuccess && contacts) {
    return (
      <StyledList>
        {getVisibleContacts.map(c => (
          <ContactItem key={c.id} contact={c} />
        ))}
      </StyledList>
    );
  }

  if (isError) {
    return <p>{error.message}</p>;
  }
};
