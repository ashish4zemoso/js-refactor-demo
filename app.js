// Q1 ==> // Refactor the following function into a one-liner:
    // const printName = (name) => {
    //                      return “Hi” + name;
    //            }

const printName = name => "Hi "+name;

console.log(printName("Ashish"));

// Q2 ==> // Rewrite the following code using template literals
    // const printBill = (name, bill) => {
    //                      return “Hi “ + name + “, please pay: “ + bill;
    //            }

const printBill = (name,bill) => `Hi ${name}, please pay: ${bill}`;

console.log(printBill("Ashish", 1000));

// Q3 ==> // Modify the following code such that the object properties are destructured and logged.
    const person = {
                          name:"Noam Chomsky",
                          age: 92
                };
           
    //            let name = person.name;
    //            let age = person.age;
    //            console.log(name);
    //            console.log(age);

const { name: fullName, age: age }  =  person;

console.log(`Hello ${fullName}, your age is ${age}`);
