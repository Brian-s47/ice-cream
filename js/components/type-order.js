export default lista => {
    if(typeof lista == "string") return `<input type="submit" name="type-order" value="${lista}">`;
    if(typeof lista == "array" && lista.length <= 1) return `<input type="submit" name="type-order" value="${lista[0]}">`;
    return `<input type="submit" name="type-order" value="${lista[0]}"> <input type="submit" name="type-order" value="${lista[1]}">`;
}