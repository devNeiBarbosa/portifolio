import Buttons from '../../components/Buttons'
import { Form, Label, Input, Title} from './Form'
import { useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import emailJs from '@emailjs/browser';


function ContactForm() {
  // 1. Estados globais
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [message, setMessage] = useState('');

  // 2. Referências e visibilidade de seções
  const contactRef = useRef(null);
  const { ref: contactInViewRef, inView: isContactVisible } = useInView({ threshold: 0.1 });

  function sendEmail(e) {
    e.preventDefault();
    if (name === '' || email === '' || message === '') {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = { name, email, telefone, message };

    emailJs.send("service_za4aivk", "template_x61afyb", templateParams, "jkB5CHRiHgFKdHByN")
      .then((response) => {
        console.log("EMAIL ENVIADO!", response.status, response.text);
        setName('');
        setEmail('');
        setTelefone('');
        setMessage('');
      })
      .catch((err) => {
        console.log("Erro: ", err);
      });
  }

  return (
    <Form id='contact' ref={contactRef} onSubmit={sendEmail}>

      <Title className={`title ${isContactVisible ? 'animate-left' : ''}`} ref={contactInViewRef}>
        <h2>Entre em Contato</h2>
      </Title>

      <div className={`contact-local ${isContactVisible ? 'animate-jump' : ''}`} ref={contactInViewRef}>
        <div className='inputs'>
          <div>
            <Label>Nome <span>*</span></Label>
            <Input type='text' placeholder='Nome e sobremone' id='inputName' onChange={(e) => setName(e.target.value)} value={name} />
          </div>

          <div>
            <Label>E-mail <span>*</span></Label>
            <Input type='text' placeholder='E-mail para contato' id='inputEmail' onChange={(e) => setEmail(e.target.value)} value={email} />
          </div>

          <div>
            <Label>Telefone <span>*</span></Label>
            <Input type='tel' placeholder='(00) 00000-0000' id='inputTel' onChange={(e) => setTelefone(e.target.value)} value={telefone} />
          </div>
        </div>

        <div className='text-area'>
          <textarea name="message" placeholder="Digite aqui a sua mensagem..." onChange={(e) => setMessage(e.target.value)} value={message} />
        </div>
      </div>

      <div className={`submit-button ${isContactVisible ? 'animate-jump' : ''}`} ref={contactInViewRef}>
        <Buttons>
          <button className='button-one to-send' type="submit">Enviar</button>
        </Buttons>

        <p>&copy; 2024. Todos os direitos reservados.</p>
      </div>
    </Form>
  )
}

export default ContactForm;