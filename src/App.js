import Catatgory from './components/Catatgory';
import {BrowserRouter} from 'react-router-dom'
import './main.css'; 
import Pages from './pages/Pages';
import Search from './components/Search';
import styled from 'styled-components';
import { GiKnifeFork } from 'react-icons/gi';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Nav>
        <GiKnifeFork/>
        <Logo to={"/"}>Ahamd Yaser</Logo>
      </Nav>
      <Search/>
      <Catatgory/>
     <Pages/>
     </BrowserRouter> 
    </div>
  );
}
 const Logo =styled.div`
 text-decoration: none;
 font-size: 1.5rem;
 font-weight: 400;

 `
 const Nav =styled.div`
 padding: 4rem 0rem;
 display: flex;
 justify-content: flex-start;
 align-items: center;
 svg{
  font-size: 1.5rem;
  margin-right: 1rem;
 }
 `

export default App;
