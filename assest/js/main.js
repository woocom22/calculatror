// code for all clear from display
document.querySelector("#alclear").addEventListener("click", ()=>{
    document.querySelector("#display").value = " ";
}) 

// code for one by one delete

const backSpeace = () =>{
    const delNum = document.querySelector("#display").value.slice(0, -1);
    document.querySelector("#display").value = delNum;
}