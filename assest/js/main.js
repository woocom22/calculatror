// code for all clear from display
document.querySelector("#alclear").addEventListener("click", ()=>{
    document.querySelector("#display").value = " ";
}) 

// code for one by one delete

const backSpeace = () =>{
    const delNum = document.querySelector("#display").value.slice(0, -1);
    document.querySelector("#display").value = delNum;
}

// Code for input number

const one = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value ="1";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "1";
    }
}

const two = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value ="2";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "2";
    }
}


const three = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value ="3";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "3";
    }
}

const four = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value ="4";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "4";
    }
}


const five = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value ="5";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "5";
    }
}

const six = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value ="6";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "6";
    }
}


const seven = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value ="7";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "7";
    }
}

const eight = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value ="8";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "8";
    }
}


const nine = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value ="9";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "9";
    }
}

const zero = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value ="0";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "0";
    }
}






