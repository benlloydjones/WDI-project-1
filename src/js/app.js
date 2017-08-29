//variables go here
const $body = $('body');
const $nodes = $('.node');
const $turnDisplay = $('.turnNumber');
const $playerDisplay = $('.currentPlayer');
const $button = $('button');
const $winner = $('.winner');
const $greenScore = $('.greenScore');
const $purpleScore = $('.purpleScore');
const $currentAction = $('.currentAction');

//node to $nodes position reference:
const idToArray = {
  'n1': 0,
  'n2': 1,
  'n3': 2,
  'n4': 9,
  'n5': 14,
  'n6': 21,
  'n7': 22,
  'n8': 23,
  'n9': 3,
  'n10': 4,
  'n11': 5,
  'n12': 10,
  'n13': 13,
  'n14': 18,
  'n15': 19,
  'n16': 20,
  'n17': 6,
  'n18': 7,
  'n19': 8,
  'n20': 11,
  'n21': 12,
  'n22': 15,
  'n23': 16,
  'n24': 17};

//valid moves as orderd by the node to $node reference above
const validMoves = {
  0: [$nodes[1], $nodes[9]],
  1: [$nodes[0], $nodes[2], $nodes[4]],
  2: [$nodes[1], $nodes[14]],
  9: [$nodes[0], $nodes[10], $nodes[21]],
  14: [$nodes[2], $nodes[23], $nodes[13]],
  21: [$nodes[9], $nodes[22]],
  22: [$nodes[19], $nodes[23], $nodes[21]],
  23: [$nodes[14], $nodes[22]],
  3: [$nodes[4], $nodes[10]],
  4: [$nodes[1], $nodes[5], $nodes[7], $nodes[3]],
  5: [$nodes[4], $nodes[13]],
  10: [$nodes[3], $nodes[11], $nodes[18], $nodes[9]],
  13: [$nodes[5], $nodes[14], $nodes[20], $nodes[12]],
  18: [$nodes[10], $nodes[19]],
  19: [$nodes[16], $nodes[20], $nodes[22], $nodes[18]],
  20: [$nodes[13], $nodes[19]],
  6: [$nodes[7], $nodes[11]],
  7: [$nodes[4], $nodes[8], $nodes[6]],
  8: [$nodes[7], $nodes[12]],
  11: [$nodes[6], $nodes[15], $nodes[10]],
  12: [$nodes[8], $nodes[13], $nodes[17]],
  15: [$nodes[11], $nodes[16]],
  16: [$nodes[17], $nodes[19], $nodes[15]],
  17: [$nodes[12], $nodes[16]]
};

//list of valid mills
const mills = {
  //horizontal
  0: [$nodes[0], $nodes[1], $nodes[2]],
  1: [$nodes[3], $nodes[4], $nodes[5]],
  2: [$nodes[6], $nodes[7], $nodes[8]],
  3: [$nodes[9], $nodes[10], $nodes[11]],
  4: [$nodes[12], $nodes[13], $nodes[14]],
  5: [$nodes[15], $nodes[16], $nodes[17]],
  6: [$nodes[18], $nodes[19], $nodes[20]],
  7: [$nodes[21], $nodes[22], $nodes[23]],
  //vertical
  8: [$nodes[0], $nodes[9], $nodes[21]],
  9: [$nodes[3], $nodes[10], $nodes[18]],
  10: [$nodes[6], $nodes[11], $nodes[15]],
  11: [$nodes[1], $nodes[4], $nodes[7]],
  12: [$nodes[16], $nodes[19], $nodes[22]],
  13: [$nodes[8], $nodes[12], $nodes[17]],
  14: [$nodes[5], $nodes[13], $nodes[20]],
  15: [$nodes[2], $nodes[14], $nodes[23]]
};

let turnCounter = 1;
let millCreated = false;
let purplePlayer = 0;
let greenPlayer = 0;
let movingCounter = false;
let counterInHand = null;
let nodeFrom = null;
let placementSuccessful = false;

//functions go here

//if all nodes of a certain class are in a mill this will return true
function canRemoveMill(colour) {
  const nodesToCheck = [];
  $nodes.toArray().map((node) => $(node)).forEach((node) => {
    if(node.hasClass(colour)) {
      nodesToCheck.push(node);
    }
  });
  return nodesToCheck.every((node) => isInMill(node));
}

