import { Container } from '@mui/material';
import { RegistrationForm } from 'components/RegistrationForm';

export const RegistrationPage = () => {
  return (
    <Container component="main" maxWidth="xs">
      <RegistrationForm />
    </Container>
  );
};

export default RegistrationPage;
