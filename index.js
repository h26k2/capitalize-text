
const toCapitalize = (text) =>{
    
    text = text.split(" ");
    let converted = ``;

    for(let i=0 ; i<text.length ; i++){
        text[i] = `${text[i].charAt(0).toUpperCase()}${text[i].substr(1)}`
    }

    for(let t of text){
        converted += `${t} `;
    }

    converted = converted.trim();
    return converted;
    
}

module.exports = toCapitalize