class Controller {
    constructor() {
        this.mensagemview = new MensagemView('#views');
    }
    adiciona() {
        this.mensagemview.update(" usuario adicionado com sucesso !!!");
    }
}
