import { useRef } from 'react';
import { Nav, SideBar } from './Header'
import hamburger from '/assets/hamburger.svg';
import closeBtn from '/assets/close-sidebar.svg';
import whatsapp from '/assets/whatsapp-icon.svg';

function Header(){

  // 1. Referências e visibilidade de seções
  const mainRef = useRef(null);
  const sobreMimRef = useRef(null);
  const habilidadesRef = useRef(null);
  const experienciaRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // 2. Funções de scroll
  const scrollToTop = (event) => {
    event.preventDefault();
    if (mainRef.current) {
      mainRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSobreMim = (event) => {
    event.preventDefault();
    window.scrollTo({ top: sobreMimRef.current.offsetTop, behavior: 'smooth' });
  };

  const scrollHabilidades = (event) => {
    event.preventDefault();
    window.scrollTo({ top: habilidadesRef.current.offsetTop, behavior: 'smooth' });
  };

  const scrollExpertise = (event) => {
    event.preventDefault();
    window.scrollTo({ top: experienciaRef.current.offsetTop, behavior: 'smooth' });
  };

  const scrollProjects = (event) => {
    event.preventDefault();
    window.scrollTo({ top: projectsRef.current.offsetTop, behavior: 'smooth' });
  };

  const scrollContact = (event) => {
    event.preventDefault();
    window.scrollTo({ top: contactRef.current.offsetTop, behavior: 'smooth' });
  };

  // 3. Controle do Sidebar
  const sidebarRef = useRef(null);
  const closeSidebarRef = useRef(null);

  const visibleSidebar = () => {
    if (sidebarRef.current && closeSidebarRef.current) {
      sidebarRef.current.classList.add('active');
      closeSidebarRef.current.classList.add('visible');
    }
  };

  const hiddenSidebar = () => {
    if (sidebarRef.current && closeSidebarRef.current) {
      sidebarRef.current.classList.add('closing');
      setTimeout(() => {
        sidebarRef.current.classList.remove('active', 'closing');
      }, 100);
      closeSidebarRef.current.classList.remove('visible');
    }
  };

  return (
    <header>
        <Nav className='navabar'>
          <div className='navbar-left'>
            <h2><a href='#main' onClick={()=> scrollToTop}>Nei<span>Barbosa</span><span className='span2'>.dev</span></a></h2>
          </div>

          <div className='navbar-right'>
            <ul>
              <li><a href='#about-me' onClick={()=> scrollToSobreMim}>Sobre mim</a></li>
              <li><a href='#skill' onClick={()=> scrollHabilidades}>Habilidades</a></li>
              <li><a href='#expertise' onClick={()=> scrollExpertise}>Experiências</a></li>
              <li><a href='#projects' onClick={()=> scrollProjects}>Projetos</a></li>
              <li><a href='#contact' onClick={()=> scrollContact}>Contato</a></li>
            </ul>
          </div>
        </Nav>

        <SideBar>
          <button id='hamburger' onClick={visibleSidebar}>
            <img src={hamburger} alt="menu icon" width="35px" />
          </button>

          <button id='close-sidebar' ref={closeSidebarRef} onClick={hiddenSidebar}>
            <img src={closeBtn} alt="close menu icon" width="35px" />
          </button>

          <div className='aside' ref={sidebarRef}>
            <ul>
              <li className='li-info' onClick={hiddenSidebar}><a href='#about-me' onClick={()=> scrollToSobreMim}>Sobre mim</a></li>
              <li className='li-info' onClick={hiddenSidebar}><a href='#skill' onClick={()=> scrollHabilidades}>Habilidades</a></li>
              <li className='li-info' onClick={hiddenSidebar}><a href='#expertise' onClick={()=> scrollExpertise}>Experiências</a></li>
              <li className='li-info' onClick={hiddenSidebar}><a href='#projects' onClick={()=> scrollProjects}>Projetos</a></li>
              <li className='li-info' onClick={hiddenSidebar}><a href='#contact' onClick={()=> scrollContact}>Contato</a></li>
              <a href='https://wa.me/message/DBN2KDY5BI2GN1' target="_blank" className='li-info' onClick={hiddenSidebar}>
                <img src={whatsapp} alt="whatsapp icon" />
              </a>
            </ul>
          </div>
        </SideBar>
      </header>
  );
};

export default Header;
