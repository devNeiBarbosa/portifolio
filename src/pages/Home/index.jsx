import { WppIcon } from './style';
import whatsapp from '/assets/whatsapp-icon.svg';

import AboutMe from '../../components/AboutMe';
import Expertise from '../../components/Expertise';
import Form from '../../components/Form';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Projects from '../../components/Projects';
import Skills from '../../components/Skills';

function App() {
  return (
    <>
      <Header />
      <Main />
      <AboutMe />
      <Skills />
      <Expertise />
      <Projects />
      <Form />
      <WppIcon>
        <a href='https://wa.me/message/DBN2KDY5BI2GN1' target="_blank"><img src={whatsapp} alt="whatsapp icon" /></a>
      </WppIcon>
    </>
  )
}

export default App;