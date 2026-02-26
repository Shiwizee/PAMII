import './LoginPage.css'
import { createHeader } from '../../shared/Header.js'

const pageName = 'Login';

class LoginPage extends HTMLElement{

    connectedCallback() {
        const cabecalho = createHeader(pageName);
        this.classList.add('ion-page');
        this.innerHTML = `
            ${cabecalho}
        `;
    }
} 

customElements.define('login-page', LoginPage);