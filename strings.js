//slice
//replace
//replaceAll
//concat
//charAt


function sliceName(names){
    //create empty string to store the result
    let result = "";

    // create a for loop taht look into each element in names strings.
    for(let i = 0; i < names.length; i++ ){

        //check is the index is less that the names 
        if(i < names.lenght){
            //Add the new result to the result string
            result += names[i];
        }
        //extract a subString from the names 
        let subString = names.slice(1,3);
        console.log(subString);//print subString in the console
    }
    
}
//taste the function with example names
sliceName("Laura");
sliceName("Ramirez");


//replace 
function replaceLetter (newLetter,oldLetter, word){

    let newString = ""; //Create empty element to store the new word

    //loop through each character in the input word
    for(let i = 0; i < word.length; i++ ){

        //check if the current character matches the old letter.
        if(word[i] === oldLetter){
            //if it matches, append the new letter to the new string
            newString += newLetter;
        }
        else{
            //If it does not match, put the original character.
            newString += word[i];
        }
    }
    //return the new string
    return newString;
}
// test if the code work 
console.log(replaceLetter("Z", "L","Laura"));
console.log(replaceLetter("S", "R", "Ramirez",));


//replaceAll
 function replaceAllLetters (NewAllLeters, oldAllLeters, letters){

        //create a stringh empty for store the new word
        let string = "";

        //look inside of each character
        for(let i = 0; i < letters.length; i++ ){

            // If the letters match, then add the new letter to the string 
            if(letters[i] === oldAllLeters){
                string += NewAllLeters;
            }
            else{ 
                string += letters[i]; // if it does not match, add the current letter to the string
            }
        }
        //return the modified string
        return string;
 }
 //test if the code works
 console.log(replaceAllLetters("o", "a", "Laura"));


//concat two strings
 function createNewString (str1, str2){

    //Start with the first string
    let resultString = str1;

    //go into the each charapter in thr second string
    for(let i = 0; i < str2.length; i++ ){
        //Append each character from the second string to the result
        resultString += str2[i];
    }
    // retunr the concat result
    return resultString; 

 }
 //test the function 
 console.log(createNewString("Hello", " Word"));

 //chartAt
 function charAt (str, index){
    
    //Go inside of each character in the string
    for(let i = 0; i < str.length; i++ ){

        //If the index is in the limits of the string, return the character 
        if(index >= 0 || index < str.length){
            return str[index];
        }
        //if the index is out of the limits return an empty string.
        return "";
    }
 }
 //testing the funtion
 console.log(charAt("Hello, World", 8))