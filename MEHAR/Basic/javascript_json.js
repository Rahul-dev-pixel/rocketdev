console.log("JSON operations");

const Person = { name : "Priyanka", age : 29 , company : "S&P Global"};
console.log(typeof(Person));
//printing an object
console.log(Person.name + " is " + Person.age + " and she is working in " + Person.company);


let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const obj = JSON.parse(text);

console.log(obj);

