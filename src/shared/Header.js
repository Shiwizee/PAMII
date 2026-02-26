export function createHeader(pageName){
    return `
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title>${pageName}</ion-title>
            </ion-toolbar>
        </ion-header>
    `;
}