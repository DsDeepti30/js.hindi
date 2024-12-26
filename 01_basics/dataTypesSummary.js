//stack(primitive = original valuue ka cop milta h) , 
// heap(non primitive = original vale kaa reference milta h)

let myXName ="cvb.com"
let anotherName = myXName
anotherName = "xz"
console.log(anotherName);
console.log(myXName);

let user = {
    email: "cvbn.com",
    upi: "gh@bl"
}

let user2 =user

user2.email = "lkh.com"

console.log(user.email);
console.log(user2.email);
