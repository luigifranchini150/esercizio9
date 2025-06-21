let person = {
    nome:`Angela`,
    cognome:`Aruanno`,
    eta:24,
    presentarsi: function(){
        console.log(`ciao sono ${this.nome} ${this.cognome} e ho ${this.eta} anni`);
     }
}

person.presentarsi()


