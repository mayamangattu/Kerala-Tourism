
function validate(){
  
  let username=document.getElementById('username');
  let password=document.getElementById('password');
  let cpassword=document.getElementById('cpassword');
  let email=document.getElementById("email");
 
   
    
     let phonenumber=document.getElementById('phonenumber');
     let userformat=/^[A-Za-z0-9_.]{5,20}$/;
     let passwordformat=  /^(?=.*[0-9])|(?=.*[!@#&%^&*])[a-zA-Z0-9!@#&%^&*]{8,16}$/;
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
  document.getElementById('passworderror').innerHTML="**Password is invalid";
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
   
