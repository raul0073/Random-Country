
// function to modify returned value from population to 1, 2 or 3 number and letter
export function getShortPop(value) {
    if(value >= 1e6 && value <= 1e7) {
        return `${value.toString().slice(0,1)}.${value.toString().slice(1,2)}m`;
    }
    else if(value >= 1e7 && value <= 1e8){
        return `${value.toString().slice(0,2)}.${value.toString().slice(2,3)}m`;
    }
    else if(value >= 1e8 && value <= 1e9){
        return `${value.toString().slice(0,3)}.${value.toString().slice(3,4)}m`;
    }
    else if(value >= 1e9 && value <= 1e10){
        return `${value.toString().slice(0,1)}.${value.toString().slice(1,2)}b`;
    }
    else if(value >= 1e3 && value <= 1e6){
        return(value.toString().slice(0,2) +  "k");
    }
    else{
        return value
    }
}

// function to modify returned value from area to 1, 2 or 3 number and letter
export function getShortArea(value) {
    if(value >= 1e8 && value <= 1e9){
        return `${value.toString().slice(0,3)}.${value.toString().slice(3,4)}m km2`;
    }
    else if(value >= 1e7 && value <= 1e8){
        return `${value.toString().slice(0,2)}.${value.toString().slice(2,3)}m km2`;
    }
    else if(value >= 1e6 && value <= 1e7) {
        return `${value.toString().slice(0,1)}.${value.toString().slice(1,2)}m km2`;
    }
    else if(value >= 1e5 && value <= 1e6){
        return(value.toString().slice(0,3) +  "k km2");
    }
    else if(value >= 1e4 && value <= 1e5){
        return(value.toString().slice(0,2) +  "k km2");
    }
    else if(value >= 1e3 && value <= 1e4){
        return(value.toString().slice(0,1) +  "k km2");
    }

    else{
        return `${value} km2`;
    }
}

//function to modify returned value from currency to 1, 2 or 3 number and letter
export function getShortCurrency(value) {
    if(value === "USD"){
        return "USD";
    }
    let dot = value.indexOf(".");
    let symbol = value.slice(-1);
    let dotPlusOne = dot +1
    let dotPlusTwo = dot+2
    return`${value.slice(0, dot)}.${value.slice(dotPlusOne, dotPlusTwo)}${symbol}`;
}


