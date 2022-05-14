import Filter from '../../components/Filter';
import { ContactList } from '../../components/ContactList';
import ContactForm from '../../components/ContactForm';
import { Section, H1, H2 } from '../../components/BasicStyledComponents';
import { useGetAllContactsQuery } from '../../redux/app';

export const PhoneBookPage = () => {
  const { isLoading, isSuccess } = useGetAllContactsQuery();

  return (
    <main>
      <H1>Phone book</H1>

      <ContactForm />

      {isLoading && <p>...Loading</p>}

      {isSuccess && (
        <Section>
          <H2>Сontacts</H2>
          <Filter />
          <ContactList />
        </Section>
      )}
    </main>
  );
};

export default PhoneBookPage;
