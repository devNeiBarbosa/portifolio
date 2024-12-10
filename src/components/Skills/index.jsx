import { Habilidades, Title } from './Skills';
import html5 from '/assets/icon-html5.png';
import css3 from '/assets/icon-css3.png';
import js from '/assets/icon-js.png';
import react from '/assets/icon-react.png';
import node from '/assets/icon-node.png';
import docker from '/assets/icon-docker.png';
import git from '/assets/icon-git.png';
import github from '/assets/github-icon.svg';
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';

function Skills() {
  // 1. Referências e visibilidade de seções
  const habilidadesRef = useRef(null);
  const { ref: habilidadesInViewRef, inView: isHabilidadesVisible } = useInView({ threshold: 0.1 });

  return (
    <Habilidades id='skill' ref={habilidadesRef}>
        <Title className={`title ${isHabilidadesVisible ? 'animate-left' : ''}`} ref={habilidadesInViewRef}>
          <h2>Minhas Habilidades</h2>
          <p>
            Essas são as tecnologias que utilizo para garantir desempenho, escalabilidade e excelência,
            com expertise no frontend, criando interfaces intuitivas e funcionais, e
            conhecimentos básicos no backend.
          </p>
        </Title>

        <div className={`icons-tech ${isHabilidadesVisible ? 'animate-right' : ''}`} ref={habilidadesInViewRef}>

          <div className='icons-top'>
            <img src={html5} alt="icon HTML5" />
            <img src={css3} alt="icon CSS3" />
            <img src={js} alt="icon JavaScript" />
            <img src={react} alt="icon React" className="react" />
          </div>

          <div className='icons-bottom'>
            <img src={node} alt="icon Node.js" />
            <img src={docker} alt="icon Docker" className="docker" />
            <img src={git} alt="icon Git" />
            <img src={github} alt="icon GitHub" />
          </div>

        </div>
      </Habilidades>
  );
};

export default Skills;