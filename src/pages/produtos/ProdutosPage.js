import './ProdutosPage.css'
import { createHeader } from '../../shared/Header.js'

const pageName = 'Produtos';

class ProdutoPage extends HTMLElement{

    connectedCallback() {
        const cabecalho = createHeader(pageName);
        this.classList.add('ion-page');
        this.innerHTML = `
            ${cabecalho}
        `;
    }
}

customElements.define('produtos-page', ProdutoPage);