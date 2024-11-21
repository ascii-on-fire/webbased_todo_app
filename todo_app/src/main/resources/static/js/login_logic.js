function toggleBoxVisibility() {

    if (document.getElementById("checkbox-password").checked == true) {
    
        //document.getElementById("box").style.visibility = "visible";
        document.getElementById("passwordlogin").type = "text";
    
        } 
    else {
    
        document.getElementById("passwordlogin").type = "password";
        }
    }