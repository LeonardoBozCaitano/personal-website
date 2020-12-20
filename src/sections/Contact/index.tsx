import './style.css';

import React, { FormEvent, useState } from 'react';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';

import { EmailService } from '../../services/EmailService';
import { Email } from '../../entities/Email';

const Contact: React.FC = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    function sendMessage(e: FormEvent){
        e.preventDefault();
        const emailService = new EmailService();
        const emailToSend: Email = {
            name,
            email,
            phone,
            message
        };

        if(isValid(emailToSend)) {
            emailService.sendEmail(emailToSend);
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
        };
    }

    function isValid(email: Email): boolean {
        if (!email.email || email.email === "") {
            alert("Email inválido");
            return false;
        }
        if (!email.name || email.name === "") {
            alert("Nome inválido");
            return false;
        }
        if (!email.message || email.message === "") {
            alert("Mensagem inválida");
            return false;
        }
        if (!email.phone || email.phone === "") {
            alert("Telefone inválido");
            return false;
        }

        return true;
    }
    
    return (
        <div id="contact">
            <h1>
                Entre em contato
            </h1>
            <p>
                Caso precise de ajuda com algum projeto, ou tenha algum problema que eu consiga resolver, entre em contato através de alguma rede social ou mande um email!
            </p>
            <form onSubmit={sendMessage}>
                <Input label="Seu nome:" name="name" value={name} onChange={(e) => { setName(e.target.value)}}/>
                <Input label="Seu E-mail:" name="email" value={email} onChange={(e) => { setEmail(e.target.value)}}/>
                <Input label="Seu Telefone:" name="phone" value={phone} onChange={(e) => { setPhone(e.target.value)}}/>
                <Textarea label="Sua mensagem:" name="message" value={message} onChange={(e) => { setMessage(e.target.value)}}/>
                <button type="submit">
                    Enviar mensagem
                </button>
            </form>
        </div>
    );
}

export default Contact;