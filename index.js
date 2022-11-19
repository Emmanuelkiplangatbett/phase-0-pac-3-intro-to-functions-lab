function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logshout(string) {
console.log('HELLO')
return string.toUpperCase();
}
function logwhisper(string) {
  console.log('hello') 
 return string.toLowerCase();  
}
function sayHiToHeadphonedRoommate(string){
    if(string === string.toLowerCase()){
        return "ican't hear you!";
    }
    else if(string === string.toUpperCase()){
        return"YES INDEED!";
    }
    else if(string === "Let's havedinner together!"){
        return "I would love to!";
    }
}
