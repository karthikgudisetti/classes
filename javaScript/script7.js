//prototyping

// let myobj={
//     name:"Karthik",
//     number:9618629692,
//     addreess:{
//         city:"jami",
//         pincode:535250
//     },
//     interests:["vlogging","running","dancing"],
//     greet:function(){
//         console.log("hello"+this.name);
//     }
// }

// let arr=["karthik","dilleep",{myobj}]
// console.log(arr);

// let work={
//     capany:"Google",
//     salary:60
// }
// let myobj=Object.create(work) //creating the prortotypr for the obj
// myobj.name="karthik"
// myobj.number=9618629692
// myobj.place="vzm"
// myobj.pincode=535250

// //console.log(myobj)
// console.log(myobj.capany)
// myobj.__prototype__

let person={
 name:"karthik",
 phone:9618629692,
 age:29,
 email:"karthikgudisetti@gmail.com"

}
let address={
    city:"Jami",
    pincode:53520,
    district:"vzm"
}
let employeement={
    campany:"google",
    role:"sde",
    package:60,

}
console.log(address.city);

person.__proto__=address;
person.__proto__.__proto__=employeement;
console.log(person.phone);
console.log(person.pincode);
console.log(person.role.__proto__)
