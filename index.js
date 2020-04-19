function scuberGreetingForFeet(val){
  // Write your code here!
  let ride;
  //let charge;

  if(val <= 400)
  {
    ride = "This one is on me!";
  }
  
  if(val > 2000 && val < 2500)
  {
    ride = "I will gladly take your thirty bucks.";
  }
  else if(val > 2500)
  {
    ride = "No can do.";
  }
  return ride;
}

function ternaryCheckCity(city){
  // Write your code here!
  let val;
  city === "NYC" ? val = "Ok, sounds good." : val = "No go.";
  return val;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  //let resp;

  switch(tip)
  {
    case('generous'):
      return "Thank you so much.";
    case('not as generous'):
      return "Thank you.";
    default:
      return "Bye.";
  }
  //return resp;
}