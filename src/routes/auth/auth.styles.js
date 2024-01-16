import { Button } from 'react-bootstrap';
import styled, { keyframes } from 'styled-components';
import { Google, Facebook, LinkedIn } from '@mui/icons-material';

export const AuthPageContainer = styled.div`
  display: flex;

  h1 {
    font-size: 4rem;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  justify-content: center;
  align-items: center;
`;

export const SwitchContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.red};
  color: ${(props) => props.theme.honeydew};
  width: 50vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1,
  p {
    padding: 15px;
  }
`;

export const SwitchContainerLeft = styled(SwitchContainer)`
  border-radius: 0 150px 150px 0;
`;

export const SwitchContainerRight = styled(SwitchContainer)`
  border-radius: 150px 0 0 150px;
`;

export const SwitchButton = styled(Button)`
  border: 1px solid ${(props) => props.theme.honeydew};
  color: ${(props) => props.theme.honeydew};

  &:hover {
    background-color: ${(props) => props.theme.honeydew};
    color: ${(props) => props.theme.red};
  }
`;

export const AuthButton = styled(Button)`
  color: ${(props) => props.theme.honeydew};
  width: 5vw;
  margin: 20px;
  border: solid 2px;
  border-radius: 7px;

  &:hover {
    background-color: ${(props) => props.theme.honeydew};
    color: ${(props) => props.theme.red};
  }
`;

export const ExternalButtonsContainer = styled.div`
  display: flex;
  margin: 20px;
`;

export const ExternalButton = styled.div`
  border: 2px solid ${(props) => props.theme.red};
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.red};
    color: ${(props) => props.theme.honeydew};
  }

  &:active {
    background-color: ${(props) => props.theme.honeydew};
    color: ${(props) => props.theme.red};
  }
`;

export const AuthContainer = styled.div`
  height: 100vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const FormInput = styled.input`
  width: 20vw;
  height: 4vh;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
`;
