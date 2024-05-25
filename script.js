
const mail=document.getElementById('mail');
const pswd=document.getElementById('password');
const mailPara= document.getElementById('em-p');
const pswdPara=document.getElementById('pw-p')
const output=document.getElementById('output');
const check=document.getElementById('success')
const submit=document.getElementById('btn');

let check1 = false;
let check2=false;

mail.addEventListener('input', checkMail);
pswd.addEventListener('input', checkPassword);
submit.addEventListener('click', showOutput)
 


function checkMail (){
    let mailValue=mail.value;
    let para=mailPara;
    if(mailValue.length>3 && mailValue.indexOf('@')>=0 && mailValue.indexOf('.')>=0){
        para.innerText="";
        check1=true;
    }
    else{
        para.style.color='red';
        check1=false;
    }
    checkSuccess();
}

function checkPassword (){
    let pwValue=pswd.value;
   

    if(pwValue.length>7){
        pswdPara.innerText="";
        check2=true;
    }
    else{
        pswdPara.style.color='red';
        check2=false;
    }
    checkSuccess();
}

function checkSuccess(){
    if(check1 && check2){
        check.innerHTML= ` <p>All good to go!</p>`
        check.style.color='green';
    }
    else{
        check.innerText="";
    }

}

function showOutput(event){
    
    if(check1 && check2){
        event.preventDefault();
        if(confirm("Press 'OK' to confirm Email & Password!"))
        {
            alert("You are successfully signup!");
        }
        
    }
   else {
         
           if(!check1 && !check2){
            alert(`Enter a vaild email & Password!`)
           }
           else  if(!check2){
            alert(`Enter a vaild Password!`)
            }
            else if(!check1){
                alert(`Enter a vaild Email!`)
            }
      
    }
}