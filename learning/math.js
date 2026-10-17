
function add (a,b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        throw new Error("Invalid value: must be a number!")
    }

    return a + b
};

function multiply (a,b){
    if(typeof a !== 'number' && typeof b !== 'numbere'){
        throw new Error("Invalid value: must be a number!")
    }
    return a * b
}

function subtract (a,b){
    if(typeof a !== 'number' && typeof b !== 'numbere'){
        throw new Error("Invalid value: must be a number!")
    }
    return a - b
}

module.exports = {add,multiply,subtract}