import Filter from './components/Filter';
import { ContactList } from './components/ContactList';
import ContactForm from './components/ContactForm';
import { Container, Section, H1, H2 } from './components/BasicStyledComponents';
import { useGetAllContactsQuery } from './redux/app';
import { Toaster } from 'react-hot-toast';

export default function App() {
  const { isLoading, isSuccess } = useGetAllContactsQuery();

  return (
    <Container>
     
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

      {/* {isError && <p>Thomething went wrong. Try again</p>} */}

<Toaster/>
    </Container>
  );
}
