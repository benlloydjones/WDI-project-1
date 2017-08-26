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
  if($(e.target)[0] === $node1[0]) {//click on node1 check horizontal then vertical
    console.log('node1');
    if($(e.target).css('background-color') === $node2.css('background-color') && $(e.target).css('background-color') === $node3.css('background-color')) {
      return true;
    } else if ($(e.target).css('background-color') === $node4.css('background-color') && $(e.target).css('background-color') === $node6.css('background-color')) {
      return true;
    }
  } else if($(e.target)[0] === $node2[0]) {//click on node2 check horizontal then vertical
    console.log('node2');
    if($(e.target).css('background-color') === $node1.css('background-color') && $(e.target).css('background-color') === $node3.css('background-color')) {
      return true;
    } else if($(e.target).css('background-color') === $node10.css('background-color') && $(e.target).css('background-color') === $node18.css('background-color')) {
      return true;
    }
  } else if($(e.target)[0] === $node3[0]) {//click on node3 check horizontal then vertical
    console.log('node3');
    if($(e.target).css('background-color') === $node1.css('background-color') && $(e.target).css('background-color') === $node2.css('background-color')) {
      return true;
    } else if($(e.target).css('background-color') === $node5.css('background-color') && $(e.target).css('background-color') === $node8.css('background-color')) {
      return true;
    }
  } else if ($(e.target)[0] === $node4[0]) {//click on node4 check horizontal then vertical
    console.log('node4');
    if($(e.target).css('background-color') === $node12.css('background-color') && $(e.target).css('background-color') === $node20.css('background-color')) {
      return true;
    } else if($(e.target).css('background-color') === $node1.css('background-color') && $(e.target).css('background-color') === $node6.css('background-color')) {
      return true;
    }
  } else if($(e.target)[0] === $node5[0]) {//click on node5 check horizontal then vertical
    console.log('node5');
    if($(e.target).css('background-color') === $node21.css('background-color') && $(e.target).css('background-color') === $node13.css('background-color')) {
      return true;
    } else if($(e.target).css('background-color') === $node3.css('background-color') && $(e.target).css('background-color') === $node8.css('background-color')) {
      return true;
    }
  } else if ($(e.target)[0] === $node6[0]) {//click on node6 check horizontal then vertical
    console.log('node6');
    if($(e.target).css('background-color') === $node7.css('background-color') && $(e.target).css('background-color') === $node8.css('background-color')) {
      return true;
    } else if($(e.target).css('background-color') === $node1.css('background-color') && $(e.target).css('background-color') === $node4.css('background-color')) {
      return true;
    }
  } else if($(e.target)[0] === $node7[0]) {//click on node7 check horizontal then vertical
    console.log('node7');
    if($(e.target).css('background-color') === $node6.css('background-color') && $(e.target).css('background-color') === $node8.css('background-color')) {
      return true;
    } else if($(e.target).css('background-color') === $node23.css('background-color') && $(e.target).css('background-color') === $node15.css('background-color')) {
      return true;
    }
  } else if($(e.target)[0] === $node8[0]) {//click on node8 check horizontal then vertical
    console.log('node8');
    if($(e.target).css('background-color') === $node6.css('background-color') && $(e.target).css('background-color') === $node7.css('background-color')) {
      return true;
    } else if($(e.target).css('background-color') === $node3.css('background-color') && $(e.target).css('background-color') === $node5.css('background-color')) {
      return true;
    }
  } else if($(e.target)[0] === $node9[0]) {//click on node9 check horizontal then vertical
    console.log('node9');
    if($(e.target).css('background-color') === $node10.css('background-color') && $(e.target).css('background-color') === $node11.css('background-color')) {
      return true;
    } else if($(e.target).css('background-color') === $node12.css('background-color') && $(e.target).css('background-color') === $node14.css('background-color')) {
      return true;
    }
  } else if($(e.target)[0] === $node10[0]) {//click on node10 check horizontal then vertical
    console.log('node10');
    if($(e.target).css('background-color') === $node9.css('background-color') && $(e.target).css('background-color') === $node11.css('background-color')) {
      return true;
    } else if($(e.target).css('background-color') === $node2.css('background-color') && $(e.target).css('background-color') === $node18.css('background-color')) {
      return true;
    }
  } else if($(e.target)[0] === $node11[0]) {//click on node11 check horizontal then vertical
    console.log('node11');
    if($(e.target).css('background-color') === $node9.css('background-color') && $(e.target).css('background-color') === $node10.css('background-color')) {
      return true;
    } else if($(e.target).css('background-color') === $node13.css('background-color') && $(e.target).css('background-color') === $node16.css('background-color')) {
      return true;
    }
  } else if($(e.target)[0] === $node12[0]) {//click on node12 check horizontal then vertical
    console.log('node12');
    if($(e.target).css('background-color') === $node4.css('background-color') && $(e.target).css('background-color') === $node20.css('background-color')) {
      return true;
    } else if($(e.target).css('background-color') === $node9.css('background-color') && $(e.target).css('background-color') === $node14.css('background-color')) {
      return true;
    }
  } else if($(e.target)[0] === $node13[0]) {//click on node13 check horizontal then vertical
    console.log('node13');
    if($(e.target).css('background-color') === $node21.css('background-color') && $(e.target).css('background-color') === $node5.css('background-color')) {
      return true;
    } else if($(e.target).css('background-color') === $node11.css('background-color') && $(e.target).css('background-color') === $node16.css('background-color')) {
      return true;
    }
  } else if($(e.target)[0] === $node14[0]) {//click on node14 check horizontal then vertical
    console.log('node14');
    if($(e.target).css('background-color') === $node15.css('background-color') && $(e.target).css('background-color') === $node16.css('background-color')) {
      return true;
    } else if($(e.target).css('background-color') === $node9.css('background-color') && $(e.target).css('background-color') === $node12.css('background-color')) {
      return true;
    }
  } else if($(e.target)[0] === $node15[0]) {//click on node15 check horizontal then vertical
    console.log('node15');
    if($(e.target).css('background-color') === $node14.css('background-color') && $(e.target).css('background-color') === $node16.css('background-color')) {
      return true;
    } else if($(e.target).css('background-color') === $node23.css('background-color') && $(e.target).css('background-color') === $node7.css('background-color')) {
      return true;
    }
  } else if($(e.target)[0] === $node16[0]) {//click on node16 check horizontal then vertical
    console.log('node16');
    if($(e.target).css('background-color') === $node14.css('background-color') && $(e.target).css('background-color') === $node15.css('background-color')) {
      return true;
    } else if($(e.target).css('background-color') === $node11.css('background-color') && $(e.target).css('background-color') === $node13.css('background-color')) {
      return true;
    }
  } else if($(e.target)[0] === $node17[0]) {//click on node17 check horizontal then vertical
    console.log('node17');
    if($(e.target).css('background-color') === $node18.css('background-color') && $(e.target).css('background-color') === $node19.css('background-color')) {
      return true;
    } else if($(e.target).css('background-color') === $node20.css('background-color') && $(e.target).css('background-color') === $node22.css('background-color')) {
      return true;
    }
  } else if($(e.target)[0] === $node18[0]) {//click on node18 check horizontal then vertical
    console.log('node18');
    if($(e.target).css('background-color') === $node17.css('background-color') && $(e.target).css('background-color') === $node19.css('background-color')) {
      return true;
    } else if($(e.target).css('background-color') === $node2.css('background-color') && $(e.target).css('background-color') === $node10.css('background-color')) {
      return true;
    }
  } else if($(e.target)[0] === $node19[0]) {//click on node19 check horizontal then vertical
    console.log('node19');
    if($(e.target).css('background-color') === $node17.css('background-color') && $(e.target).css('background-color') === $node18.css('background-color')) {
      return true;
    } else if($(e.target).css('background-color') === $node21.css('background-color') && $(e.target).css('background-color') === $node24.css('background-color')) {
      return true;
    }
  } else if($(e.target)[0] === $node20[0]) {//click on node20 check horizontal then vertical
    console.log('node20');
    if($(e.target).css('background-color') === $node4.css('background-color') && $(e.target).css('background-color') === $node12.css('background-color')) {
      return true;
    } else if($(e.target).css('background-color') === $node17.css('background-color') && $(e.target).css('background-color') === $node22.css('background-color')) {
      return true;
    }
  } else if($(e.target)[0] === $node21[0]) {//click on node21 check horizontal then vertical
    console.log('node21');
    if($(e.target).css('background-color') === $node13.css('background-color') && $(e.target).css('background-color') === $node5.css('background-color')) {
      return true;
    } else if($(e.target).css('background-color') === $node19.css('background-color') && $(e.target).css('background-color') === $node24.css('background-color')) {
      return true;
    }
  } else if($(e.target)[0] === $node22[0]) {//click on node22 check horizontal then vertical
    console.log('node22');
    if($(e.target).css('background-color') === $node23.css('background-color') && $(e.target).css('background-color') === $node24.css('background-color')) {
      return true;
    } else if($(e.target).css('background-color') === $node17.css('background-color') && $(e.target).css('background-color') === $node20.css('background-color')) {
      return true;
    }
  } else if($(e.target)[0] === $node23[0]) {//click on node23 check horizontal then vertical
    console.log('node23');
    if($(e.target).css('background-color') === $node22.css('background-color') && $(e.target).css('background-color') === $node24.css('background-color')) {
      return true;
    } else if($(e.target).css('background-color') === $node15.css('background-color') && $(e.target).css('background-color') === $node7.css('background-color')) {
      return true;
    }
  } else if($(e.target)[0] === $node24[0]) {//click on node24 check horizontal then vertical
    console.log('node24');
    if($(e.target).css('background-color') === $node22.css('background-color') && $(e.target).css('background-color') === $node23.css('background-color')) {
      return true;
    } else if($(e.target).css('background-color') === $node19.css('background-color') && $(e.target).css('background-color') === $node21.css('background-color')) {
      return true;
    }
  } else {
    return false;
  }
}

