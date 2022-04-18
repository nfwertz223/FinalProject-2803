function matchPassword() {  
    var p1 = document.getElementById("p1").value;  
    var p2 = document.getElementById("p2").value;  
    
    if(p1 != p2)  
    {   
      alert("Passwords did not match "); 
      return false;
    } else {  
      if (validPassword(document.getElementById("userR"),p1)) {
        alert("Password created successfully"); 
        return true; 
      }
      return false;
    }  
}

function validPassword(username, password) {
  //check database for username/password, return true if database does not contain either, false otherwise

}

function loginVerif(username, password) {
  //check if username and password match to an account in the database, true if yes, false if no
}