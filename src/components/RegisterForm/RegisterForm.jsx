import Title from 'components/Title/Title';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import { Wrapper, Button, Inner, Form, Input, Label,  } from './RegisterForm.styled';

export default function RegisterForm() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  
  const handleSubmit = e => {
    e.preventDefault();

    const user = { name, email, password };
    dispatch(authOperations.register(user));

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Inner>
      <Wrapper>
        <Title>Register new user</Title>
        <Form >
          <Label>
          Name
        <Input
          type="Name"
          name="Name"
          id="name"
          value={name}
          onChange={({ target: { value } }) => setName(value)}
          placeholder="Your name"
          aria-label="Input for your name"
          required
        />
          </Label>
          
        <Label>
          Email
        <Input
          type="email"
          name="email"
          value={email}
           onChange={({ target: { value } }) => setEmail(value)}
          placeholder="Your e-mail"
          aria-label="Input for your email"
          required
        />
      </Label>

      <Label>
        Password
        <Input
          type="password"
          name="password"
          value={password}
          onChange={({ target: { value } }) => setPassword(value)}
          placeholder="Your password"
          aria-label="Input for your password"
          required
        />
          </Label>
                  
          <Button type="submit" onClick={e => handleSubmit(e)}
          >
          Register
        </Button>
      </Form>
    </Wrapper>
    </Inner>
  );
};

RegisterForm.propTypes = {
  onLogin: PropTypes.func,
};
