function validate(){
    let email=document.getElementById("email");
    let pwd=document.getElementById("pwd");
    

    let emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let pwdformat=  /^(?=.*[0-9])|(?=.*[!@#&%^&*])[a-zA-Z0-9!@#&%^&*]{8,16}$/;




    if (email.value.match(emailformat)){

        document.getElementById('emaileror').innerHTML="";
    }else{
        document.getElementById('emaileror').innerHTML="**Please enter a valid email id";
        return false;

    }


    if (pwd.value.match(pwdformat)){

document.getElementById('pwderror').innerHTML="";
}else{
document.getElementById('pwderror').innerHTML="**Password is Invalid";
return false;

}


} 
     

//     if(email.value.match(mailformat))
 
// {
// // alert("Valid email address!");
// // document.form1.text1.focus();
// return true;
// }
// else
//  { 
// alert("Please enter a valid email address"); }

// // return false;



// if(pwd.value.match(pwdformat)){
//     return true; 
    
//  }
// else{
// alert("Please enter your password");
// }

// return false;

// }



// if(email.value.match(mailformat)|
 



  
 

