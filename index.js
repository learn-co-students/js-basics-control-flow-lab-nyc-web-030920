function scuberGreetingForFeet(feet){
  if (feet < 400) 
  {return "This one is on me!"}
  else if (feet > 2000 && feet <2500)
  { return 'I will gladly take your thirty bucks.'}
  else if (feet > 2500)
  {return 'No can do.'}
  // Write your code here!
}

function ternaryCheckCity(city){
  let isNyc = "Ok, sounds good."
  let notNyc = "No go."
return city === "NYC" ? (isNyc) : (notNyc)
  // Write your code here!
}

function switchOnCharmFromTip(tip){
  switch(tip){
  case 'generous':
    return "Thank you so much."
    break;
    case 'not as generous':
    return  "Thank you."
      break;
      default:
        return "Bye."}
  // Write your code here!
}