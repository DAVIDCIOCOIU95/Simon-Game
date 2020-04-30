var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

function nextSquence() {
  var randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;
}

function playButtonSound(button) {
  switch (button) {
    case "blue":
      var buttonToPlay = new Audio("sounds/" + button + ".mp3");
      buttonToPlay.play();
      break;

    case "green":
      var buttonToPlay = new Audio("sounds/" + button + ".mp3");
      buttonToPlay.play();
      break;

    case "red":
      var buttonToPlay = new Audio("sounds/" + button + ".mp3");
      buttonToPlay.play();
      break;

    case "yellow":
      var buttonToPlay = new Audio("sounds/" + button + ".mp3");
      buttonToPlay.play();
      break;

    default:
      break;
  }
}

// Detect which button has been clicked
$(".btn").on("click", function () {
  var userChosenColour = $(this).attr("id");
});

$(document).on("keypress", function () {
  var randomChosenColour = buttonColours[nextSquence()];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).addClass("pressed");
  setTimeout(function () {
    $("." + randomChosenColour).removeClass("pressed");
  }, 100);

  playButtonSound(randomChosenColour);
});
