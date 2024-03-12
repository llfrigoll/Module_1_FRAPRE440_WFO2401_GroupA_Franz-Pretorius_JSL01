function validateSyntax() {

    //Gets the input value from the DOM
    let input = document.getElementById('petInput').value;

    //result is set to 'Valid Syntax'
    let result = 'Valid Syntax';

    //Empty string for first 4 characters
    let strPet = '';

    //Saves first 4 characters in a string
    for (let i = 0; i < 4; i++) {
        strPet += input[i];
    }

    //Checks if the string is 'pet_' and if not sets the result to 'Invalid Syntax'
    if(strPet !== 'pet_') {
        result = 'Invalid Syntax';
    }

    //Checks if the following 4 characters is a birth year and if not sets the result to 'Invalid Syntax'
    for (let i = 4; i < 8; i++) {
        if(!(input[i] >= 0 && input[i] <= 9)) {
            result = 'Invalid Syntax';
        }
    }

    //Displays the result
    document.getElementById('result').innerText = result;
}

