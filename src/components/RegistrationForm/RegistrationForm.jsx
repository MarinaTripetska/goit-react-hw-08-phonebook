import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/app/authorization';

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'name') {
      setName(value);
    }
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.register({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">
        Your name:
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <br />
      <label htmlFor="">
        Your email:
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label htmlFor="">
        Your password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>

      <button type="subbmit">Register</button>
    </form>
  );
};