//this function will place a counter on a node without a counter on it.
function applyCounter(e) {
  if($(e.target).hasClass('purple') || $(e.target).hasClass('green')) {
    console.log('already contains counter');
  } else {
    if(turnCounter % 2 === 0) {
      $(e.target).addClass('purple');
      console.log('purple click', `, turn: ${turnCounter}`);
      turnCounter++;
    } else {
      $(e.target).addClass('green');
      console.log('green click', `, turn: ${turnCounter}`);
      turnCounter++;
    }
  }
}

//this function will remove a counter if that counter is not in a mill and increase the score of the player removing a counter
function removeCounter(e) {
  if(!checkMill(e)) {
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
  } else {
    console.log('this is in a mill');
  }
}

//function to pick up counter and track where it was picked up from
function pickUpCounter(e) {
  if($(e.target).hasClass('purple')) {
    $(e.target).removeClass('purple');
    nodeFrom = $(e.target)[0];
    counterInHand = 'purple';
    movingCounter = true;
  } else if($(e.target).hasClass('green')) {
    $(e.target).removeClass('green');
    nodeFrom = $(e.target)[0];
    counterInHand = 'green';
    movingCounter = true;
  }
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

function fairMove(e) {
  if(nodeFrom === $node1[0]) {
    if($(e.target)[0] === $node2[0] || $(e.target)[0] === $node4[0]) {
      return true;
    } else {
      return false;
    }
  } else if(nodeFrom === $node2[0]) {
    if($(e.target)[0] === $node1[0] || $(e.target)[0] === $node10[0] || $(e.target)[0] === $node3[0]) {
      return true;
    } else {
      return false;
    }
  } else if(nodeFrom === $node3[0]) {
    if($(e.target)[0] === $node2[0] || $(e.target)[0] === $node5[0]) {
      return true;
    } else {
      return false;
    }
  } else if(nodeFrom === $node4[0]) {
    if($(e.target)[0] === $node1[0] || $(e.target)[0] === $node12[0] || $(e.target)[0] === $node6[0]) {
      return true;
    } else {
      return false;
    }
  } else if(nodeFrom === $node5[0]) {
    if($(e.target)[0] === $node3[0] || $(e.target)[0] === $node8[0] || $(e.target)[0] === $node13[0]) {
      return true;
    } else {
      return false;
    }
  } else if(nodeFrom === $node6[0]) {
    if($(e.target)[0] === $node4[0] || $(e.target)[0] === $node7[0]) {
      return true;
    } else {
      return false;
    }
  } else if(nodeFrom === $node7[0]) {
    if($(e.target)[0] === $node15[0] || $(e.target)[0] === $node8[0] || $(e.target)[0] === $node6[0]) {
      return true;
    } else {
      return false;
    }
  } else if(nodeFrom === $node8[0]) {
    if($(e.target)[0] === $node5[0] || $(e.target)[0] === $node7[0]) {
      return true;
    } else {
      return false;
    }
  } else if(nodeFrom === $node9[0]) {
    if($(e.target)[0] === $node10[0] || $(e.target)[0] === $node12[0]) {
      return true;
    } else {
      return false;
    }
  } else if(nodeFrom === $node10[0]) {
    if($(e.target)[0] === $node2[0] || $(e.target)[0] === $node11[0] || $(e.target)[0] === $node18[0] || $(e.target)[0] === $node9[0]) {
      return true;
    } else {
      return false;
    }
  } else if(nodeFrom === $node11[0]) {
    if($(e.target)[0] === $node13[0] || $(e.target)[0] === $node10[0]) {
      return true;
    } else {
      return false;
    }
  } else if(nodeFrom === $node12[0]) {
    if($(e.target)[0] === $node9[0] || $(e.target)[0] === $node20[0] || $(e.target)[0] === $node14[0] || $(e.target)[0] === $node4[0]) {
      return true;
    } else {
      return false;
    }
  } else if(nodeFrom === $node13[0]) {
    if($(e.target)[0] === $node11[0] || $(e.target)[0] === $node5[0] || $(e.target)[0] === $node16[0] || $(e.target)[0] === $node21[0]) {
      return true;
    } else {
      return false;
    }
  } else if(nodeFrom === $node14[0]) {
    if($(e.target)[0] === $node12[0] || $(e.target)[0] === $node15[0]) {
      return true;
    } else {
      return false;
    }
  } else if(nodeFrom === $node15[0]) {
    if($(e.target)[0] === $node23[0] || $(e.target)[0] === $node16[0] || $(e.target)[0] === $node7[0] || $(e.target)[0] === $node14[0]) {
      return true;
    } else {
      return false;
    }
  } else if(nodeFrom === $node16[0]) {
    if($(e.target)[0] === $node13[0] || $(e.target)[0] === $node15[0]) {
      return true;
    } else {
      return false;
    }
  } else if(nodeFrom === $node17[0]) {
    if($(e.target)[0] === $node18[0] || $(e.target)[0] === $node20[0]) {
      return true;
    } else {
      return false;
    }
  } else if(nodeFrom === $node18[0]) {
    if($(e.target)[0] === $node10[0] || $(e.target)[0] === $node19[0] || $(e.target)[0] === $node17[0]) {
      return true;
    } else {
      return false;
    }
  } else if(nodeFrom === $node19[0]) {
    if($(e.target)[0] === $node21[0] || $(e.target)[0] === $node18[0]) {
      return true;
    } else {
      return false;
    }
  } else if(nodeFrom === $node20[0]) {
    if($(e.target)[0] === $node17[0] || $(e.target)[0] === $node22[0] || $(e.target)[0] === $node12[0]) {
      return true;
    } else {
      return false;
    }
  } else if(nodeFrom === $node21[0]) {
    if($(e.target)[0] === $node19[0] || $(e.target)[0] === $node13[0] || $(e.target)[0] === $node24[0]) {
      return true;
    } else {
      return false;
    }
  } else if(nodeFrom === $node22[0]) {
    if($(e.target)[0] === $node20[0] || $(e.target)[0] === $node23[0]) {
      return true;
    } else {
      return false;
    }
  } else if(nodeFrom === $node23[0]) {
    if($(e.target)[0] === $node24[0] || $(e.target)[0] === $node15[0] || $(e.target)[0] === $node22[0]) {
      return true;
    } else {
      return false;
    }
  } else if(nodeFrom === $node24[0]) {
    if($(e.target)[0] === $node23[0] || $(e.target)[0] === $node21[0]) {
      return true;
    } else {
      return false;
    }
  }
}

//this function determines whether to:
// 1. Remove a counter if a node is created
// 2. Add a counter to the board if the turn is less than or equal to 18
// 3. allow a player to move a counter if the turn is greater than 18
function nodeClicked(e) {
  if(millCreated) {
    removeCounter(e);
  } else if(turnCounter <= 18) {
    applyCounter(e);
    millCreated = checkMill(e);
    if(millCreated) {
      console.log('mill created');
    }
  } else if(!movingCounter) {
    pickUpCounter(e);
  } else {
    placeCounter(e);
    millCreated = checkMill(e);
  }
}

//event listerners go here
$nodes.on('click', nodeClicked);
