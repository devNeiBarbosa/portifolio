import profile from '/assets/profile.png';
import profile1 from '/assets/img-1.png';
import profile2 from '/assets/img-2.png';
import profile3 from '/assets/img-3.png';
import { SobreMim } from './AboutMe'
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';

function AboutMe() {

  const sobreMimRef = useRef(null);
  const { ref: sobreMimInViewRef, inView: isSobreMimVisible } = useInView({ threshold: 0.1 });

  return (
    <SobreMim ref={sobreMimRef} id='about-me'>
      <div className={`container-left-img ${isSobreMimVisible ? 'animate-left' : ''}`} ref={sobreMimInViewRef}>
        <img src={profile} alt="profile" className='img-0' />
        <img src={profile1} alt="profile" className='img-1' />
        <img src={profile2} alt="profile" className='img-2' />
        <img src={profile3} alt="profile" className='img-3' />
      </div>

      <div className={`container-right-text ${isSobreMimVisible ? 'animate-right' : ''}`} ref={sobreMimInViewRef}>
        <h3>Quem sou eu?</h3>

        <p> Olá! Eu sou <span>Nei Barbosa</span>. Sou bacharel em Educação Física, com uma trajetória repleta de
          conhecimentos teóricos e práticos que inclui participação em campeonatos de fisiculturismo como atleta, coach e árbitro.</p>

        <p>Sempre tive interesse por tecnologia, mas por muito tempo acreditava que esse mundo não era para mim.
          Hoje, estou provando o contrário: estou em plena transição de carreira para a área de programação e
          completamente apaixonado por essa nova jornada.</p>

        <p>Atualmente, estou cursando a formação em Developer Full Stack pelo DevClub, sempre buscando aprimorar meus
          conhecimentos para me tornar um profissional tão dedicado e competente quanto fui na minha carreira anterior
          como treinador.</p>

        <p>Tenho me aprofundado no aprendizado de HTML5, CSS3, JavaScript e ReactJS, enquanto exploro novas tecnologias
          como Node.js, SQL, MySQL, entre outras que possam contribuir para minha evolução profissional. Durante essa
          jornada, já desenvolvi projetos desafiadores que não apenas solidificaram meus conhecimentos, mas também
          alimentaram minha paixão por resolver problemas através da programação.</p>

        <p>O que me motiva é a possibilidade de aplicar meus aprendizados para criar soluções inovadoras e enfrentar
          grandes desafios. Minha experiência como treinador trouxe habilidades valiosas, como trabalho em equipe,
          resolução de problemas e boa comunicação, que levo comigo para o mundo da tecnologia. Estou pronto para
          contribuir e crescer nessa nova fase da minha vida profissional!</p>
      </div>
    </SobreMim>
  )
}

export default AboutMe;