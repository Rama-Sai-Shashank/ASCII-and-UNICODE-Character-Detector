function detectCharacter() {
    const characterip= document.getElementById("characterip");
    const result= document.getElementById("result");
    const character= characterip.value;
    if(isASCII(character)){
        result.innerText= 'The entered character is an ASCII character';
    }else{
        result.innerText= 'The entered character is an UNICODE character';
    }
}

function isASCII(character) {
    return character.charCodeAt(0)<=127;
}