import { Google, Facebook, LinkedIn } from '@mui/icons-material';
import {
  AuthPageContainer,
  FormContainer,
  AuthButton,
  SwitchContainerRight,
  SwitchContainerLeft,
  SwitchButton,
  ExternalButtonsContainer,
  ExternalButton,
  SignInContainer,
  SignUpContainer,
} from './auth.styles';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

const Auth = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <SignInContainer>
        <h1>Sign In</h1>
        <ExternalButtonsContainer>
          <ExternalButton>
            <Google style={{ fontSize: '40px', color: 'red' }} />
          </ExternalButton>
          <ExternalButton>
            <Facebook style={{ fontSize: '40px', color: 'red' }} />
          </ExternalButton>
          <ExternalButton>
            <LinkedIn style={{ fontSize: '40px', color: 'red' }} />
          </ExternalButton>
        </ExternalButtonsContainer>
        or use your email and password
        <FormContainer>
          <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" />
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
          <a href="/auth">Forgot your password?</a>
          <AuthButton variant="red">SIGN IN</AuthButton>
        </FormContainer>
      </SignInContainer>
      <SwitchContainerRight>
        <h1>Welcome to (APPNAME)!</h1>
        If you don't have an account, register to use all of the features (APPNAME) provides
        <SwitchButton variant="red">SIGN UP</SwitchButton>
      </SwitchContainerRight>
      <SwitchContainerRight>
        <h1>Welcome Back!</h1>
        Sign in to use all of the features (APPNAME) provides
        <SwitchButton variant="red">SIGN IN</SwitchButton>
      </SwitchContainerRight>
      <SignUpContainer>
        <h1>Create Account</h1>
        <ExternalButtonsContainer>
          <ExternalButton>
            <Google style={{ fontSize: '40px', color: 'red' }} />
          </ExternalButton>
          <ExternalButton>
            <Facebook style={{ fontSize: '40px', color: 'red' }} />
          </ExternalButton>
          <ExternalButton>
            <LinkedIn style={{ fontSize: '40px', color: 'red' }} />
          </ExternalButton>
        </ExternalButtonsContainer>
        or use your email to sign up
        <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <input
          name="confirmpassword"
          type="password"
          value={formData.confirmpassword}
          onChange={handleChange}
          placeholder="Confirm Password"
        />
        <AuthButton variant="red">SIGN UP</AuthButton>
      </SignUpContainer>
    </div>
  );
};

export default Auth;
