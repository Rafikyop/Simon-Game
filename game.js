let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];

$(".btn").click(function () {
  let userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playsound(userChosenColour);

  animatePress(userChosenColour);
});

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColour);
}

function playsound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

$(document).on("keypress", function (e) {
  if (e.which == 13) {
    alert("You pressed enter!");
  }
});
