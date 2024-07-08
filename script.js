function validateSyntax() {
    let input = document.getElementById('petInput').value;

    // Validation logic goes here
    function validatePetString(input) {
        // Define the regular expression pattern
        const pattern = /^pet_[a-zA-Z0-9]+$/;
        if (value.match(/^\d{4}[A-Z]$/)) {
            console.log('Valid Syntax');
          } else {
            console.log('Invalid Syntax');
          }
    
   
    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters

            document.getElementById('result').innerText = result;
}


