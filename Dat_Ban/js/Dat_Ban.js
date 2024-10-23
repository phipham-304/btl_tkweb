function submitForm(event) {  
    event.preventDefault();
    const fname = document.getElementById("name").value;  
    const phoneNumber = document.getElementById("phone").value;  
    

    document.getElementById("fullNameError").style.display = "none";  
    document.getElementById("phoneError").style.display = "none";  

   var valid = true;
   var errortext = "";
  
    if (!/^[\p{L}\s]+$/u.test(fname)){  
        document.getElementById("fullNameError").style.display = "block";  
        errortext = "Vui lòng nhập đúng thông tin thao định dạng.\n";  
        valid = false;  
        document.getElementById("name").focus();  
    }  

    const phone1 = /^[0-9]{10}$/; 
    if (!phone1.test(phoneNumber)) {  
        document.getElementById("phoneError").style.display = "block";  
        errortext = "Vui lòng nhập đúng thông tin thao định dạng.\n";  
        valid = false;  
        if (valid === false && document.getElementById("name").value !== "") {  
            document.getElementById("phone").focus();
        }  
    }  

    if (valid) {   

        document.getElementById("name").value="";  
        document.getElementById("phone").value=""; 
        alert("Gửi thông tin thành công!");    
    } else {  
        alert(errortext);
    }  
}  