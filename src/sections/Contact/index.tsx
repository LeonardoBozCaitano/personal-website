import './style.css';

import React from 'react';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';

import { EmailService } from '../../services/EmailService';

const Contact: React.FC = () => {
    const emailService = new EmailService();

    const sendMessage = () => {
        if(emailService.sendEmail()) {
            
        } else {
            alert("Funcionalidade ainda em construção, tente alguma rede social!");
        };
    }
    
    return (
        <div id="contact">
            <h1>
                Entre em contato
            </h1>
            <p>
                Caso precise de ajuda com algum projeto, ou tenha algum problema que eu consiga resolver, entre em contato através de alguma rede social ou mande um email!
            </p>
            <Input label="Seu nome:" name="name"/>
            <Input label="Seu E-mail:" name="email"/>
            <Input label="Seu Telefone:" name="phone"/>
            <Textarea label="Sua mensagem:" name="message"/>
            <button onClick={sendMessage}>
                Enviar mensagem
            </button>
        </div>
    );
}

export default Contact;