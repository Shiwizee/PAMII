import './CadProdutoPage.css'
import { createHeader } from '../../shared/Header.js'
import { logout } from '../../shared/util.js';

const pageName = 'Cadastrar Produto';

class CadProdutoPage extends HTMLElement{

    connectedCallback() {
        const cabecalho = createHeader(pageName);
        this.classList.add('ion-page');
        this.innerHTML = `
            ${cabecalho}
            <ion-content class="ion-padding">
                <form id ="form-produto">
                    <ion-list>
                        <ion-item>
                            <ion-input type="text" name="dsc_produto" label="Descrição do Produto" label-placement="floating" required></ion-input>
                        </ion-item>
                        <ion-item>
                            <ion-input type="number" step="0.01" name="vlr_unit" label="Valor Unitário" label-placement="floating" required></ion-input>
                        </ion-item>
                        <ion-item>
                            <ion-label>Ativo</ion-label>
                            <ion-toggle slot="end" name="status" checked></ion-toggle>
                        </ion-item>
                    </ion-list>
                    <div class="ion-padding">
                        <ion-button expand="block" type="submit" class="ion-margin-top">Salvar Produto</ion-button>
                        <ion-button expand="block" color="danger" id="btn-cancelar">Cancelar</ion-button>
                    </div>
                </form>
            </ion-content>
        `;
        this.querySelector('#logout-btn').addEventListener('click', logout);
        this.querySelector('#btn-cancelar').addEventListener('click', () => window.history.back());
    }

    
}

customElements.define('cad-produto-page', CadProdutoPage);