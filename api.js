// Copy the code below, but do not copy anything below "What does this do?"

fetch('https://api.dictionaryapi.dev/api/v2/entries/en/set')
                    .then(response => response.json())
                    .then(data => {
                        console.log(data); // this will output the JSON data as an object
                    })
                    .catch(error => console.error(error));
                    
                    // What does this do?
                    // The code will take the JSON response (from dictionary API) and return the data in .then(data =>
                    // The data in the console will be in JSON format, to be used in your HTML file.
                    // You can use the data from Document.getElementById() which will allow you to change an elements contents through it's ID.
                    // for accessing specific parts of the JSON data, you can access the word by referring to the word as data[0].word (using the JSON response)
                    // for accessing the first definition, you can change data to data[0].meanings[0].definitions[0].definition -- you can also change the specific meaning by changing the number next to it in brackets.
                    // If you would like to experiment more with the API, you can go to 
                    // If you want the dictionary API to find a specific word, you can go to: https://api.dictionaryapi.dev/api/v2/entries/en/set to see how to access different parts of the API. The response is overwhelming, so you can organize it using a JSON formatter online.
                    // Below is the code for getting a specified words definition.
                    
                    const wordGiven = 'word'
fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + wordGiven)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data); // this will output the JSON data as an object
                    })
                    .catch(error => console.error(error));
