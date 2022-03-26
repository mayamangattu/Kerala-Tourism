
function validate(){

  let username=document.getElementById('username');
  let password=document.getElementById('password');
  let cpassword=document.getElementById('cpassword');
  let email=document.getElementById("email");
 let message=document.getElementById('message');
 let strength=document.getElementById('strength');
   
    
     let phonenumber=document.getElementById('phonenumber');
     let userformat=/^[A-Za-z0-9_.]{5,20}$/;
     let passwordformat=  /^(?=.*[0-9])|(?=.*[!@#&%^&*])[a-zA-Z0-9!@#&%^&*]$/;
     let emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     let phonenumberformat=/^([0-9]{10})|([0-9]{3}[-.,][0-9]{3}[-.,][0-9]{4})$/;
  

   if (username.value.match(userformat)){

    document.getElementById('usernameerror').innerHTML="";
 }else{
     document.getElementById('usernameerror').innerHTML="**Invalid Username";
     return false;

 }



 if (password.value.match(passwordformat)){

  document.getElementById('passworderror').innerHTML="";
}else{
  document.getElementById('passworderror').innerHTML="**Password must contain at least 8 characters and should contain at least one uppercase,lowercase,number and special character";
  return false;

}

if(password.value.length>0){
  
   message.style.display="block";
}
 else{
  message.style.display="none";
   return false;
 }


if(password.value.length<=4){
  document.getElementById('strength').innerHTML="password is poor";
  password.style.borderColor="red";
  message.style.color="red";
  return false;
}
if(password.value.length>=5&&password.value.length<8){
  document.getElementById('strength').innerHTML=" password is medium";
  password.style.borderColor="orange";
  message.style.color="orange";
  return false;
}
if(password.value.length>=8){
  document.getElementById('strength').innerHTML="password is strong";
  password.style.borderColor="green";
  message.style.color="green";
  return false;
}



if (cpassword.value.match(passwordformat)){

  document.getElementById('cpassworderror').innerHTML="";
}else{
  document.getElementById('cpassworderror').innerHTML="**Password is invalid";
  return false;

}

if(cpassword.value!=password.value){
  document.getElementById('cpassworderror').innerHTML="**passwords are not same";
  return false;
}






if (email.value.match(emailformat)){

  document.getElementById('emailerror').innerHTML="";
}else{
  document.getElementById('emailerror').innerHTML="**Please enter a valid email id";
  return false;

}





  if (phonenumber.value.match(phonenumberformat)){

 document.getElementById('phonenumbererror').innerHTML="";
 }else{
 document.getElementById('phonenumbererror').innerHTML="**Invalid Phone Number";
 return false;

 }


} 
   
