//let va=[12,13,14,15];
// for(let i in va){
//     console.log(va[i]);
// }
// console.log("the length of array : "+va.length);
// let m=va.length-1;
// console.log(va[m]);
// console.log("the index of 14 : "+va.indexOf(14));
// for(let i=1;i<m;i++){
//     va.push(i);
// }
// console.log(va);
// const name=(num)=>{
   
//    console.log("the index of 2 : "+va.indexOf(num));
    
// }
// name(2);

//function

// const ex=(num1,num2,num3)=>{
    
//     console.log(va.indexOf(num1));
//     va.push(num2);
//     va.unshift(num3);
  
// }
// ex(14,56,90);
// console.log(va);


//unshift
//shift
//push
//pop
//splice
// va.splice(2,0,78);
// console.log(va);

//find()
// let arr=[
//     {name:"karthik",
//     age:19,
//     salaary:50000,
//     country:"india"
//     },
//      {name:"Dileep",
//     age:21,
//     salaary:60000,
//     country:"india"
//     },
//     {
//         name:"joseph",
//         age:20,
//         salaary:30000,
//         country:"russia"
//     },
//     {
//         name:"karthik",
//         age:29,
//         salaary:30000,
//         country:"russia"
//     }
// ]
// // let a=arr.find(obj=>(obj.country =="russia" && obj.age==20&&obj.name=="joseph"))
// //  console.log(a);
// // let b=arr.find(obj=>obj.country >19);
// //  console.log(b);

// arr.forEach((ele,i) => {
//     if(ele.age>=18 && ele.country=="india" ){
//         console.log(ele,i);
//     }
//     else{
//         console.log("adults");
//     }
// })

// let a1=[12,13,13,14,14,14,15];
// let sum=0;
// a1.forEach((ele)=>{
//     sum+=ele;
//     if(ele%2==0){
//         console.log(ele);
//     }

// })
// console.log(sum);


//map
// let arr=[
//     {name:"karthik",
//     age:19,
//     salaary:50000,
//     country:"india"
//     },
//      {name:"Dileep",
//     age:21,
//     salaary:60000,
//     country:"india"
//     },
//     {
//         name:"joseph",
//         age:20,
//         salaary:30000,
//         country:"russia"
//     },
//     {
//         name:"karthik",
//         age:29,
//         salaary:30000,
//         country:"russia"
//     }]

    
// let arr=["karthik","dileep","gowri"];

//     const arr2=arr.map(item =>item.toUpperCase());
    
//     console.log(arr2)
// let a=[5,10,15];
// const a1=a.map(item=>item*2);
// console.log(a1);
// const products =[
//     {name:"Laptop",price:50000},
//     {name:"Phone",price:250000}
// ];

// const a3=products.map(ele=>ele.price+=200);
// console.log(a3);
// let aa4=["rahul","aman"];

// const a4=aa4.map(ele=>ele.name=ele);
// console.log(a4);




let employees = [
            {name:"bhupendr",salary:70 , age:50, country : "india",department:"IT"},
            {name:"rohan", salary:50, age:14, country: "london" , department:"Finance"},
            {name: "kartik", salary:3, age:2, country : "amarica",department:"HR"},
            {name:"suraj",salary:2, age : 19 , country:"russia",department:"Finance"},
            {name:"aryan",salary:1,age:70 , country : "japan",department:"HR"},
            {name:"aryan",salary:88,age:40 , country : "japan",department:"IT"},
            {name: "jatin", salary:100, age:12, country:"russia",department:"HR"},

            {name:"aaditya", salary:20, age : 19, country : "india",department:"Marketing"},
            {name: "sachi", salary:1, age: 2 , country : "uganda",department:"Finance"},
            {name: "khushi", salary : 35, age:99, country : "brazil",department:"IT"},
            {name: "parul", salary:500, age:34, country: "zamaika", department:"CEO"}


            
        ]

    //    employees.forEach((ele)=>{
    //         console.log(` the employee is from the ${ele.department},his/her name is ${ele.name} and he is from ${ele.country}`);
    //     })
    //     employees.forEach((ele)=>{
    //         if(ele.department=="HR"){
    //             console.log(ele.name)
    //         }
        // })
        
        // let insum=0;
        // let lon=0;
        // let ame=0;
        // let rus=0;
        // let jap=0;
        // let uag=0;
        // let bre=0;
        // let zam=0;

        // employees.forEach((ele)=>{
        //     if(ele.country=="india"){
        //         insum+=ele.salary;
        //     }
        //     else if(ele.country=="london"){
        //         lon+=ele.salary;
        //     }
        //     else if(ele.country=="amarica"){
        //         ame+=ele.salary;
        //     }
        //     else if(ele.country=="russia"){
        //         rus+=ele.salary;
        //     }
        //     else if(ele.country=="japan"){
        //         jap+=ele.salary;
        //     }
        //     else if(ele.country=="uganda"){
        //         uag+=ele.salary;
        //     }
        //     else if(ele.country=="brazil"){
        //         bre+=ele.salary;
        //     }
        //     else if(ele.country=="zamaika"){
        //         zam+=ele.salary;
        //     }

        // })
        // console.log(`total sum =${insum+lon+ame+rus+jap+uag+bre+zam}\n in this\n india salary=${insum}\n london salary=${lon}\n america salary=${ame}\n russia salary=${rus}\n japan salary=${jap} \n uganda salary=${uag}\n brazil salary=${bre}\n zamaika salary=${zam}`);



        let departments=[
            {dname: "IT",dcode: 58,employees: []},
            {dname: "Finance",dcode: 158,employees:[]},
            {dname: "HR",dcode: 200,employees:[]},
            {dname: "Marketing",dcode: 300,employees:[]},
            {dname: "CEO",decode: 400,employees:[]}


]


// employees.forEach(emp => {
//     departments.forEach(dep => {
//         if (emp.department === dep.dname) {
//             dep.employees.push(emp);
//         }
//     });
// });



// console.log(departments);
// let fa=employees.filter((item)=>{
//     return item.salary>10 && item.country=="india";
// })


// console.log(fa);
// let a=employees.filter((item)=>{
//     return item.name.charAt(0)=="s";
// })


// console.log(a)

// let ab=employees.filter((item)=>{
//     return item.department=="Finance";
// })

// let = employees.forEach((item)=>{
//    console.log(item.country.charAt(2));

// })
// let sum=0;
// let avg=employees.forEach((item)=>{
//     sum+=item.salary;
// })
// console.log(sum/employees.length)

// let dep=employees.filter((item)=>{ 
   

// })
// console.log(dep);

//nested Arrays
let m=employees.filter((fi)=>{
    return fi.department=="IT"
}).map((item)=>{
    return item.salary-=50;
});
console.log(m);




    