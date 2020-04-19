function scuberGreetingForFeet(ride){
  let say
  if (ride <= 400) {
    return say = "This one is on me!";
  } else if (ride > 2000 && ride < 2500) {
    return say = "I will gladly take your thirty bucks."
  } else { 
    say = "No can do."
  }
  return say
}

function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(charm){
  switch (charm)  {
    case 'generous':
    return charm = 'Thank you so much.';
      break;
    case 'not as generous':
      return charm = 'Thank you.';
      break;
    default:
      return charm = 'Bye.';
      break;
  }
}



// function scuberGreetingForFeet(ride){
//   switch (ride) {
//     case (ride <= 400) :
//       return "This one is on me!";
//       break;
//     case (ride > 2000 && ride < 2500) :
//       return "I will gladly take your thirty bucks.";
//       break;
//     default :
//       return "No can do.";
//       break;
//   }
// }
