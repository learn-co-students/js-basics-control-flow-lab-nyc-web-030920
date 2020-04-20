function scuberGreetingForFeet(x){
  // Write your code here!

  if (x <= 400) {

    return "This one is on me!"

  } else if (x > 2000 && x < 2500) {
    
    return "I will gladly take your thirty bucks."

  } else if (x > 2500) {

    return "No can do."
  }

}

function ternaryCheckCity(cityName){
  // Write your code here!

  let cityResponse
  cityName === 'NYC' ? (cityResponse = "Ok, sounds good.") : (cityResponse = "No go.")
  return cityResponse
}

function switchOnCharmFromTip(isGenerous){
  // Write your code here!

  switch (isGenerous) {
    case 'generous':
      return "Thank you so much."
      break;
    case 'not as generous':
      return "Thank you."
    default: 
      return "Bye."



  }

}