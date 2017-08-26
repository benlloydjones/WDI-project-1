//variables go here
const $gameBoard = $('.gameBoard');
const $nodes = $('.node');
const $node1 = $('#n1');
const $node2 = $('#n2');
const $node3 = $('#n3');
const $node4 = $('#n4');
const $node5 = $('#n5');
const $node6 = $('#n6');
const $node7 = $('#n7');
const $node8 = $('#n8');
const $node9 = $('#n9');
const $node10 = $('#n10');
const $node11 = $('#n11');
const $node12 = $('#n12');
const $node13 = $('#n13');
const $node14 = $('#n14');
const $node15 = $('#n15');
const $node16 = $('#n16');
const $node17 = $('#n17');
const $node18 = $('#n18');
const $node19 = $('#n19');
const $node20 = $('#n20');
const $node21 = $('#n21');
const $node22 = $('#n22');
const $node23 = $('#n23');
const $node24 = $('#n24');
const $turnDisplay = $('.turnNumber');
const $playerDisplay = $('.currentPlayer');
const $button = $('button');
const $winner = $('winner');

let turnCounter = 1;
let millCreated = false;
let purplePlayer = 0;
let greenPlayer = 0;
let movingCounter = false;
let counterInHand = null;
let nodeFrom = null;

//functions go here

//this function checks if the node you've clicked on is in a mill and is used for both removing and adding counters
function checkMill(e) {
  //we control the horizontal
  if([$node1[0], $node2[0], $node3[0]].includes($(e.target)[0])) {
    if([$node1, $node2, $node3].every((node) => node.attr('class') === $(e.target).attr('class'))) {
      return true;
    }
  }
  if([$node9[0], $node10[0], $node11[0]].includes($(e.target)[0])) {
    if([$node9, $node10, $node11].every((node) => node.attr('class') === $(e.target).attr('class'))) {
      return true;
    }
  }
  if([$node17[0], $node18[0], $node19[0]].includes($(e.target)[0])) {
    if([$node17, $node18, $node19].every((node) => node.attr('class') === $(e.target).attr('class'))) {
      return true;
    }
  }
  if([$node4[0], $node12[0], $node20[0]].includes($(e.target)[0])) {
    if([$node4, $node12, $node20].every((node) => node.attr('class') === $(e.target).attr('class'))) {
      return true;
    }
  }
  if([$node21[0], $node13[0], $node5[0]].includes($(e.target)[0])) {
    if([$node21, $node13, $node5].every((node) => node.attr('class') === $(e.target).attr('class'))) {
      return true;
    }
  }
  if([$node22[0], $node23[0], $node24[0]].includes($(e.target)[0])) {
    if([$node22, $node23, $node24].every((node) => node.attr('class') === $(e.target).attr('class'))) {
      return true;
    }
  }
  if([$node14[0], $node15[0], $node16[0]].includes($(e.target)[0])) {
    if([$node14, $node15, $node16].every((node) => node.attr('class') === $(e.target).attr('class'))) {
      return true;
    }
  }
  if([$node6[0], $node7[0], $node8[0]].includes($(e.target)[0])) {
    if([$node6, $node7, $node8].every((node) => node.attr('class') === $(e.target).attr('class'))) {
      return true;
    }
  }
  //we control the vertical
  if([$node1[0], $node4[0], $node6[0]].includes($(e.target)[0])) {
    if([$node1, $node4, $node6].every((node) => node.attr('class') === $(e.target).attr('class'))) {
      return true;
    }
  }
  if([$node9[0], $node12[0], $node14[0]].includes($(e.target)[0])) {
    if([$node9, $node12, $node14].every((node) => node.attr('class') === $(e.target).attr('class'))) {
      return true;
    }
  }
  if([$node17[0], $node20[0], $node22[0]].includes($(e.target)[0])) {
    if([$node17, $node20, $node22].every((node) => node.attr('class') === $(e.target).attr('class'))) {
      return true;
    }
  }
  if([$node2[0], $node10[0], $node18[0]].includes($(e.target)[0])) {
    if([$node2, $node10, $node18].every((node) => node.attr('class') === $(e.target).attr('class'))) {
      return true;
    }
  }
  if([$node23[0], $node15[0], $node7[0]].includes($(e.target)[0])) {
    if([$node23, $node15, $node7].every((node) => node.attr('class') === $(e.target).attr('class'))) {
      return true;
    }
  }
  if([$node19[0], $node21[0], $node24[0]].includes($(e.target)[0])) {
    if([$node19, $node21, $node24].every((node) => node.attr('class') === $(e.target).attr('class'))) {
      return true;
    }
  }
  if([$node11[0], $node13[0], $node16[0]].includes($(e.taret)[0])) {
    if([$node11, $node13, $node16].every((node) => node.attr('class') === $(e.target).attr('class'))) {
      return true;
    }
  }
  if([$node3[0], $node5[0], $node8[0]].includes($(e.target)[0])) {
    if([$node3, $node5, $node8].every((node) => node.attr('class') === $(e.target).attr('class'))) {
      return true;
    }
  }
  return false;
}

