import './EditUsuarioPage.css'
import { createHeader } from '../../shared/Header.js'
import { logout } from '../../shared/util.js';

const pageName = 'Editar Usuário';
class EditUsuarioPage extends HTMLElement{

    connectedCallback() {
        const cabecalho = createHeader(pageName);
        this.classList.add('ion-page');
        this.innerHTML = `
            ${cabecalho}
            <ion-content class="ion-padding">
                <form id ="form-usuario">
                    <ion-list>
                        <ion-item>
                            <ion-input type="text" value="João Silva" name="nome" label="Nome Completo" label-placement="floating" required></ion-input>
                        </ion-item>
                        <ion-item>
                            <ion-input type="text" value="joao.silva" name="usuario" label="Nome de Usuário" label-placement="floating" required></ion-input>
                        </ion-item>
                        <ion-item>
                            <ion-input type="password" value="********" name="senha" label="Senha" label-placement="floating" required></ion-input>
                        </ion-item>
                        <ion-item>
                            <ion-input type="number" value="2" name="perfil" label="Perfil" label-placement="floating" required></ion-input>
                        </ion-item>
                    </ion-list>
                    <div class="ion-padding">
                        <ion-button expand="block" type="submit" class="ion-margin-top">Salvar Alterações</ion-button>
                        <ion-button expand="block" color="danger" id="btn-cancelar">Cancelar</ion-button>
                    </div>
                </form>
            </ion-content>
        `;
        this.querySelector('#logout-btn').addEventListener('click', logout);
    }
}

customElements.define('edit-usuario-page', EditUsuarioPage);