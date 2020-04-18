

function scuberGreetingForFeet(someValue){
  let cost;
  // Write your code here!
  if (someValue <= 400) {
    cost = "This one is on me!";
  }
  else if (someValue > 2500) {
    cost = "No can do.";
  }
  else if (someValue > 2000) {
    cost = 'I will gladly take your thirty bucks.';
  }
  return cost;
}

function ternaryCheckCity(city){
  let response;
  if (city === "NYC") {
  response = "Ok, sounds good.";
  }
  else {
  response = "No go.";
  }
 return response;
}

function switchOnCharmFromTip(tip){
 let response;
 switch (tip) {
   case 'generous':
     response = "Thank you so much.";
     break;
   case 'not as generous':
     response = "Thank you.";
     break;
   default:
     response = "Bye.";
     break;
 }
 return response;
  
}