//this checks an insterted node and returns true if it is in a mill
function isInMill(nodeToTest) {
  let isInMill = false;
  const millValues = Object.values(mills);
  millValues.forEach((mill) => {
    if(mill.includes(nodeToTest[0])) {
      const mapOfMill = mill.map((node) => $(node));
      if(mapOfMill.every((node) => node.attr('class') === nodeToTest.attr('class'))) {
        isInMill = true;
      }
    }
  });
  return isInMill;
}

//this function will place a counter on a node without a counter on it.
function applyCounter(e) {
  if($(e.target).hasClass('purple') || $(e.target).hasClass('green')) {
    console.log('This node already contains a counter.');
  } else {
    if(turnCounter % 2 === 0) {
      $(e.target).addClass('purple');
      placementSuccessful = true;
    } else {
      $(e.target).addClass('green');
      placementSuccessful = true;
    }
  }
}

//this function will remove a counter if that counter is not in a mill and increase the score of the player removing a counter
function removeCounter(e) {
  const $target = $(e.target);
  if(turnCounter % 2 !== 0 && canRemoveMill('purple')) {
    if(!$target.hasClass('purple')) {
      console.log('You need to choose a purple node');
    } else {
      $target.removeClass('purple');
      greenPlayer++;
      millCreated = false;
      newTurn();
    }
  } else if (turnCounter % 2 === 0 && canRemoveMill('green')) {
    if(!$target.hasClass('green')) {
      console.log('You need to choose a green node');
    } else {
      $target.removeClass('green');
      purplePlayer++;
      millCreated = false;
      newTurn();
    }
  } else if(!isInMill($target) && ($target.hasClass('green') || $target.hasClass('purple'))) {
    if($target.hasClass('purple') && turnCounter % 2 !== 0) {
      $target.removeClass('purple');
      greenPlayer ++;
      millCreated = false;
      newTurn();
    } else if($target.hasClass('green') && turnCounter % 2 === 0) {
      $target.removeClass('green');
      purplePlayer ++;
      millCreated = false;
      newTurn();
    }
  } else if(isInMill($target)){
    console.log('this is in a mill choose a counter not in a mill.');
  } else if(($target.hasClass('green') && turnCounter % 2 !== 0) || ($target.hasClass('purple') && turnCounter % 2 === 0)) {
    console.log('You need to choose a token from the other player');
  } else {
    console.log('That node does not contain a counter!');
  }
}

//function to pick up counter
function pickUpCounter(e) {
  nodeFrom = $(e.target)[0];
  if($nodes.toArray().map((node) => $(node)).some(fairMove)) {
    if(turnCounter % 2 !== 0 && $(e.target).hasClass('green')) {
      $(e.target).removeClass('green');
      counterInHand = 'green';
      movingCounter = true;
      console.log('Choose an adjacent, empty, node to place your counter.');
    } else if(turnCounter % 2 === 0 && $(e.target).hasClass('purple')) {
      $(e.target).removeClass('purple');
      counterInHand = 'purple';
      movingCounter = true;
      console.log('Choose an adjacent, empty, node to place your counter.');
    } else if(!$(e.target).hasClass('green') && !$(e.target).hasClass('purple')) {
      console.log('This is an empty node');
    } else {
      console.log('this node has the wrong colour counter');
    }
  } else {
    console.log('That counter can\'t move');
  }
}

//function to place counter only if in a valid square when being moved
function placeCounter(e) {
  const $target = $(e.target);
  if(fairMove($target)) {
    $target.addClass(counterInHand);
    counterInHand = null;
    movingCounter = false;
    nodeFrom = null;
  } else {
    console.log('This is not a valid move! You need to choose an adjacent, empty, node.');
  }
}

//checks when moving a token if it's a legitimate move
function fairMove(nodeToCheck) {
  const full = nodeToCheck.hasClass('green') || nodeToCheck.hasClass('purple');
  let valid = false;
  $nodes.toArray().forEach((node, indexOfNode) => {
    if(nodeFrom === node) {
      valid = validMoves[indexOfNode].some((node) => node === nodeToCheck[0]);
    }
  });
  return valid && !full;
}

//Creates next turn
function newTurn() {
  turnCounter++;
  if(turnCounter % 2 === 0) {
    $playerDisplay.text('Purple');
    $body.removeClass('green');
    $body.addClass('purple');
  } else {
    $playerDisplay.text('Green');
    $body.removeClass('purple');
    $body.addClass('green');
  }
  $turnDisplay.text(turnCounter);
  $greenScore.text(greenPlayer);
  $purpleScore.text(purplePlayer);
}

