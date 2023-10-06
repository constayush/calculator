let numbtns = document.querySelectorAll(".numBtn");

let btn = Array.from(numbtns);

let input = document.querySelector("input");

let totalvalues = "";

let clearbtn = document.querySelector(".clearBtn");

let equalbtn = document.querySelector(".equalBtn");

let answer;

clearbtn.addEventListener("click", function () {
  totalvalues = "";
  input.value = " 0 ";
});













for (i = 0; i < btn.length; i++) {
  numbtns[i].addEventListener("click", function () {
    totalvalues = totalvalues + this.innerHTML;
    if ( ['+','-','/', '*','.'].includes(totalvalues[totalvalues.length - 1]) && ['+','-','/', '*','.'].includes(totalvalues[totalvalues.length - 2]) ){ 

      input.value ="SYNTAX ERROR "
    
    }
  
    else{input.value = totalvalues;}
    answer = eval(totalvalues);
  });
}


















equalbtn.addEventListener("click", function () {
  if (["+", "-", "/", "*", "."].includes(totalvalues[totalvalues.length - 1])) {
    input.value = "SYNTAX ERROR";
  } else {
    input.value = answer;
  }
});
