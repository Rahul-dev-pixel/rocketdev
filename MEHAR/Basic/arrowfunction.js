  //arrowfunction in single line
  message = () => console.log("Hello World!");
  //calling arrow function
  message();
  //arrowfunction with parameter
 var val = "priyanka !";
 hello = (val) => console.log("Hello " + val);
 hello(val);

 let val1 = "Universe !";
  hello2  = (val1) => { return console.log("Hello " + val1); }

  hello2 (val1);

  // arrow function with parameters
sum = ( a, b) => {
    let c= a+b;
    return console.log("sum : " + c )}
 sum(2,7);

 //traditional function inside object

 const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    age : 18,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };

  console.log("full name is : " +person.fullName());

// showing error 
  var chopper = {
    owner: 'Zed',
    getOwner() => { return this.owner; }
}

console.log ("owner is : " + getOwner());