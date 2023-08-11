var bdy=document.getElementsByTagName("body")
bdy[0].style.display="flex"
bdy[0].style.justifyContent="center"
bdy[0].style.alignItem="center"

var cls=document.getElementsByClassName("container")
cls[0].style.backgroundColor="#3a4452"
cls[0].style.width="260px"
cls[0].style.height="auto"
cls[0].style.padding="10px"
cls[0].style.borderRadius="10px"


var inpt=document.getElementById("result")
inpt.style.width="95%"
inpt.style.height="40px"
inpt.style.padding="5px"
inpt.style.fontSize="22px"
inpt.style.fontWeight="bold"
inpt.style.borderRadius="10px"
inpt.style.outline="none"
inpt.style.border="none"
inpt.style.textAlign="right"


var button=document.getElementsByClassName("btn")
for(let i=0;i<button.length;i++){
    button[i].style.width="50px"
    button[i].style.padding="5px"
    button[i].style.fontSize="22px"
    button[i].style.fontWeight="bold"
    button[i].style.borderRadius="20px"
    button[i].style.marginTop="15px"
    button[i].style.marginLeft="10px"
    button[i].style.border="none"
    button[i].style.boxShadow="0 0 10px white"
    button[i].style.cursor="pointer"
    button[i].style.color="#3a4452"
}
let output=document.getElementById("result")
function Clear(){
    output.value="";
}
function display(value) {
    output.value += value;
}
function calculate(){
    var a = output.value;
    var b = eval(a);
    output.value = b;
}
function Delete(){
    output.value=result.value.slice(0,-1)
}

