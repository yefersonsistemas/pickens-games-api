// esta clase se utiliza para captar id y para dar visivilidad a las cartas, asi como para la
// comunicacion a la carperta de las imagenes.
export class Card {

    id: string;
    // tslint:disable-next-line: no-inferrable-types
    visible: boolean = false;
    image: {name: string; path: string };

    constructor(id, image) {
        this.id = id;
        this.image = image;
    }

    show() {
        this.visible = true;
    }

    hide() {
        this.visible = false;
    }
}