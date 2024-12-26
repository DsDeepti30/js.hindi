const name ="hello"
const repoCount =50
//console.log(name + repoCount+ "Value");

console.log(`hello m name is ${name} and my repoCont is ${repoCount}`);

const gameName = new String('hgfdd')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('f'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringone = " hello"
console.log(newStringone);
console.log(newStringone.trim());

const url = "https://tc39.es/ecma262/"

console.log(url.replace('20', '-'));

console.log(url.includes('sndar'))
