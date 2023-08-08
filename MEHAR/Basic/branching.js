// Use Bramching to show biggest number in 3 numbers

let a = 3 , b= 5 , c= 8;

if((a>b) && (a>c))
{
console.log("a is big");
}
else if ( (b>a) && (b>c))
{
    console.log ("b is big");
}
else
{
    console.log ("c is big");
}

switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }

  console.log(day);

 const Person = { name : "Priyanka", age : 29 , company : "S&P Global"};
 //ternary operator
 let eligibility = Person.age > 18 ? "eligible" : "not eligible";

 console.log(eligibility);