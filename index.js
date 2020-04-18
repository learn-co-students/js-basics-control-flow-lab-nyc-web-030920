function scuberGreetingForFeet(number){
  // Write your code here!
  let result 
  if (number <= 400){
    result = "This one is on me!";
  } else if (number > 2500){
    result = "No can do.";
  
  } else if (number > 2000){ 
    result = "I will gladly take your thirty bucks.";
  
  }
return result 

}

function ternaryCheckCity(string){
  // Write your code here!
  let result;
  string == 'NYC' ? (result = "Ok, sounds good.") : (result = "No go.");
  return result;

}

function switchOnCharmFromTip(string){
  // Write your code here!
  let responce;

  switch (string) {
    case 'generous':
      responce = 'Thank you so much.';
      break;
    case 'not as generous':
      responce = 'Thank you.';
      break;
    default:
      responce = 'Bye.';
      break;
  }
return responce
}