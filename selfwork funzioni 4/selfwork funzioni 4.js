//funzione per verificare se una stringa èvera o falsa

function controlString(stringa) {
    let stringaSenzaSpazi = stringa.replace(/\s/g, "");
//aiutato da vacca
    let reversed = stringaSenzaSpazi.split('').reverse().join('')

    if(stringaSenzaSpazi== reversed){
    return true
    }else {
    return false
    }
  
}
console.log(controlString(`i topi non avevano nipoti`));







