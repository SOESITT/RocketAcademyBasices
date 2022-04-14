/*  project for scissor , Stone ,Paper project
// generate the random number 1 to 3
// random object as array index 0 = SCISSOR , index 1 = PAPER, index 2= stone
// random number as index to get the random object*/
// Helper function to get coumputer output SISSIR OR PAPER OR STONEramdomly to
var getRandomObject = function () {
  var randomNum = Math.floor(Math.random() * 3);
  var ramdomObject = ["SCISSOR", "PAPER", "STONE"]; // \andom object array o= SCISSor 1 = paper  2 for ston
  var computerObject = ramdomObject[randomNum];
  return computerObject;
};

// Declar Global variable declarion
var numberOfPlay = 0;
var numberOfWin = 0;
var numberOfloss = 0;
var numberOfDraw = 0;
var numberOfInputEntry = 0;
var gameModeNumber = 0;
var ModeSelectionNormalOrReverse = "";

var main = function (inputObject) {
  // check the number of Player name engry is not zero, computr wiil request to enter the user name
  if (numberOfInputEntry === 0) {
    var playerNameEntryMessage = "Please Enter your Player Name";
    numberOfInputEntry += 1;
    return playerNameEntryMessage;
  }
  if (numberOfInputEntry === 1) {
    var gameModeMessage =
      "Hello " +
      inputObject +
      "<br>" +
      "Please Enter Game Mode " +
      "<br>" +
      "Enter 1 for normal Scissors Paper Stone" +
      "<br>" +
      "Enter 2 for muk-jji-ppa";
    numberOfInputEntry += 1;
    gameModeNumber = inputObject;
    return gameModeMessage;
  }
  // set var game mode inside the function block
  //  if enter 1 for normal moce  or 2 Muk-jji-ppa , it will be us te index of game mode array .
  if (numberOfInputEntry === 2) {
    var gameMode = [
      ["normal Scissor Paper Stone Mode Please enter Normal or revers "],
      ["Muk-jji-ppa"]
    ];
    var modeMessage = gameMode[inputObject - 1]; // index 0 for nomal game mode and index 2 for Muk-jji -ppa mode
    numberOfInputEntry += 1;
    return modeMessage;
  }
  // get the normal or revese game mode at input entry 4 time
  if (numberOfInputEntry === 3) {
    ModeSelectionNormalOrReverse = inputObject;

    numberOfInputEntry += 1;
    return (
      ModeSelectionNormalOrReverse +
      " nomal please enter SCISSOR OR PAPER OR STONE "
    );
  }

  var computerObject = getRandomObject();
  // input vallidy check
  if (
    inputObject !== "SCISSOR" &&
    inputObject !== "PAPER" &&
    inputObject !== "STONE"
  ) {
    var myOutPutValue =
      inputObject +
      " It is ivalid entry Plase enter  SCCISSOR ot PAPER ot STONE ";
    return myOutPutValue;
  }
  // check win or loss at mode is selected for normal mode
  if (
    (ModeSelectionNormalOrReverse == "normal" &&
      inputObject == "SCISSOR" &&
      computerObject == "SCISSOR") ||
    (ModeSelectionNormalOrReverse == "normal" &&
      inputObject == "PAPER" &&
      computerObject == "PAPER") ||
    (ModeSelectionNormalOrReverse == "normal" &&
      inputObject == "STONE" &&
      computerObject == "STONE")
  ) {
    var bettingStatus = 0; // 0  equal to draw
    numberOfPlay += 1;
    numberOfWin += 0;
    numberOfloss += 0;
    numberOfDraw += 1;
    var percentOfWin = (numberOfWin * 100) / numberOfPlay;
    console.log(percentOfWin);
    var percentOfLoss = (numberOfloss * 100) / numberOfPlay;
    console.log(percentOfLoss);
    var percentOfDraw = (numberOfDraw * 100) / numberOfPlay;
    console.log(percentOfDraw);
  }
  if (
    (ModeSelectionNormalOrReverse == "normal" &&
      inputObject == "SCISSOR" &&
      computerObject == "PAPER") ||
    (ModeSelectionNormalOrReverse == "normal" &&
      inputObject == "PAPER" &&
      computerObject == "STONE") ||
    (ModeSelectionNormalOrReverse == "normal" &&
      inputObject == "STONE" &&
      computerObject == "SCISSOR")
  ) {
    var bettingStatus = 1;
    numberOfPlay += 1;
    numberOfWin += 1;
    numberOfloss += 0;
    var percentOfWin = (numberOfWin * 100) / numberOfPlay;
    console.log(percentOfWin);
    var percentOfLoss = (numberOfloss * 100) / numberOfPlay;
    console.log(percentOfLoss);
    var percentOfDraw = (numberOfDraw * 100) / numberOfPlay;
    console.log(percentOfDraw);
  }
  if (
    (ModeSelectionNormalOrReverse == "normal" &&
      inputObject == "SCISSOR" &&
      computerObject == "STONE") ||
    (ModeSelectionNormalOrReverse == "normal" &&
      inputObject == "PAPER" &&
      computerObject == "SCISSOR") ||
    (ModeSelectionNormalOrReverse == "normal" &&
      inputObject == "STONE" &&
      computerObject == "PAPER")
  ) {
    var bettingStatus = 2;
    numberOfPlay += 1;
    numberOfWin += 0;
    numberOfloss += 0;
    var percentOfWin = (numberOfWin * 100) / numberOfPlay;
    console.log(percentOfWin);
    var percentOfLoss = (numberOfloss * 100) / numberOfPlay;
    console.log(percentOfLoss);
    var percentOfDraw = (numberOfDraw * 100) / numberOfPlay;
    console.log(percentOfDraw);
  }
  // check the win and loss at mode is selected for reverse
  if (
    (ModeSelectionNormalOrReverse == "reverse" &&
      inputObject == "SCISSOR" &&
      computerObject == "SCISSOR") ||
    (ModeSelectionNormalOrReverse == "reverse" &&
      inputObject == "PAPER" &&
      computerObject == "PAPER") ||
    (ModeSelectionNormalOrReverse == "reverse" &&
      inputObject == "STONE" &&
      computerObject == "STONE")
  ) {
    var bettingStatus = 3; // 0  equal to draw
    numberOfPlay += 1;
    numberOfWin += 0;
    numberOfloss += 0;
    numberOfDraw += 1;
    var percentOfWin = (numberOfWin * 100) / numberOfPlay;
    console.log(percentOfWin);
    var percentOfLoss = (numberOfloss * 100) / numberOfPlay;
    console.log(percentOfLoss);
    var percentOfDraw = (numberOfDraw * 100) / numberOfPlay;
    console.log(percentOfDraw);
  }
  if (
    (ModeSelectionNormalOrReverse == "reverse" &&
      inputObject == "SCISSOR" &&
      computerObject == "PAPER") ||
    (ModeSelectionNormalOrReverse == "revers" &&
      inputObject == "PAPER" &&
      computerObject == "STONE") ||
    (ModeSelectionNormalOrReverse == "reverse" &&
      inputObject == "STONE" &&
      computerObject == "SCISSOR")
  ) {
    var bettingStatus = 4;
    numberOfPlay += 1;
    numberOfWin += 1;
    numberOfloss += 0;
    var percentOfWin = (numberOfWin * 100) / numberOfPlay;
    console.log(percentOfWin);
    var percentOfLoss = (numberOfloss * 100) / numberOfPlay;
    console.log(percentOfLoss);
    var percentOfDraw = (numberOfDraw * 100) / numberOfPlay;
    console.log(percentOfDraw);
  }
  if (
    (ModeSelectionNormalOrReverse == "reverse" &&
      inputObject == "SCISSOR" &&
      computerObject == "STONE") ||
    (ModeSelectionNormalOrReverse == "reverse" &&
      inputObject == "PAPER" &&
      computerObject == "SCISSOR") ||
    (ModeSelectionNormalOrReverse == "reverse" &&
      inputObject == "STONE" &&
      computerObject == "PAPER")
  ) {
    var bettingStatus = 5;
    numberOfPlay += 1;
    numberOfWin += 0;
    numberOfloss += 0;
    var percentOfWin = (numberOfWin * 100) / numberOfPlay;
    console.log(percentOfWin);
    var percentOfLoss = (numberOfloss * 100) / numberOfPlay;
    console.log(percentOfLoss);
    var percentOfDraw = (numberOfDraw * 100) / numberOfPlay;
    console.log(percentOfDraw);
  }
  // betting out put staus as array (normal mode) index 0 draw , index= 1 win indexl 2= loss
  // betting out put staus as array (reverse mode ) index 3 draw index 4 for win and index 5 for loss
  var outPutOfBettingStatus = [
    [
      " number play  " +
        numberOfPlay +
        " <br>" +
        "Draw and Input Object " +
        "<br>" +
        inputObject +
        "<br>" +
        "  ComputerObject = " +
        computerObject +
        "<br>" +
        " Wins = " +
        numberOfWin +
        "  (" +
        percentOfWin +
        "  %)" +
        " Losses  " +
        numberOfloss +
        " ( " +
        percentOfLoss +
        " % )" +
        "<br>" +
        "number of tie" +
        numberOfDraw +
        "%" +
        "please try again"
    ],
    [
      " number play" +
        numberOfPlay +
        "<br>" +
        " You Win and U enter " +
        inputObject +
        " Computer generate = " +
        computerObject +
        "<br>" +
        " Wins = " +
        numberOfWin +
        "  (" +
        percentOfWin +
        "  %)" +
        " Losses  " +
        numberOfloss +
        " ( " +
        percentOfLoss +
        " % )" +
        "<br>" +
        "number of tie" +
        numberOfDraw +
        "%" +
        "please try again"
    ],
    [
      " number play" +
        numberOfPlay +
        " <br>" +
        " You loss and Your input  " +
        inputObject +
        "   Computer generte is  " +
        computerObject +
        "<br>" +
        " Wins = " +
        numberOfWin +
        "  (" +
        percentOfWin +
        "  %)" +
        " Losses  " +
        numberOfloss +
        " ( " +
        percentOfLoss +
        " % )" +
        "<br>" +
        "number of tie" +
        numberOfDraw +
        "%" +
        "please try again"
    ],
    [
      " number play  " +
        numberOfPlay +
        " <br>" +
        "Draw and Input Object " +
        "<br>" +
        inputObject +
        "<br>" +
        "  ComputerObject = " +
        computerObject +
        "<br>" +
        " Wins = " +
        numberOfWin +
        "  (" +
        percentOfWin +
        "  %)" +
        " Losses  " +
        numberOfloss +
        " ( " +
        percentOfLoss +
        " % )" +
        "<br>" +
        "number of tie" +
        numberOfDraw +
        "%" +
        "please try again"
    ],
    [
      " number play" +
        numberOfPlay +
        "<br>" +
        " You Loss at Reverse mode and U enter " +
        inputObject +
        " Computer generate = " +
        computerObject +
        "<br>" +
        " Wins = " +
        numberOfWin +
        "  (" +
        percentOfWin +
        "  %)" +
        " Losses  " +
        numberOfloss +
        " ( " +
        percentOfLoss +
        " % )" +
        "<br>" +
        "number of tie" +
        numberOfDraw +
        "%" +
        "please try again"
    ],
    [
      " number play" +
        numberOfPlay +
        " <br>" +
        " You Win at Reverse mode and Your input  " +
        inputObject +
        "   Computer generte is  " +
        computerObject +
        "<br>" +
        " Wins = " +
        numberOfWin +
        "  (" +
        percentOfWin +
        "  %)" +
        " Losses  " +
        numberOfloss +
        " ( " +
        percentOfLoss +
        " % )" +
        "<br>" +
        "number of tie" +
        numberOfDraw +
        "%" +
        "please try again"
    ]
  ];
  // betting status is used as index of output message
  myOutPutValue = outPutOfBettingStatus[bettingStatus];
  return myOutPutValue;
};

