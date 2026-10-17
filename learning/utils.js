function capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function lowerText(word){
    return word.charAt(0).toLowerCase() + word.slice(1);
}

module.exports = {
    capitalize,
    lowerText
}