//this function determines whether to:
// 1. Remove a counter if a node is created
// 2. Add a counter to the board if the turn is less than or equal to 18
// 3. allow a player to move a counter if the turn is greater than 18
function nodeClicked(e) {
  const $target = $(e.target);
  if(millCreated) {
    removeCounter(e);
    if(turnCounter < 18) {
      $currentAction.text('Choose a node to place a counter');
    } else {
      $currentAction.text('Choose a counter to move');
    }
  } else if(turnCounter <= 18) {
    placementSuccessful = false;
    applyCounter(e);
    millCreated = isInMill($target);
    if(!millCreated) {
      if(turnCounter === 18) {
        $currentAction.text('Choose a counter to move');
      }
      if(placementSuccessful) {
        newTurn();
      }
    } else if (millCreated) {
      $currentAction.text('You have created a mill. Choose one of your opponent\'s counters to remove');
    }
  } else if(!movingCounter) {
    pickUpCounter(e);
  } else if (counterInHand) {
    placeCounter(e);
    if(!counterInHand) {
      millCreated = isInMill($target);
      if(!millCreated) {
        $currentAction.text('Choose a counter to move');
        newTurn();
      } else {
        $currentAction.text('You have created a mill. Choose one of your opponent\'s counters to remove');
      }
    }
  }
  if(purplePlayer === 7) {
    $winner.text('Purple wins!');
  } else if(greenPlayer === 7) {
    $winner.text('Green wins!');
  }
}

//reset the game to start state
function reset() {
  turnCounter = 1;
  millCreated = false;
  purplePlayer = 0;
  greenPlayer = 0;
  movingCounter = false;
  counterInHand = null;
  nodeFrom = null;
  $body.removeClass('purple');
  $body.addClass('green');
  $nodes.removeClass('green');
  $nodes.removeClass('purple');
  $playerDisplay.text('Green');
  $turnDisplay.text(turnCounter);
  $greenScore.text(greenPlayer);
  $purpleScore.text(purplePlayer);
  $winner.text('');
}

//event listerners go here
$nodes.on('click', nodeClicked);
$button.on('click', reset);

//Computer brain goes below

function findEmptyIndices() {
  const emptyNodeIndices = [];
  $nodes.toArray().map((node) => $(node)).forEach(($node, index) => {
    if(!$node.hasClass('purple') && !$node.hasClass('green')) {
      emptyNodeIndices.push(index);
    }
  });
  return emptyNodeIndices;
}

function computerCompleteMill() {
  const emptyNodeIndices = findEmptyIndices();
  let computerMove = null;
  emptyNodeIndices.forEach((nodeIndex) => {
    mills.values().forEach((mill) => {
      if(mill.includes($nodes[nodeIndex])) {
        if(mill.map((node) => $(node)).some(($node) => $node.hasClass('purple')) && mill.map((node) => $(node)).every(($node) => !$node.hasClass('green'))) {
          let counters = 0;
          mill.map((node) => $(node)).forEach(($node) => {
            if($node.hasClass('purple')) {
              counters ++;
            }
          });
          if(counters === 2) {
            computerMove = nodeIndex;
          }
        }
      }
    });
  });
  return computerMove;
}


// //should return key value from valid moves as index
// function returnJunctions(size) {
//   junction = {}
//   Object.values(validMoves).forEach((moveSet) => {
//     if(moveSet.length === size) {
//       junction.push(moveset)
//     }
//   })
// }


function computerPlaceOnXJunction(size) {
  const junctions = aFunctionToFindTheJunctionList(size);
  let computerMove = null;
  junctions.map((node) => $(node)).forEach(($node) => {
    if(!$node.hasClass('purple') && !$node.hasClass('green')) {
      computerMove = idToArray[$node.attr('id')];
    }
  });
  return computerMove;
}

function computerPlaceOnThreeJunction() {
  const fourWayJunctions = [$nodes[10], $nodes[12], $nodes[13], $nodes[15]];
  let computerMove = null;
  fourWayJunctions.map((node) => $(node)).forEach(($node) => {
    if(!$node.hasClass('purple') && !$node.hasClass('green')) {
      computerMove = idToArray[$node.attr('id')];
    }
  });
  return computerMove;
}
