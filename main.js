// Dom inputs 

let meterInput = document.querySelector('.meter');
let centimeterInput = document.querySelector('.centimeter');

// variables 

let meter;
let centimeter;
let check;

// check and solution 

let check1;
let solution;

// meter converting function 



function  meterconvert(){
    meter = Number(meterInput.value);
    check = Boolean(meter);
    

    if(check){

        solution = (meter * 100);
        console.log(solution);
        centimeterInput.value = solution;
    }
}

function  centiconvert(){
    centimeter= Number(centimeterInput.value);
    check = Boolean(centimeter);
    

    if(check){

        solution = (centimeter / 100);
        console.log(solution);
        meterInput.value = solution;
    }
}


meterInput.addEventListener("input", meterconvert);
centimeterInput.addEventListener("input", centiconvert);



