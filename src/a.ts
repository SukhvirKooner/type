

// function greet(a:number,b:number):number{
// return a+b 
// }   
// console.log(greet(5,4));

    
// how to give type of a function 
// () shows that there are no arguments in fn
// void shows that theres no return in this fn


// function runafter1sec(fn: ()=> void){
//     setTimeout(fn,1000);
// }
// runafter1sec(()=>{
//     console.log("hi there")
// })

// interface User {
// 	Name: string;
// 	lastName: string;
// 	email?: string; // optional
// 	age: number;
// }

// function isLegal(obj: User) {
//     if (obj.age > 18) {
//         return true
//     } else {
//         return false;
//     }
// }


// isLegal({
//     Name:"Sukhvir",
//     lastName:"Singh",
//     age:19
// })


// iterfaces can be implemented as classes but types cannnot 

//Types


// type User = {
// 	firstName: string;
// 	lastName: string;
// 	age: number
// }


// in types UNIONS can be created if i want id to be string or number

// function greet(id : (string|Number)){    

// }
// type greetfn = string | number

// function greet2(id:greetfn){

// }
// INTERSECTIONS


type Employee = {
    name: string;
    startDate: Date;
  };
  
  type Manager = {
    name: string;
    department: string;
  };
  
  type TeamLead = Employee & Manager;
  
  const teamLead: TeamLead = {
    name: "harkirat",
    startDate: new Date(),
    department: "Software developer"
  };
  

