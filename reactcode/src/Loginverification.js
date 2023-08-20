function Verification(values) {
    let err={};
    let email_pttn = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let pswd_pttn = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z)])[a-zA-Z0-9]{8,}$/;
 
    if(values.email === ""){
     err.email="Email should not be empty"
    
    }
    else if(!email_pttn.test(values.email)) {
     err.email = "Enter your email including @";
    }
    else {
     err.email = "";
    }
 
    if(values.passward ===""){
     err.passward ="passward  should not be empty"
    }
    else if(!pswd_pttn.test(values.passward)){
     err.passward  = "passward did not match";
    }
    else {
     err.passward = "";
    }
 return err;
 }
 
export default Verification;