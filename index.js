const birthdateElem = document.querySelector('#birthdate');
const luckyNumberElem = document.querySelector('#lucky-number');
const resultBtn = document.querySelector('.btn');
const resultElem = document.querySelector('.result');


function CheckLuckyNumber(birthdateElem, luckynumberElem){

if(luckyNumberElem.value && birthdateElem.value){

        let birthdate  =  birthdateElem.value.replaceAll('-',"");
    let luckyNumber = luckyNumberElem.value;
   
    //console.log(typeof birthdate);
 
    let sumofbirthdate=0;
    for(let a=0;a<birthdate.length;a++){
         console.log(birthdate.charAt(a));
         sumofbirthdate= sumofbirthdate + Number(birthdate.charAt(a))
    }

    //console.log("sum is" +sumofbirthdate);

    if(sumofbirthdate%luckyNumber ==0){
        resultElem.innerText = `Your Birthday is Lucky 😎😉`;
    }else{
        resultElem.innerText = `${luckyNumber} is not that Lucky 🤷‍♀️`;
    }

 }else{
     resultElem.innerText =`Please Enter Value in Both fields`;
 }

}

resultBtn.addEventListener('click',()=>{
         
       CheckLuckyNumber(birthdateElem, luckyNumberElem)
    
})

