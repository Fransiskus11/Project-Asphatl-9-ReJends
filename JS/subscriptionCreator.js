function validate(){
    let form = document.getElementById("formSubs")
    let inputFirstName = document.getElementById("first-name")
    let invalidFirstName = document.getElementById("error-first-name")
    let inputLastName = document.getElementById("last-name")
    let invalidLastName = document.getElementById("error-last-name")
    let inputEmail = document.getElementById("email")
    let invalidEmail = document.getElementById("error-email")
    let inputDOB = document.getElementById("date");
    let invalidDOB = document.getElementById("error-dob")
    let inputMale = document.getElementById("male")
    let inputFemale = document.getElementById("female")
    let invalidGender = document.getElementById("error-gender")
    let inputAgree = document.getElementById("agree")
    let invalidAgree = document.getElementById("error-agree")
    let inputChannel = document.getElementById("youtube-channel")
    let invalidChannel = document.getElementById("error-youtube-channel")
    let inputAgreeCreator = document.getElementById("agree-creator")
    let invalidAgreeCreator = document.getElementById("error-agree-creator")

    invalidFirstName.innerHTML = ""
    invalidLastName.innerHTML = ""
    invalidDOB.innerHTML = ""
    invalidGender.innerHTML = ""
    invalidAgree.innerHTML = ""
    invalidAgreeCreator.innerHTML = ""
    invalidChannel.innerHTML = ""

    if (inputFirstName.value == ""){
        invalidFirstName.innerHTML = "Please fill your first name"
        return false 
    } else if (inputFirstName.value.length < 3){
        invalidFirstName.innerHTML = "Requires minimum 3 words"
        return false
    }

    if (inputLastName.value == ""){
        invalidLastName.innerHTML = "Please fill your last name"
        return false
    } else if (inputLastName.value.length < 3){
        invalidLastName.innerHTML = "Requires minimum 3 words"
        return false
    }

    if (inputEmail.value == ""){
        invalidEmail.innerHTML = "Please fill your email"
        return false
    } else if (!isValid(inputEmail.value)){
        return false
    }

    if (inputDOB.value) {
        let dob = new Date(inputDOB.value);
        let today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        let i = today.getMonth() - dob.getMonth();
        if (i < 0 || (i === 0 && today.getDate() < dob.getDate())) {
            age--;
        }

        if (age < 13) {
            alert("You must be at least 13 years old.");
            return false;
        }
    } else {
        alert("Please enter your date of birth.")
        return false;
    }

    if (!inputMale.checked && !inputFemale.checked){
        alert("Please select a gender.")
        return false
    }

    if (!inputAgree.checked){
        invalidAgree.innerHTML = "You must agree to the Terms and Conditions and read the Privacy Policy."
        return false 
    }

    if (!inputAgreeCreator.checked){
        invalidAgreeCreator.innerHTML = "You must agree to Asphalt Creators Program Rules."
        return false 
    }

    if (inputChannel.value == ""){
        invalidChannel.innerHTML = "Please fill your Youtube channel name"
        return false
    }

    alert("Thank you for joining our Community!")
    form.submit()
}

function isValid (email) {
    let invalidEmail = document.getElementById("error-email")

    invalidEmail.innerHTML = ""

    let count = 0

    for (let i = 0; i < email.length; i++){
        if (email[i] == '@'){
            count++;
        }
    }

    if (count != 1){
        invalidEmail.innerHTML = "Email must contain one '@'"
        return false
    }
    
    return true
}