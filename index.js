//function logTwoValues(value1, value2) {
//    console.log(`The two values are ${value1} and ${value2}.`);
//}
//console.log (logTwoValues("hi", "hello"));

//function sayHelloTo(firstName) {
//    console.log(`Hello, my name is ${firstName}!`);
//}

//function sayHelloto(firstName = "User") {
//    console.log(`Hello, ${firstName}`);
//}


function introduction(name) {
    return (`Hi, my name is ${name}.`)
    console.log (introduction("Josh")) ;
}
function introductionWithLanguage(name, language) {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
    console.log (introductionWithLanguage("Josh", "ember.js"))
    console.log (introductionWithLanguage("Nancy", "React")) ;
}
//function introductionWithLanguageOptional(name = "Gracie", language = "JavaScript") {
//    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
//    console.log (introductionWithLanguageOptional()) ;
//}


function introductionWithLanguageOptional(name, language = "JavaScript") {
    if (name === undefined)
    name = "Gracie";
    if (language === undefined)
    language = "JavaScript";
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);   
console.log (introductionWithLanguageOptional()) ;
}
console.log (introductionWithLanguageOptional())