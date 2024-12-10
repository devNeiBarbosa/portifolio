import { Experiencias, ExpertiseInfo, Title } from './Expertise'
import arrowLeft from '/assets/arrow-left.png';
import arrowRight from '/assets/arrow-right.png';
import { useState, useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function InfoExpertise() {
  // 1. Estados globais
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateJump, setAnimateJump] = useState(false);

  // 2. Funções para o carrossel
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 2);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 2) % 2);
  };

  // 3. Referências e visibilidade de seções
  const experienciaRef = useRef(null);
  const { ref: expertiseInViewRef, inView: isExpertiseVisible } = useInView({ threshold: 0.1 });

  // 4. Animação condicional
  useEffect(() => {
    setAnimateJump(isExpertiseVisible);
  }, [isExpertiseVisible]);
  

    return (
        <Experiencias id='expertise' ref={experienciaRef}>
        <Title className={`title ${isExpertiseVisible ? 'animate-left' : ''}`} ref={expertiseInViewRef}>
          <h2>Experiências Profissionais</h2>
        </Title>

        <div className={`experiences ${animateJump ? 'jump' : ''}`}ref={expertiseInViewRef}>
          <ExpertiseInfo>
            <div className={`treinador ${currentIndex === 0 ? 'active' : ''}`}>
              <h3>Personal Trainer</h3>
              <h4>Bacharel em Educação Física – Centro Universitário de João Pessoa UNIPÊ | de 2018 à 2021.</h4>
              <p>
                Treinador com mais de 4 anos de experiência, incluindo estágio e atuação profissional, especializado no desenvolvimento de
                programas de treino, focados em objetivos como hipertrofia, emagrecimento e melhora de performance.
              </p>
              <p>
                Amplo domínio de técnicas avançadas de periodização e adaptação de treinos para diferentes níveis, garantindo eficiência e segurança.
                Experiência prática no acompanhamento de alunos em academias e consultorias online, com foco na evolução contínua e no alcance de
                metas dentro de prazos definidos. Além disso, sou atleta de fisiculturismo, o que me proporciona conhecimento aprofundado teórico e
                prático sobre hipertrofia, emagrecimento e performance.
              </p>
            </div>

            <div className={`developer ${currentIndex === 1 ? 'active' : ''}`}>
              <h3>Desenvolvedor Web (Front-End)</h3>
              <h4>Programação e Desenvolvimento Web pela DevClub | Outubro 2024 - Cursando</h4>
              <p>Profissional em transição de carreira, com sólida experiência como Personal Trainer, agora dedicado à área de Desenvolvimento Web.
                Minha experiência como treinador me proporcionou habilidades valiosas. Essas competências me ajudam a criar soluções eficientes
                para os desafios que surgem diariamente, além de compreender melhor as necessidades dos usuários e clientes.
              </p>
              <p>
                Tenho experiência em tecnologias front-end, incluindo HTML5, CSS4, JavaScript e ReactJS, para o desenvolvimento de projetos responsivos e
                dinâmicos. Além disso, possuo conhecimentos básicos em back-end, abrangendo Node.js, Docker, SQL e MySQL.
              </p>
            </div>

            <div className="carousel-navigation">
              <button onClick={prevSlide}><img src={arrowLeft} alt="arrow left" className='arrow-left' /></button>
              <button onClick={nextSlide}><img src={arrowRight} alt="arrow right" className='arrow-right' /></button>
            </div>
          </ExpertiseInfo>

          <div className='pages-info'>
            <div className={`page1 ${currentIndex === 0 ? 'active' : ''}`}></div>
            <div className={`page2 ${currentIndex === 1 ? 'active' : ''}`}></div>
          </div>
        </div>
      </Experiencias >
    )
}

export default InfoExpertise