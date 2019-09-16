var remembers = false;
var speeds = false;
function setup() {

  // Change these to change the title and author of the story
  document.getElementById('title').innerHTML="Bill Nye the Gamer guy"; // title

  document.getElementById('author').innerHTML="Daniel A. Vargas Acevedo"; // author


  
  // All of your code goes under here
  

  var story = 'One day Bill was shopping for things he needed he was going back to his car he put the paint can on top of the car to open the car.' + remember()+' He is driving back home at the speed limit but he wants to get home faster'+ speed()+' as he is getting home';+ //police();+'.' // Create the text

  printToPage(story); // Print the text to the webpage
}



// Put your functions below here:

function remember() {
  let num = Math.floor(random(1, 6)); // Random number rounded down
  if(num > 3) {
    remembers = true;
    return " and he remembers to take the paint can inside the car";
  } else {
    remembers = false;
    return " and he forgets to take the paint can inside the car.";
  }
}

function speed() {
  let tea = Math.floor(random(1, 6));
  if(tea > 3) {
    speeds = true;
    return " but he decided to stay with in the speed limit"
  } else {
    speeds = false;
    return " ,he is to desperate and decides to speed up over the limit." + police();
  }
}

function police() {
  let insp = random(1, 6);
  if(insp > 5) {
    return " the police pass by but don't go through his street"
  } else {
    return " the police pass by the street he is going through. He gets caught"
  }
}


//Don't delete this!
function printToPage(story) {
  var para = document.createElement("P");
  var t = document.createTextNode(story);
  para.appendChild(t);
  document.getElementById("story").appendChild(para);
}    