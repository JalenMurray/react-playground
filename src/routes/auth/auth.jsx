import { Google, Facebook, LinkedIn } from '@mui/icons-material';
import {
  AuthPageContainer,
  FormContainer,
  FormInput,
  AuthButton,
  SwitchContainerLeft,
  SwitchContainerRight,
  SwitchButton,
  ExternalButtonsContainer,
  ExternalButton,
  AuthContainer,
} from './auth.styles';
import { useState, Fragment } from 'react';

const getButtonType = (buttonType) =>
  ({
    google: Google,
    facebook: Facebook,
    linkedin: LinkedIn,
  }[buttonType]);

const Button = ({ buttonType }) => {
  const CustomButton = getButtonType(buttonType);
  const [hovered, setHovered] = useState(false);

  const unhoverProps = {
    fontSize: '40px',
    color: 'red',
  };

  const hoverProps = {
    fontSize: '40px',
    color: 'white',
  };

  return (
    <ExternalButton
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseDown={() => setHovered(false)}
      onMouseUp={() => setHovered(true)}
    >
      <CustomButton style={hovered ? hoverProps : unhoverProps} />
    </ExternalButton>
  );
};

const Auth = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [signIn, setSignIn] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <AuthPageContainer>
      {signIn && (
        <Fragment>
          <AuthContainer>
            <h1>Sign In</h1>
            <ExternalButtonsContainer>
              <Button buttonType={'google'} />
              <Button buttonType={'facebook'} />
              <Button buttonType={'linkedin'} />
            </ExternalButtonsContainer>
            or use your email and password
            <FormContainer>
              <FormInput name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" />
              <FormInput
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
              />
              <a href="/auth">Forgot your password?</a>
              <AuthButton variant="red">SIGN IN</AuthButton>
            </FormContainer>
          </AuthContainer>
          <SwitchContainerRight>
            <h1>Welcome to APPNAME!</h1>
            <p>If you don't have an account, register to use all of the features APPNAME provides</p>
            <SwitchButton variant="red" onClick={() => setSignIn(false)}>
              SIGN UP
            </SwitchButton>
          </SwitchContainerRight>
        </Fragment>
      )}
      {!signIn && (
        <Fragment>
          <SwitchContainerLeft>
            <h1>Welcome Back!</h1>
            <p>Sign in to use all of the features APPNAME provides</p>
            <SwitchButton variant="red" onClick={() => setSignIn(true)}>
              SIGN IN
            </SwitchButton>
          </SwitchContainerLeft>
          <AuthContainer>
            <h1>Create Account</h1>
            <ExternalButtonsContainer>
              <Button buttonType={'google'} />
              <Button buttonType={'facebook'} />
              <Button buttonType={'linkedin'} />
            </ExternalButtonsContainer>
            or use your email to sign up
            <FormInput name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" />
            <FormInput
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
            />
            <FormInput
              name="confirmpassword"
              type="password"
              value={formData.confirmpassword}
              onChange={handleChange}
              placeholder="Confirm Password"
            />
            <AuthButton variant="red">SIGN UP</AuthButton>
          </AuthContainer>
        </Fragment>
      )}
    </AuthPageContainer>
  );
};

export default Auth;
