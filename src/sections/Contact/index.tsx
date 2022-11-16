import './style.css';

import React from 'react';

const Contact: React.FC = () => {

    return (
        <div id="contact">
            <h1>
                Entre em contato
            </h1>
            <p>
                Caso precise de ajuda com algum projeto, ou tenha algum problema que eu consiga resolver, entre em contato através de alguma rede social ou mande um email!
            </p>
            <a href="https://wa.me/5547991976575">
                <button>
                    Enviar mensagem no WhatsApp.
                </button>
            </a>
        </div>
    );
}

export default Contact;