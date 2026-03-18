import './UsuarioPage.css'
import { createHeader } from '../../shared/Header.js'

const pageName = 'Usuário';

class UsuarioPage extends HTMLElement{

    connectedCallback() {
        const cabecalho = createHeader(pageName);
        this.classList.add('ion-page');
        this.innerHTML = `
            ${cabecalho}
        `;
    }
}

customElements.define('usuario-page', UsuarioPage);
