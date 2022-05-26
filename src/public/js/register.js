
window.onload = function(){
    let form = document.querySelector("form")
    let name =  document.querySelector("#name")
    let user =  document.querySelector("#user")
    let email =  document.querySelector("#email")
    let password =  document.querySelector("#password")
    let city =  document.querySelector("#city")
    let file = document.querySelector("#archivo")

    let userError =  document.querySelector(".userError")
    let emailError =  document.querySelector(".emailError")
    let passwordError =  document.querySelector(".passwordError")
    let errorsFront = {}

    function validateField(selector, errorSelector ){
        console.log("validating from function")
        selector.classList.remove("nonValidInput")
        selector.classList.add("validInput")
        errorSelector.innerHTML = ""
        console.log("errorsFront", errorsFront)
    }
    function rejectField(selector, errorsFrontField ){
        selector.classList.remove("validInput")
        selector.classList.add("nonValidInput")
        errorsFront[errorsFrontField] = "Error"
        console.log("errorsFront", errorsFront)
    }

    user.addEventListener('keyup',(event)=>{
        if (user.value.length  >= 2){
            validateField(user, userError)
             delete errorsFront.user
        }else{
            user.classList.remove("validInput")
        }
    })
    user.addEventListener('blur',(event)=>{
        if (user.value.length  < 2){
            rejectField(user, "user")
            userError.innerHTML = "El usuario debe poseer al menos 2 caracteres"
        }else{
            user.classList.add("validInput")
        }
    })
    user.addEventListener('focus',(event)=>{
        user.classList.remove("validInput", "nonValidInput")
    })

    email.addEventListener('keyup',(event)=>{
        if ((email.value.includes("@") && email.value.includes(".com") && email.value.length > 5 )){
            validateField(email, emailError)
            delete errorsFront.email
        }else{
            email.classList.remove("validInput")
        }
    })
    email.addEventListener('blur',(event)=>{
        if (!(email.value.includes("@") && email.value.includes(".com") && email.value.length > 5 )){
            rejectField(email, "email")
            emailError.innerHTML = "El email ingresado no es valido"
        }else{
            validateField(email, emailError)
        }
    })
    email.addEventListener('focus',(event)=>{
        email.classList.remove("validInput", "nonValidInput")
    })


    password.addEventListener('keyup',(event)=>{
        if  ((password.value.length >= 8) ){
            validateField(password, passwordError)
            delete errorsFront.password
        }else{
            password.classList.remove("validInput")
        }
    })
    password.addEventListener('blur',(event)=>{
        if (password.value.length >= 8){
                validateField(password, passwordError)
        }else{
            rejectField(password, "password")
            passwordError.innerHTML =
            "<div>" + 
            "<p>La contraseña debe contener al menos 8 caracteres</p>" + 
            "</div>"
        }
    })    
    password.addEventListener('focus',(event)=>{
        password.classList.remove("validInput", "nonValidInput")
    })


    form.addEventListener('submit',(event)=>{
        //image validation
        if (file.value != ""){ //user selected a file
            const whitelist = ['png', 'jpeg', 'jpg', 'webp']   
            if (!whitelist.includes(file.value.split(".")[1])){
                event.preventDefault()
                alert("La imagen debe ser formato: \n .png , jpeg , jpg o webp")
            }
        }
        //fields validations
        if (usuario.value.length == 0){
            usuario.classList.add("nonValidInput")
        }
        if (email.value.length == 0){
            email.classList.add("nonValidInput")
        }
        if (password.value.length == 0){
            password.classList.add("nonValidInput")
        }
        if (passwordReapeat.value.length == 0){
            passwordReapeat.classList.add("nonValidInput")
        }

        if (Object.keys(errorsFront).length != 0 ||
            usuario.value.length == 0 ||
            email.value.length == 0 ||
            password.value.length == 0 ||
            passwordReapeat.value.length == 0
        ){
            //presence of errorsFront
            event.preventDefault()
            alert("Algunos campos poseen errores o estan incompletos")
        }
    })
}
