/*

Given a checkerboard which is in the midst of a game, please identify all the valid moves which can be made by a specific player.  For example, if given the board below, return the moves (start postion -> end postion) which are valid for the red player to make:

   A B C D E F G H
0  B _ B _ B _ B _
1  _ B _ B _ B _ B
2  _ _ _ _ _ _ _ _
3  _ _ _ _ _ _ _ _
4  _ _ _ _ _ _ _ _
5  _ _ _ _ _ _ _ _
6  R _ R _ R _ R _
7  _ R _ R _ R _ R

This would be represented as a two-dimensional array using the characters: "R" for the red player, "B" for the black player, and "_" for empty spaces.  The black player always starts on rows 0 & 1, while the red player always starts on rows 6 & 7.

Pieces may only move diagonally by a single space.  Unless there is another oppositing piece in a valid move position, in which case, they can hop over that piece, landing on the other side so long as there is an empty space.

We are not concerned with multiple hops.  We are not concerned with required hops. We are only concerned with ordinary pieces: not kings.

valid moves for red: [(A6, B5), (C6, B5), (C6, D5), (E6, D5), (E6, F5), (G6, F5), (G6, H5)]

- keep track of our final available moves
- need a way to check the directions around each playable piece
  - we're only checking diagonally, and the move is only valid if that cell in empty or the opposite color is there with an empty cell after
  - only moving forward, no backward moves

- main function
- iterate through the 2d array through rows and columns
- look for the pieces that align with the player
- for each player's piece we can use our helper function to check the directions and see if there are any valid moves
- append the answer to our resulting array

- helper fucntion
- board, cell, player,
- variables if the player is either a black or red piece
- loop through directions
  - valid moves can't be out of bounds
  - if either diagonal move is empty, convert that move to letter format and push to results array
  - if the diagonal move contains the opposite color piece, we'll want to check if the diagonal after that in the same direction is empty, if so, convert that cell to the letter format and push to result array 

- helper for converting to letter format
- take in the move
- variable for our columns thats a string with A-H
- start move[0] end move[1]
- return a `${columns[start]}
*/

function findValidMoves(board, player) {
  let validMoves = [];

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] === player) {
        let moves = findMovesForPiece(board, [row, col], player);
        // push the resulting moves into validMoves
      }
    }
  }

  return validMoves;
}

function findMovesForPiece(board, cell, player) {
  let moves = [];
  let directions =
    player === "R"
      ? [
          [-1, -1],
          [-1, +1],
        ]
      : [
          [+1, -1],
          [1, 1],
        ];

  for (let direction of directions) {
    let targetCell = [cell[0] + direction[0], cell[1] + direction[1]];
  }
}

function isValidMove(board, currentCell, targetCell, player) {}

function convertIndexToLetter(move) {}

function computeMove(cell, direction) {
  return [[...cell], [cell[0] + direction[0], cell[1] + direction[1]]];
}

function formatMoveForDisplay(move) {
  // return "A1 -> B2"
}

/*
copy the example and move things around to see what's happening, that contains every possible case, write down anything at all that you know, call helper functions even if you havent declared them, make lists of names that fit different situations i.e. target, cellnotice when you're freaking out and practice unfreaking out, meditate, let disruptive thoughts slide past, yes but not now, 24 hours before, convince yourself you don't want this job, this isn't that great, its not ideal, dont put too much importance on this one thing, remember that you like doing this and it's fun
*/
