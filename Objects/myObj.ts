
function userData({name: string, Age: number, isPaid: boolean }) {

}

userData({name:'', Age:44, isPaid:true})

// Wired Syntaxfor objects in typeScript
function createUSer():{name: string, price: number, ispaid: boolean}{
    return {name: '', price: 888, ispaid: true}
}
