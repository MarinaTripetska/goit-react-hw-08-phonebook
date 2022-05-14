import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/app/authorization';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const nandleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.logIn({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" value={email} onChange={nandleChange} />
      <input
        type="password"
        name="password"
        value={password}
        onChange={nandleChange}
      />

      <button type="subbmit">Log in</button>
    </form>
  );
};
