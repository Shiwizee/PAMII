import './ProdutoPage.css'
import { createHeader } from '../../shared/Header.js'
import { logout } from '../../shared/util.js';

const pageName = 'Produto';

class ProdutoPage extends HTMLElement{

    connectedCallback() {
        const cabecalho = createHeader(pageName);
        this.classList.add('ion-page');
        this.innerHTML = `
            ${cabecalho}
        `;
        this.querySelector('#logout-btn').addEventListener('click', logout);
    }
}

customElements.define('produto-page', ProdutoPage);