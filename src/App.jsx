import './App.css';
import RouterBar from './componentes/RouterBar';
import Footer from './componentes/Footer';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    margin:0;
  }
`;
function App() {
  return (
    <>  
      <GlobalStyle/>
      <RouterBar />
      <Footer />
    </>
  );
}

export default App;
