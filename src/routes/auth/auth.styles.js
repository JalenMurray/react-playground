import { Button } from 'react-bootstrap';
import styled from 'styled-components';

export const AuthPageContainer = styled.div``;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SwitchContainerRight = styled.div`
  background-color: ${(props) => props.theme.red};
  color: ${(props) => props.theme.honeydew};
`;

export const SwitchContainerLeft = styled.div`
  background-color: ${(props) => props.theme.red};
  color: ${(props) => props.theme.honeydew};
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
`;

export const ExternalButtonsContainer = styled.div`
  display: flex;
`;

export const ExternalButton = styled.div`
  border: 2px solid ${(props) => props.theme.red};
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
`;

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