// here attached with another version
/*
// In production code, it's often helpful to store string constants
// in variables so that it's easier for a program to detect misspellings.
// E.g. if we used "scissors" everywhere and accidentally misspelled it
// in 1 place, our program may not detect that error until runtime,
// if at all. If we used the variable SCISSORS everywhere and misspelled
// it in 1 place, ESLint would help us detect that error before runtime.
// String constant variable names are usually all uppercase by convention.
var SCISSORS = "scissors";
var PAPER = "paper";
var STONE = "stone";
var REVERSED_SCISSORS = "reversed scissors";
var REVERSED_PAPER = "reversed paper";
var REVERSED_STONE = "reversed stone";
var REPLAY_INSTRUCTIONS =
  'Now you can type "scissors" "paper" or "stone" to play another round!';

/**
 * Return "scissors", "paper", or "stone" based on a random number
 */
/*var getRandomObject = function () {
  var randomNum = Math.floor(Math.random() * 3);
  if (randomNum == 0) {
    return SCISSORS;
  }
  // No need "else if" because if the previous if conditional were true,
  // the function would have returned and would not reach here.
  if (randomNum == 1) {
    return PAPER;
  }
  // If randomNum is neither 0 nor 1, return STONE.
  return STONE;
};

/**
 * Return whether player beats computer at SPS
 * @param {string} playerObject
 * @param {string} computerObject
 */
