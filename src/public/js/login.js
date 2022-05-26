
window.onload = function(){
    let form = document.querySelector("form")
    let user =  document.querySelector("#user")
    let password =  document.querySelector("#password")

    let userError =  document.querySelector(".userError")
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
        "La contraseña es incorrecta"
        }
    })    
    password.addEventListener('focus',(event)=>{
        password.classList.remove("validInput", "nonValidInput")
    })


    form.addEventListener('submit',(event)=>{
        //fields validations
        if (user.value.length == 0){
            user.classList.add("nonValidInput")
        }
        if (password.value.length == 0){
            password.classList.add("nonValidInput")
        }
        console.log(errorsFront)
        if (Object.keys(errorsFront).length != 0 ||
            user.value.length == 0 ||
            password.value.length == 0
        ){
            //presence of errorsFront
            event.preventDefault()
            alert("Usuario o contraseña invalida")
        }
    })

}