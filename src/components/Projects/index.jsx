import portifolio from '/assets/portifolio-img.png';
import meowCafe from '/assets/meow-cafe-img.png';
import valorant from '/assets/valorant-points-img.png';
import cadastro from '/assets/cadastrar-usuarios-img.png';
import jokenpo from '/assets/game-jokenpo-img.png';
import conversor from '/assets/conversor-img.png';
import sorteador from '/assets/sorteador-img.png';
import encanadores from '/assets/irmaos-encanadores-img.png';
import html5 from '/assets/icon-html5.png';
import css3 from '/assets/icon-css3.png';
import js from '/assets/icon-js.png';
import react from '/assets/icon-react.png';
import node from '/assets/icon-node.png';
import { Projects, Title } from './Projects'
import Buttons from '../../components/Buttons'
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';


const MyProjects = () => {
  // 1. Referências e visibilidade de seções
  const projectsRef = useRef(null);
  const { ref: projectsInViewRef, inView: isProjectsVisible } = useInView({ threshold: 0.1 });

  return (
    <Projects id='projects' ref={projectsRef}>
        <Title className={`title ${isProjectsVisible ? 'animate-left' : ''}`} ref={projectsInViewRef}>
          <h2>Meus Projetos</h2>
        </Title>

        <section className={`my-projects ${isProjectsVisible ? 'animate-jump' : ''}`} ref={projectsInViewRef}>

        <div className='hover portifolio'> {/* Portifolio */}       
            <div className='info-lading-page'>
              <img src={portifolio} alt="page model" className='page'/>
              <h3>Portifólio</h3>
              <Buttons className='redirect-buttons'>
                <button className='button-one'><a href='https://devneibarbosa.github.io/portifolio/' target="_blank">Web Site</a></button>
                <button className='button-two'><a href='https://github.com/devNeiBarbosa/portifolio' target="_blank">Repositório</a></button>
              </Buttons>
            </div>
            <div className='hover-active'>
              <p>Meu Portifólio.</p>
              <p>Projeto desenvolvido com o objetivo de aprimorar e consolidar minhas habilidades em React, além de apresentar meus projetos de maneira mais profissional.</p>
              <div className='tech-used'>
                <img src={react} alt="icon React" className="react" width="50px"/>
              </div>
            </div>
          </div>

          <div className='hover'>  {/* Meow Café */}         
            <div className='info-lading-page'>
              <img src={meowCafe} alt="page model" className='page'/>
              <h3>Meow Café</h3>
              <Buttons className='redirect-buttons'>
                <button className='button-one'><a href='https://devneibarbosa.github.io/Meow-cafeteria/' target="_blank">Web Site</a></button>
                <button className='button-two'><a href='https://github.com/devNeiBarbosa/Meow-cafeteria' target="_blank">Repositório</a></button>
              </Buttons>
            </div>
            <div className='hover-active'>
              <p>Landing Page para uma Cafeteria.</p>
              <p>Projeto criado com o objetivo de consolidar minhas habilidades em HTML5 e CSS3 puros explorandos ao máximo. O JavaScript foi usado minimamente.</p>
              <div className='tech-used'>
                <img src={html5} alt="icon HTML5" width="50px"/>
                <img src={css3} alt="icon CSS3" width="50px"/>
                <img src={js} alt="icon JavaScript" width="50px"/>
              </div>
            </div>
          </div>

          <div className='hover'>  {/* Valorant Points */}         
            <div className='info-lading-page'>
              <img src={valorant} alt="page model" className='page'/>
              <h3>Valorant Points</h3>
              <Buttons className='redirect-buttons'>
                <button className='button-one'><a href='https://devneibarbosa.github.io/Site-Valorant-points/' target="_blank">Web Site</a></button>
                <button className='button-two'><a href='https://github.com/devNeiBarbosa/Site-Valorant-points' target="_blank">Repositório</a></button>
              </Buttons>
            </div>
            <div className='hover-active'>
              <p>Landing Page para venda de VPs.</p>
              <p>Projeto desenvolvido para consolidar habilidades em Front-End, explorando funções do JavaScript como Array e forEach.</p>
              <div className='tech-used'>
                <img src={html5} alt="icon HTML5" width="50px"/>
                <img src={css3} alt="icon CSS3" width="50px"/>
                <img src={js} alt="icon JavaScript" width="50px"/>
              </div>
            </div>
          </div>

          <div className='hover'>   {/* Cadastro de Usuários */}        
            <div className='info-lading-page'>
              <img src={cadastro} alt="page model" className='page'/>
              <h3>Cadastro de Usuários</h3>
              <Buttons className='redirect-buttons'>
                <button className='button-one'><a href='' target="_blank">Web Site</a></button>
                <button className='button-two'><a href='https://github.com/devNeiBarbosa/React-cadastro-de-usuarios' target="_blank">Repositório</a></button>
              </Buttons>
            </div>
            <div className='hover-active'>
              <p>Página de cadastro de usuários.</p>
              <p>Projeto criado com o intuito de aprimorar e consolidar minhas habilidades em React e Node.js. Esse foi o meu primeiro projeto com banco de dados.</p>
              <div className='tech-used'>
                <img src={react} alt="icon React" className="react" width="50px"/>
                <img src={node} alt="icon Node.js" width="50px"/>
              </div>
            </div>
          </div>

          <div className='hover'>    {/* Game Jokenpô */}       
            <div className='info-lading-page'>
              <img src={jokenpo} alt="page model" className='page'/>
              <h3>Game Jolenpô</h3>
              <Buttons className='redirect-buttons'>
                <button className='button-one'><a href='https://devneibarbosa.github.io/Game-jokenpo/' target="_blank">Web Site</a></button>
                <button className='button-two'><a href='https://github.com/devNeiBarbosa/Game-jokenpo' target="_blank">Repositório</a></button>
              </Buttons>
            </div>
            <div className='hover-active'>
              <p>Game virtual de Jokenpô.</p>
              <p>Projeto desenvolvido com o intuito de consolidar minhas habilidades no Front-End. Neste projeto, aprofundei meus conhecimentos sobre a função Math.</p>
              <div className='tech-used'>
                <img src={html5} alt="icon HTML5" width="50px"/>
                <img src={css3} alt="icon CSS3" width="50px"/>
                <img src={js} alt="icon JavaScript" width="50px"/></div>
              </div>
          </div>

          <div className='hover'>   {/* Conversor de Moedas */}        
            <div className='info-lading-page'>
              <img src={conversor} alt="page model" className='page'/>
              <h3>Conversor de Moedas</h3>
              <Buttons className='redirect-buttons'>
                <button className='button-one'><a href='https://devneibarbosa.github.io/Conversor-de-moedas/' target="_blank">Web Site</a></button>
                <button className='button-two'><a href='https://github.com/devNeiBarbosa/Conversor-de-moedas' target="_blank">Repositório</a></button>
              </Buttons>
            </div>
            <div className='hover-active'>
              <p>Site de conversão de moedas.</p>
              <p>Projeto desenvolvido com o objetivo de consolidar minhas habilidades no Front-End. Este é o meu primeiro projeto com APIs (cotação de moeda).</p>
              <div className='tech-used'>
                <img src={html5} alt="icon HTML5" width="50px"/>
                <img src={css3} alt="icon CSS3" width="50px"/>
                <img src={js} alt="icon JavaScript" width="50px"/></div>
              </div>
            </div>

          <div className='hover'>   {/* Sorteador de Números */}        
            <div className='info-lading-page'>
              <img src={sorteador} alt="page model" className='page'/>
              <h3>Sorteador de Números</h3>
              <Buttons className='redirect-buttons'>
                <button className='button-one'><a href='https://devneibarbosa.github.io/Sorteador-de-numeros/' target="_blank">Web Site</a></button>
                <button className='button-two'><a href='https://github.com/devNeiBarbosa/Sorteador-de-numeros' target="_blank">Repositório</a></button>
              </Buttons>
            </div>
            <div className='hover-active'>
              <p> Site para sortear números aleatoriamente.</p>
              <p>Projeto desenvolvido com o objetivo de consolidar minhas habilidades no Front-End. Este foi o primeiro projeto em que utilizei a função Math.</p>
              <div className='tech-used'>
                <img src={html5} alt="icon HTML5" width="50px"/>
                <img src={css3} alt="icon CSS3" width="50px"/>
                <img src={js} alt="icon JavaScript" width="50px"/>
              </div>
            </div>
          </div>

          <div className='hover'>  {/* Irmão Encanadores */}         
            <div className='info-lading-page'>
              <img src={encanadores} alt="page model" className='page'/>
              <h3>Irmãos Encanadores</h3>
              <Buttons className='redirect-buttons'>
                <button className='button-one'><a href='https://devneibarbosa.github.io/Projeto-irmaos-encanadores/' target="_blank">Web Site</a></button>
                <button className='button-two'><a href='https://github.com/devNeiBarbosa/Projeto-irmaos-encanadores' target="_blank">Repositório</a></button>
              </Buttons>
            </div>
            <div className='hover-active'>
              <p>Site para prestação de Serviços.</p>
              <p>Projeto criado com o intuito de aprimorar e consolidar minhas habilidades em HTML5, CSS3 e JavaScript.</p>
              <div className='tech-used'>
                <img src={html5} alt="icon HTML5" width="50px"/>
                <img src={css3} alt="icon CSS3" width="50px"/>
                <img src={js} alt="icon JavaScript" width="50px"/>
              </div>
            </div>
          </div>
          
        </section>
      </Projects>
  );
};

export default MyProjects;
