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
      <label htmlFor="loginEmail">
        Email:
        <input
          placeholder="provide email adress"
          id="loginEmail"
          type="email"
          name="email"
          value={email}
          onChange={nandleChange}
        />
      </label>

      <label htmlFor="loginPassword">
        Password:
        <input
          placeholder="provide no less than 7 symbol"
          id="loginPassword"
          type="password"
          name="password"
          value={password}
          onChange={nandleChange}
        />
      </label>

      <button type="subbmit">Log in</button>
    </form>
  );
};