//this function will place a counter on a node without a counter on it.
function applyCounter(e) {
  if($(e.target).hasClass('purple') || $(e.target).hasClass('green')) {
    console.log('already contains counter');
  } else {
    if(turnCounter % 2 === 0) {
      $(e.target).addClass('purple');
      console.log('purple click', `, turn: ${turnCounter}`);
    } else {
      $(e.target).addClass('green');
      console.log('green click', `, turn: ${turnCounter}`);
    }
  }
}

//this function will remove a counter if that counter is not in a mill and increase the score of the player removing a counter
function removeCounter(e) {
  if(!checkMill(e) && ($(e.target).hasClass('green') || $(e.target).hasClass('purple'))) {
    if($(e.target).hasClass('purple')) {
      $(e.target).removeClass('purple');
      greenPlayer ++;
      millCreated = false;
      console.log(`Green: ${greenPlayer}, Purple: ${purplePlayer}`);
    } else if($(e.target).hasClass('green')) {
      $(e.target).removeClass('green');
      purplePlayer ++;
      millCreated = false;
      console.log(`Green: ${greenPlayer}, Purple: ${purplePlayer}`);
    }
  } else if(checkMill(e)){
    console.log('this is in a mill');
  } else {
    console.log('That node does not contain a counter!');
  }
}

//function to pick up counter
function pickUpCounter(e) {
  if($(e.target).hasClass('purple')) {
    $(e.target).removeClass('purple');
    counterInHand = 'purple';
  } else if($(e.target).hasClass('green')) {
    $(e.target).removeClass('green');
    counterInHand = 'green';
  }
  trackCounter(e);
}

//tracks where a counter was picked up from
function trackCounter(e) {
  nodeFrom = $(e.target)[0];
  movingCounter = true;
}

//function to place counter only if in a valid square when being moved
function placeCounter(e) {
  if(fairMove(e)) {
    $(e.target).addClass(counterInHand);
    counterInHand = null;
    movingCounter = null;
    nodeFrom = null;
  } else {
    console.log('This is not a valid move!');
  }
}

