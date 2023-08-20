function Verification(values) {
    let error={};
    
 
    if(values.name === ""){
        error.name="Name should not be empty";
    
    }
     else {
        error.name = "";
    }
    if(values.email === ""){
        error.email="Email should not be empty";
    
    } else {
        error.email = "";
    }
 
    if(values.passward ===""){
        error.passward ="passward  should not be empty"
    }

    else {
        error.passward = "";
    }
 return error;
 
 }
 
 export default Verification;