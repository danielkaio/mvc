abstract class View {
    protected elemento

    constructor(seletor) {
      
        this.elemento = document.querySelector(seletor) 
    }

    

    abstract template(model)


    update(model){

        this.elemento.innerHTML =  this.template(model)
    }

}