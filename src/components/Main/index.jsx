import Buttons from '../../components/Buttons'
import { Main, Icons } from './Main'
import linkedin from '/assets/linkedin-icon.svg';
import github from '/assets/github-icon.svg';
import profile from '/assets/profile.png';
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';

function MainInfo() {
  // 1. Referências e visibilidade de seções
  const mainRef = useRef(null);
  const { ref: mainInViewRef, inView: isMainVisible } = useInView({ threshold: 0.1, triggerOnce: false });
  
  // 2. Estados globais
  const projectsRef = useRef(null);

  // 3. Funções de scroll
  const scrollProjects = (event) => {
    event.preventDefault();
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Main id='main' ref={mainRef}>
      <div className={`container-left ${isMainVisible ? 'animate-left' : ''}`} ref={mainInViewRef}>
        <div className='my-info'>
          <h1>Nei <span>Barbosa</span></h1>
          <h3>Developer Front End</h3>
        </div>

        <p>Olá, seja muito bem-vindo(a)! Sinta-se à vontade para explorar e descobrir mais sobre o meu trabalho.
          Este espaço foi criado com carinho para apresentar minhas habilidades e projetos. Aproveite a visita!</p>

        <Buttons className='buttons'>
          <button className='button-one'><a href='https://drive.google.com/file/d/1IcwSVHE6IwQ9TQOZAcaxNtst_AxqidN9/view?usp=drive_link' target='_blank'>Baixar CV</a></button>
          <button className='button-two'><a href='#projects' onClick={()=> scrollProjects}>Meus Projetos</a></button>
        </Buttons>

        <Icons className='social-media'>
          <p className='p'>Minhas Redes:</p>
          <a href='https://www.linkedin.com/in/dev-neibarbosa/' target='_blank'>
            <img src={linkedin} alt='ícone linkedin' className='linkedin' />
          </a>

          <a href='https://github.com/devNeiBarbosa' target="_blank">
            <img src={github} alt='ícone github' className='github' />
          </a>
        </Icons>
      </div>

      <div className={`container-right ${isMainVisible ? 'animate-right' : ''}`}>
        <img src={profile} alt='profile' />
      </div>
    </Main>
  )
}

export default MainInfo;