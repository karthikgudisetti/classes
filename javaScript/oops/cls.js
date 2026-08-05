class car{
    constructor(company,year,model,color,tyres={},feauters=[]){
        this.company=company,
        this.year=year,
        this.model=model,
        this.color=color,
        this.tyres={...tyres},
        this.feauters=[...feauters]

    }

  
}
  let c1=new car("BMW",2026,"466cc","Black",{t1:13,t2:14,t3:13,t4:13},["Bmw1","BMW3","BMW4"]);
  console.log(c1);

class employee{
    constructor(name,salary,skills=[],cart={}){
        this.name=name,
        this.salary=salary,
        this.skills=[...skills],
        this.cart={...cart}


    }
}
let emp=new employee("karthik",600000,["java","python","html","css"],{fan:2000,watch:1000,tv:30000})
console.log(emp)

class Bank{
    constructor(name,age,Balance){
        this.name=name,
        this.age=age,
        this.Balance=Balance
    }
    deposit(money){
        return`this ${money} money  is successfuuly credited in your account . now your balace: ${this.Balance+=money}` ;
    }
    debit(money){
        if(money>this.Balance){
            return "insufficent balance";

        }
        else{
            return `this ${money} money is debited from your account. now your balance:  ${this.Balance-=money}`;
        }
    }


}
let ba=new Bank("karthik",19,200000);
console.log(ba.deposit(50000));
console.log(ba.debit(60000));