/*var doesPlayerBeatComputer = function (playerObject, computerObject) {
  return (
    (playerObject == SCISSORS && computerObject == PAPER) ||
    (playerObject == PAPER && computerObject == STONE) ||
    (playerObject == STONE && computerObject == SCISSORS) ||
    (playerObject == REVERSED_SCISSORS && computerObject == STONE) ||
    (playerObject == REVERSED_PAPER && computerObject == SCISSORS) ||
    (playerObject == REVERSED_STONE && computerObject == PAPER)
  );
};

/**
 * Set a fn that will return an icon based on a  given object
 * @param {string} object
 
var getObjectIcon = function (object) {
  if (object == SCISSORS || object == REVERSED_SCISSORS) return " ✂️";
  if (object == PAPER || object == REVERSED_PAPER) return " 🗒";
  if (object == STONE || object == REVERSED_STONE) return " 🪨";
};

/**
 * Return standard string representing player's and computer's objects
 * @param {*} playerObject
 * @param {*} computerObject
 *
var getDefaultObjectsMessage = function (playerObject, computerObject) {
  var playerObjectIcon = getObjectIcon(playerObject);
  var computerObjectIcon = getObjectIcon(computerObject);
  return (
    "The computer chose " +
    computerObject +
    computerObjectIcon +
    "<br><br>" +
    "You chose " +
    playerObject +
    playerObjectIcon
  );
};

/**
 * Check whether player draws with computer
 * @param {string} playerObject
 * @param {string} computerObject
 *
var doesPlayerDrawWComputer = function (playerObject, computerObject) {
  return (
    playerObject == computerObject ||
    (playerObject == REVERSED_SCISSORS && computerObject == SCISSORS) ||
    (playerObject == REVERSED_PAPER && computerObject == PAPER) ||
    (playerObject == REVERSED_STONE && computerObject == STONE)
  );
};

/**
 * Play SPS with user input, return game result.
 * @param {string} input - Player's object (e.g. scissors, paper, stone)
 *
var main = function (input) {
  // Validate that input is one of scissors, paper, or stone
  if (
    input != SCISSORS &&
    input != PAPER &&
    input != STONE &&
    input != REVERSED_SCISSORS &&
    input != REVERSED_PAPER &&
    input != REVERSED_STONE
  ) {
    return 'Please input 1 of "scissors", "paper", or "stone" to play the game.';
    // Side enote: recall what "return" statements do? <--ans: it exits the current function and returns the values that are included in the return statement.
    // This implies that if the return statement in line 107 is triggered, the rest of the code (from line 109 onwards) won't be executed becos we would've exited from the function.
  }

  // Input is one of scissors, paper, or stone
  // Call input playerObject to make game logic clearer
  var playerObject = input;
  // Get computer's computer-generated object
  var computerObject = getRandomObject();
  // Get a default output message sharing what player's and computer's objects are
  var defaultObjectsMessage = getDefaultObjectsMessage(
    playerObject,
    computerObject
  );
  // Compare player's object with computer's object and output win status
  // If player and computer objects are the same, it's a draw.
  if (doesPlayerDrawWComputer(playerObject, computerObject)) {
    // Use <br> to create new lines in HTML output.
    return defaultObjectsMessage + "<br><br> It's a draw! <br><br> ";
  }

  // If not a draw, check if player wins
  if (doesPlayerBeatComputer(playerObject, computerObject)) {
    return (
      defaultObjectsMessage +
      "<br><br>" +
      " You win! <br><br>" +
      REPLAY_INSTRUCTIONS +
      "<br>"
    );
  }
  // If we reach this part of the code, it implies that 1. it's not a draw, and 2. Player has not won; hence,  computer wins! (see note on line 106 if you're unclear why)
  // Let's handle the output for this scenario:
  // Increment num computer wins in win-loss record
  return (
    defaultObjectsMessage +
    "<br><br> You lose! Bummer <br><br>" +
    REPLAY_INSTRUCTIONS
  );
};
*/