# Office Game JS
## Introduction

Your new company wants to create a game for its employees to relax during breaks after all the hard work they are putting in. Your task is to finish the modified version of a popular Tic-tac-toe game, as your colleague has already started the implementation.
 
## Problem Statement
 
Tic-tac-toe is an instance of an m,n,k game in which two players take turns placing tiles of their marks (`X` or `O`) on an *m x n* board until one player gets *k* tiles of their marks in a row (horizontally, vertically, or diagonally).
 
You should create a Tic-tac-toe version that has a `4x4` board. Diagonal tile arrangements should not be considered as winning positions. Instead, only horizontal, vertical, and square arrangements can lead to winning the match. This means that 4 horizontal, 4 vertical tiles or 4 tiles in a 2x2 square of the same mark should result in a win. If none of the players achieves the above-mentioned position, the game is considered a draw.
 
The game should allow two players to play against each other, alternating their turns by clicking on the appropriate tiles. If a tile has already been taken in the previous turn, clicking it again should be disabled.
 
There is a status bar above the game board that should say `Game in progress...` once the game is opened. When the game ends, it should say:
   - `Player 1 won!` if the player with `X` mark wins.
   - `Player 2 won!` if the player with `O` mark wins.
   - `Draw!` if the game results in a draw.
 
There are two player labels below the game board that should indicate whose turn it is currently. For the player that is currently playing, the label should be marked with green (the `active` class should be attached). This class should be removed once the game is over.
 
Once the game is over and the status bar indicates the outcome, the restart button inside the `restart` section should be displayed. Clicking this button should allow users to play again and restart the board to the initial state. It should also hide the button itself. You should listen to click events on the element with the `restart-btn` ID. This element should be hidden with `display: none` once the game is started.
 
Players should not be allowed to take turns once the game is over.
 
Complete the missing code in JavaScript to enable your company to enjoy this Tic-tac-toe version.
 
For more details, please run the task inside DevSkiller and see failing tests.
 
## Good Luck!
