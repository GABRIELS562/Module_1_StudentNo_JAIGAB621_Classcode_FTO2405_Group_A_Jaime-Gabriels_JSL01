


            function validateSyntax() {
                let input = document.getElementById('petInput').value;
            
                // Define the regular expression pattern
                const pattern = /^pet_[a-zA-Z0-9]+$/;

    /* 	
    •	^: Asserts the position at the start of the string.
	•	pet_: Matches the literal characters “pet_”.
	•	[a-zA-Z0-9]+: Matches one or more (+) characters that are either uppercase letters (A-Z), lowercase letters (a-z), or digits (0-9).
	•	$: Asserts the position at the end of the string.
    */

            
                let result;
                if (input.match(pattern)) {
                    result = 'Valid Syntax';
                } else {
                    result = 'Invalid Syntax';
                }
            
                // Display the result on the webpage
                document.getElementById('result').innerText = result;
            }