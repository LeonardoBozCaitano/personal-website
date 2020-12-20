import axios from 'axios';
import { Email } from '../entities/Email';
const sendEmailUrl = process.env.REACT_APP_SEND_EMAIL_URL;
const headers = { headers: { 'Content-Type': 'application/json' } };

export class EmailService {
    public sendEmail(email: Email): boolean {
        if (sendEmailUrl) {
            axios.post(sendEmailUrl.toString(), email, headers);
            alert("Email enviado!");
            return true;
        } else {
            alert("Função ainda não implementada, por favor, tente alguma rede social!");
            return false;
        }
    }
}