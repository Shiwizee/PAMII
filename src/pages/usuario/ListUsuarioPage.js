import './ListUsuarioPage.css'
import { createHeader } from '../../shared/Header.js'
import { logout } from '../../shared/util.js';

const pageName = 'Usuário';

class ListUsuarioPage extends HTMLElement{

    connectedCallback() {
        const cabecalho = createHeader(pageName);
        this.classList.add('ion-page');
        this.innerHTML = `
            ${cabecalho}
            <ion-content>
                <div class="list-usuario"></div>
            </ion-content>
        `;
        this.querySelector('#logout-btn').addEventListener('click', logout);

        const usuarios = this.fetchUsuarios() || [];
        this.renderUsuarios(usuarios);
    }

    fetchUsuarios() {
        return [
            {
                "id": 1,
                "nome": "João Silva",
                "usuario": "joao.silva",
                "senha": "********",
                "perfil": "1",
            },
            {
                "id": 2,
                "nome": "Maria Oliveira",
                "usuario": "maria.oliveira",
                "senha": "********",
                "perfil": "2",
            },
            {
                "id": 3,
                "nome": "Pedro Santos",
                "usuario": "pedro.santos",
                "senha": "********",
                "perfil": "2",
            }
        ]
    }

    renderUsuarios(usuarios) {
        const container = this.querySelector('.list-usuario');
        if (usuarios.length === 0) {
            container.innerHTML = '<p>Nenhum usuário encontrado.</p>';
            return;
        }

        const usuarioItems = usuarios.map(usuario => `
            <ion-item>
                <ion-label>
                    <h2 style="display: flex; align-items: center; gap: 8px;">
                        <ion-icon
                            name="${usuario.perfil === '1' ? 'person' : 'person-outline'}"
                            color="${usuario.perfil === '1' ? 'primary' : 'secondary'}"
                            style="flex-shrink: 0;">
                        </ion-icon>    
                        <span>${usuario.nome}</span>
                    </h2>
                </ion-label>
                <ion-buttons slot="end">
                    <ion-button fill="clear" class="btn-edit" data-id="${usuario.id}">
                        <ion-icon slot="icon-only" name="create-outline"></ion-icon>
                    </ion-button>
                    <ion-button fill="clear" color="danger" class="btn-delete" data-id="${usuario.id}">
                        <ion-icon slot="icon-only" name="trash-outline"></ion-icon>
                    </ion-button>
                </ion-buttons>
            </ion-item>
        `).join('');
        container.innerHTML = `
            <ion-list>
                ${usuarioItems}
            </ion-list>
        `;
    }
}

customElements.define('list-usuario-page', ListUsuarioPage);