//checks when moving a token if it's a legitimate move
function fairMove(e) {
  if(nodeFrom === $node1[0]) {
    return [$node2[0], $node4[0]].some((node) => node === $(e.target)[0]);
  } else if(nodeFrom === $node2[0]) {
    return [$node1[0], $node10[0] ,$node3[0]].some((node) => node === $(e.target)[0]);
  } else if(nodeFrom === $node3[0]) {
    return [$node2[0], $node5[0]].some((node) => node === $(e.target)[0]);
  } else if(nodeFrom === $node4[0]) {
    return [$node1[0], $node12[0], $node6[0]].some((node) => node === $(e.target)[0]);
  } else if(nodeFrom === $node5[0]) {
    return [$node3[0], $node8[0], $node13[0]].some((node) => node === $(e.target)[0]);
  } else if(nodeFrom === $node6[0]) {
    return [$node4[0], $node7[0]].some((node) => node === $(e.target)[0]);
  } else if(nodeFrom === $node7[0]) {
    return [$node15[0], $node8[0], $node6[0]].some((node) => node === $(e.target)[0]);
  } else if(nodeFrom === $node8[0]) {
    return [$node5[0], $node7[0]].some((node) => node === $(e.target)[0]);
  } else if(nodeFrom === $node9[0]) {
    return [$node10[0], $node12[0]].some((node) => node === $(e.target)[0]);
  } else if(nodeFrom === $node10[0]) {
    return [$node2[0], $node11[0], $node18[0], $node9[0]].some((node) => node === $(e.target)[0]);
  } else if(nodeFrom === $node11[0]) {
    return [$node13[0], $node10[0]].some((node) => node === $(e.target)[0]);
  } else if(nodeFrom === $node12[0]) {
    return [$node9[0], $node20[0], $node14[0], $node4[0]].some((node) => node === $(e.target)[0]);
  } else if(nodeFrom === $node13[0]) {
    return [$node11[0], $node5[0], $node16[0], $node21[0]].some((node) => node === $(e.target)[0]);
  } else if(nodeFrom === $node14[0]) {
    return [$node12[0], $node15[0]].some((node) => node === $(e.target)[0]);
  } else if(nodeFrom === $node15[0]) {
    return [$node23[0], $node16[0], $node7[0], $node14[0]].some((node) => node === $(e.target)[0]);
  } else if(nodeFrom === $node16[0]) {
    return [$node13[0], $node15[0]].some((node) => node === $(e.target)[0]);
  } else if(nodeFrom === $node17[0]) {
    return [$node18[0], $node20[0]].some((node) => node === $(e.target)[0]);
  } else if(nodeFrom === $node18[0]) {
    return [$node10[0], $node19[0], $node17[0]].some((node) => node === $(e.target)[0]);
  } else if(nodeFrom === $node19[0]) {
    return [$node21[0], $node18[0]].some((node) => node === $(e.target)[0]);
  } else if(nodeFrom === $node20[0]) {
    return [$node17[0], $node22[0], $node12[0]].some((node) => node === $(e.target)[0]);
  } else if(nodeFrom === $node21[0]) {
    return [$node19[0], $node13[0], $node24[0]].some((node) => node === $(e.target)[0]);
  } else if(nodeFrom === $node22[0]) {
    return [$node20[0], $node23[0]].some((node) => node === $(e.target)[0]);
  } else if(nodeFrom === $node23[0]) {
    return [$node24[0], $node15[0], $node22[0]].some((node) => node === $(e.target)[0]);
  } else if(nodeFrom === $node24[0]) {
    return [$node23[0], $node21[0]].some((node) => node === $(e.target)[0]);
  }
}

//this function determines whether to:
// 1. Remove a counter if a node is created
// 2. Add a counter to the board if the turn is less than or equal to 18
// 3. allow a player to move a counter if the turn is greater than 18
function nodeClicked(e) {
  if(millCreated) {
    removeCounter(e);
    if(!millCreated) {
      turnCounter++;
    }
    if(turnCounter % 2 === 0) {
      $playerDisplay.text('Purple');
    } else {
      $playerDisplay.text('Green');
    }
  } else if(turnCounter <= 18) {
    applyCounter(e);
    millCreated = checkMill(e);
    if(!millCreated) {
      turnCounter++;
      if(turnCounter % 2 === 0) {
        $playerDisplay.text('Purple');
      } else {
        $playerDisplay.text('Green');
      }
    } else {
      console.log('mill created');
    }
  } else if(!movingCounter) {
    pickUpCounter(e);
  } else {
    placeCounter(e);
    millCreated = checkMill(e);
    if(!millCreated) {
      turnCounter++;
      if(turnCounter % 2 === 0) {
        $playerDisplay.text('Purple');
      } else {
        $playerDisplay.text('Green');
      }
    }
  }
  if(purplePlayer === 9) {
    $winner.text('Purple wins!');
  } else if(greenPlayer === 9) {
    $winner.text('Green wins!');
  }
  $turnDisplay.text(turnCounter);

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
  $nodes.removeClass('green');
  $nodes.removeClass('purple');
  $playerDisplay.text('Green');
  $turnDisplay.text(turnCounter);
}

//event listerners go here
$nodes.on('click', nodeClicked);
$button.on('click', reset);
