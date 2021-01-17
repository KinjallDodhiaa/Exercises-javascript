/*EX: Extract the language name from a given URL and shows a welcome message in that language.
For instance, a given URL is : http://DCI.org/@german     --> herzlich willkommen bei DCI   , 
when there is no input default language English*/

function welcomeMessage(url) {
  let lang = url.split("@").pop();
  if (lang === "german") {
    return "Herzlich Willkommen bei DCI";
  } else if (lang === "japanese") {
    return "DCIへようこそ";
  } else if (lang === "gujarati") {
    return "ડીસીઆઈમાં આપનું સ્વાગત છે";
  } else {
    return "Welcome to DCI";
  }
}

console.log(welcomeMessage("http://DCI.org/@german"));
console.log(welcomeMessage("http://DCI.org/@japanese"));
console.log(welcomeMessage("http://DCI.org/@gujarati"));
console.log(welcomeMessage("http://DCI.org/@tamil"));

/*function welcomeMessage(url){
    let lang = url.split('@').pop();
    let ouputmsg = '';
    switch(lang) {
        case 'german':
        ouputmsg = 'Herzlich Willkommen bei DCI';
        break;
        case 'japanese':
        ouputmsg = "DCIへようこそ";
        break;
        default:
        ouputmsg='Welcome to DCI';

    }
    return ouputmsg;
}
console.log(welcomeMessage("http://DCI.org/@german"));
console.log(welcomeMessage("http://DCI.org/@japanese"));
console.log(welcomeMessage("http://DCI.org/@gujarati"));
console.log(welcomeMessage("http://DCI.org/@tamil"));*/
