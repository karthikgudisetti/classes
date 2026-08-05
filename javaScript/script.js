// let employees = [
//     {
//         name: "bhupendr",
//         salary: 70,
//         age: 50,
//         country: "india",
//         department: "IT",
//         content_liked: ["food", "Travel_Vlogs", "art", "storytelling"],
//         products_in_cart: [
//             { Pname: "Shirt", cost: 500 },
//             { Pname: "Shoes", cost: 2500 },
//             { Pname: "Watch", cost: 3500 }
//         ],
        
//     },
//     {
//         name: "rohan",
//         salary: 50,
//         age: 14,
//         country: "london",
//         department: "Finance",
//         content_liked: ["daily_vlogs", "science", "art", "motivational"],
//         products_in_cart: [
//             { Pname: "Shirt", cost: 500 },
//             { Pname: "Headphones", cost: 1800 }
//         ]
//     },
//     {
//         name: "kartik",
//         salary: 3,
//         age: 2,
//         country: "america",
//         department: "HR",
//         content_liked: ["sports", "politics", "online_gaming", "science"],
//         products_in_cart: [
//             { Pname: "Football", cost: 1200 },
//             { Pname: "Shoes", cost: 2500 }
//         ]
//     },
//     {
//         name: "suraj",
//         salary: 2,
//         age: 19,
//         country: "russia",
//         department: "Finance",
//         content_liked: ["Travel_Vlogs", "bike", "politics", "food"],
//         products_in_cart: [
//             { Pname: "Bike Helmet", cost: 2200 },
//             { Pname: "Watch", cost: 3500 }
//         ]
//     },
//     {
//         name: "aryan",
//         salary: 1,
//         age: 70,
//         country: "japan",
//         department: "HR",
//         content_liked: ["history", "motivational", "news", "science"],
//         products_in_cart: [
//             { Pname: "Books", cost: 900 },
//             { Pname: "Laptop", cost: 65000 }
//         ]
//     },
//     {
//         name: "aryan",
//         salary: 88,
//         age: 40,
//         country: "japan",
//         department: "IT",
//         content_liked: ["coding", "technology", "science", "art"],
//         products_in_cart: [
//             { Pname: "Laptop", cost: 65000 },
//             { Pname: "Mouse", cost: 700 },
//             { Pname: "Keyboard", cost: 1500 }
//         ]
//     },
//     {
//         name: "jatin",
//         salary: 100,
//         age: 12,
//         country: "russia",
//         department: "HR",
//         content_liked: ["gaming", "sports", "anime", "online_gaming"],
//         products_in_cart: [
//             { Pname: "Gaming Mouse", cost: 2200 },
//             { Pname: "Headphones", cost: 1800 }
//         ]
//     },
//     {
//         name: "aaditya",
//         salary: 20,
//         age: 19,
//         country: "india",
//         department: "Marketing",
//         content_liked: ["marketing", "business", "motivational", "storytelling"],
//         products_in_cart: [
//             { Pname: "Notebook", cost: 150 },
//             { Pname: "Pen", cost: 50 },
//             { Pname: "Shirt", cost: 500 }
//         ]
//     },
//     {
//         name: "sachi",
//         salary: 1,
//         age: 2,
//         country: "uganda",
//         department: "Finance",
//         content_liked: ["cartoons", "food", "science", "daily_vlogs"],
//         products_in_cart: [
//             { Pname: "Chocolate", cost: 100 },
//             { Pname: "Books", cost: 900 }
//         ]
//     },
//     {
//         name: "khushi",
//         salary: 35,
//         age: 99,
//         country: "brazil",
//         department: "IT",
//         content_liked: ["Travel_Vlogs", "dance", "food", "art"],
//         products_in_cart: [
//             { Pname: "Dress", cost: 1800 },
//             { Pname: "Watch", cost: 3500 },
//             { Pname: "Shoes", cost: 2500 }
//         ]
//     },
//     {
//         name: "parul",
//         salary: 500,
//         age: 34,
//         country: "jamaica",
//         department: "CEO",
//         content_liked: ["leadership", "business", "technology", "motivational"],
//         products_in_cart: [
//             { Pname: "Laptop", cost: 65000 },
//             { Pname: "Watch", cost: 3500 },
//             { Pname: "Phone", cost: 45000 }
//         ],

//     }
// ];

// let content_type=[
//   "food", "Travel_Vlogs", "art", "storytelling",
//   "daily_vlogs", "science", "art", "motivational",
//   "sports", "politics", "online_gaming", "science",
//   "Travel_Vlogs", "bike", "politics", "food",
//   "history", "motivational", "news", "science",
//   "coding", "technology", "science", "art",
//   "gaming", "sports", "anime", "online_gaming",
//   "marketing", "business", "motivational", "storytelling",
//   "cartoons", "food", "science", "daily_vlogs",
//   "Travel_Vlogs", "dance", "food", "art",
//   "leadership", "business", "technology", "motivational"
// ]


// const unique = [...new Set(
//     employees.flatMap(emp => emp.content_liked)
// )];



// employees.forEach(emp=>{
//     let tc=emp.products_in_cart.reduce((sum,product)=>{

//         return sum+product.cost;
//     },0);
//     console.log(`${emp.name} is cost ${tc}`);
// })
// let sal=employees.map(item=>{
//    return{...item,
//     salary:item.salary*=100
//    };
// })
// console.log(sal);



// let name="karthik is good boy";
// console.log(name.length);
// console.log(name.slice(2,5));
// console.log(name);
// console.log(name.toUpperCase())
// console.log(name.slice(-20));
// console.log(name.replace('a','b'));
// console.log()

// let obj={
//     str:"aryan",
//     bool:true,
//     arr:[{},{}],
//     obj:{Tkey:"value"},
//     func: ()=>{
//         console.log(`hello ${this.str}`)
//     }
// }
// obj.func("karthik")
let obj ={
    name:"karthik",
    age:19,
    address:{city:"AP",pincode:535250},
     introduce:function(){console.log(`Hi,I am ${this.name}`)}
};
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));



    
