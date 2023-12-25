function validateForm(){
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value

    document.getElementById('nameError').innerHTML = ""
    document.getElementById('emailError').innerHTML= ""

    if(name === ""){
        document.getElementById('nameError').innerHTML = " Veillez entrer votre nom"
        return false
    }

    if(email ===""){ b 
        document.getElementById('emailError').innerHTML = " Veillez entrer votre email"
        return false
    }else{
        let emailRgex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if(!emailRgex.test(email)){
            document.getElementById('emailError').innerHTML = "Veillez entrer une adresse e-mail valide "
            return false
        }
    }
    return true
}
