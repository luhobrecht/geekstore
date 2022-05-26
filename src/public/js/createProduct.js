
window.onload = function(){
    let form = document.querySelector("form")
    let name =  document.querySelector("#nombre")
    let price =  document.querySelector("#precio")
    let discount =  document.querySelector("#descuento")
    let description =  document.querySelector("#description")
    let file = document.querySelector("#archivo")

    let nameError =  document.querySelector(".nameError")
    let discountError =  document.querySelector(".discountError")
    let descriptionError =  document.querySelector(".descriptionError")
    let priceError =  document.querySelector(".priceError")
    let errorsFront = {}

    function validateField(selector, errorSelector ){
        selector.classList.remove("nonValidInput")
        selector.classList.add("validInput")
        errorSelector.innerHTML = ""
    }

    function rejectField(selector, errorsFrontField ){
        selector.classList.remove("validInput")
        selector.classList.add("nonValidInput")
        errorsFront[errorsFrontField] = "Error"
        console.log("errorsFront", errorsFront)
    }
    name.addEventListener('keyup',(event)=>{
        if (name.value.length  >= 5){
            validateField(name, nameError)
             delete errorsFront.name
        }else{
            name.classList.remove("validInput")
        }
    })
    name.addEventListener('blur',(event)=>{
        if (name.value.length  < 5){
            rejectField(name, "name")
            nameError.innerHTML = "El nombre debe poseer al menos 5 caracteres"
        }else{
            name.classList.add("validInput")
        }
    })
    name.addEventListener('focus',(event)=>{
        name.classList.remove("validInput", "nonValidInput")
    })

    description.addEventListener('keyup',(event)=>{
        if (description.value.length  >= 20){
            validateField(description, descriptionError)
             delete errorsFront.description
        }else{
            description.classList.remove("validInput")
        }
    })
    description.addEventListener('blur',(event)=>{
        if (description.value.length  < 20){
            rejectField(description, "description")
            descriptionError.innerHTML = "La descripción debe tener al menos 20 caracteres"
        }else{
            description.classList.add("validInput")
        }
    })
    description.addEventListener('focus',(event)=>{
        description.classList.remove("validInput", "nonValidInput")
    })

}