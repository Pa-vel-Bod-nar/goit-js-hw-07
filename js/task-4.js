document.querySelector(".login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const form = event.target;
    const formData = {};
    const emptyFields = []
    
    
    
    for (let field of form.elements) {
        if (field.name){
            if (field.value.trim() === ""){
                emptyFields.push(field.name)
            } else {
                formData[field.name] = field.value.trim();
            }
        }
    }
    if (emptyFields.length > 0) {
        alert('All form fields must be filled in')
    }else{
        console.log("Form data:", formData);
        form.reset();
    }
})  