import { Routes, Route } from 'react-router-dom';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import './colors.scss';

// Routes
import Landing from './routes/landing/landing';
import Auth from './routes/auth/auth';

// Global Style
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0
  }

  html, body {
    padding: 0;
    margin: 0;
    font-family: 'Ubuntu', sans-serif;
  }

  a {
    text-decoration: none;
  }
`;

const colors = {
  platinum: '#cfdbd5',
  alabaster: '#e8eddf',
  saffron: '#f5cb5c',
  eerie_black: '#242423',
  jet: '#333533',
  red: '#e63946',
  honeydew: '#f1faee',
  photo_blue: '#a8dadc',
  cerulean: '#457b9d',
  berkely_blue: '#1d3557',
};

const AppContainer = styled.div`
  background-color: ${(props) => props.theme.honeydew};
  color: ${(props) => props.theme.eerie_black};
  height: 100vh;
`;

function App() {
  return (
    <ThemeProvider theme={colors}>
      <GlobalStyle />
      <AppContainer>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
