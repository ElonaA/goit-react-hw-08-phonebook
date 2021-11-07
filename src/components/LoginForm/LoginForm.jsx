import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import { Wrapper, Button, Inner, Form, Input, Label,  } from './LoginForm.styled';
import Title from 'components/Title/Title';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.logIn({ email, password }));
  };

  return (
    <Inner>
      <Wrapper>
        <Title>Login in your account</Title>
      <Form >
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
          Log in
        </Button>
      </Form>
    </Wrapper>
    </Inner>
  );
};

LoginForm.propTypes = {
  onLogin: PropTypes.func,
};
