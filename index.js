const cats=["Milo", "Otis", "Garfield"]


function destructivelyAppendCat(name){
cats.push("Ralph");
}

function destructivelyPrependCat(name){
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(name){
    cats.pop();
}

function destructivelyRemoveFirstCat(name){
    cats.shift();
}

function appendCat(name){
    const newCats =cats.slice();
    newCats.push("Broom");
    return newCats
}

function prependCat(name){
    const newCats =[...cats];
    const newCats1 = ["Arnold", ...cats];
    return newCats1
}

function  removeLastCat(name){
    const newCats = cats.slice(0,2);
    return newCats
}

function  removeFirstCat(name){
    const newCats = cats.slice(1);
    return newCats
}