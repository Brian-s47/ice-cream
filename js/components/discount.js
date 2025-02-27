export default lista =>{
    if (lista.length <= 1){
       return `<label>Rs. ${lista[0]}-0</label>`
    }
    else if (lista.length == 2){
        let descuento = 0;
        descuento = lista[0] * (lista[1]/100)
        return `<label>Rs. ${lista[0]}-${descuento}</label>`
    }
    else {
        console.error("Los valores de Precio no son validos"); 
    }
}