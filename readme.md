![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

#Bacchus

<figure>
  <a href="https://blj-ga-project1.herokuapp.com"><img src="http://i.imgur.com/17Zp9n8.png"></a>
  <figcaption><a href="https://blj-ga-project1.herokuapp.com" title="Bacchus">My first project at GA: an implementation of the ancient game Bacchus</a>.</figcaption>
</figure>

### [](https;//github.com/benlloydjones/wdi-project-1#setup)Installation and setup

#### Run Locally

- Download or clone the [Github repo](https;//github.com/benlloydjones/wdi-project-1)
- Run `gulp` in the terminal to compile the source code and open in the browser

#### View Online

- [View on Heroku](https;//blj-ga-project1.herokuapp.com)
- [View on Github](https://github.com/benlloydjones/wdi-project-1)  

<figure>
  <a href="https://blj-ga-project1.herokuapp.com"><img src="http://i.imgur.com/ZFKijCz.png"></a>
  <figcaption><a href="https://blj-ga-project1.herokuapp.com" title="Bacchus">A game in the early stages, it is now red's turn</a>.</figcaption>
</figure>

### [](https://github.com/benlloydjones/wdi-project-1#technologies-used)Technologies used

To create this project I used the following technologies:

- HTML5
- SCSS
- Javascript (ECMAScript 6)
- jQuery
- Gulp
- Yarn
- Git
- Github
- Heroku

### [](https://github.com/benlloydjones/wdi-project-1#challenges-faced)Challenges Faced

The biggest problem I had with the project was drying up my code and trying to keep it dry. I initially had exceptionally long if/else statements handling whether player moves were legitimate or not but managed to dry this up by placing the logic for these in objects.

An example of this was the `validMoves` object that was made of key value pairs where the originating position was the key and the value was an array of legitimate moves from that position. This stood me well in the long run. It not only allowed me to use it to make sure that a move the player was making was fair but also that a particular token had any valid moves and thus stop the player from picking up tokens with no valid moves. Lastly it allowed me to inject the rules of the game straight in to the functions that allow the computer to make a move to ensure that the computer is playing by the same rules as the player.

I also attempted to make a computer player so that the game could be played solo. This task was more complex than I had anticipated and I was only able to understand the complexity of the computer placing counters and removing counters and code them in the time frame allotted. I did not manage to fully grasp the complexity of getting the computer to make an effective move and test that understanding in time to implement it in the game, frustratingly it currently makes uncoordinated moves which is very unsatisfying, this takes us to...

### [](https;//github.com/benlloydjones/wdi-project-1#where-next)Where next?

There are definitely lots of areas that the game can be extended and improved:

- Completing the computer player:
  * The computer player currently makes pseudo-random moves once it comes to moving rather than placing counters. This ends up with the computer cycling through counters and trying to clump them in the bottom left hand corner of the board. This is less than ideal. Fully understanding the problem and then writing a script for the computer to follow when doing this was beyond me in the time frame of the project.

- Improving the UI:
  * The UI currently *works* on small screen devices but it is not attractive. An overhaul of this so that it is more effective on small screens would be for the best.
  * Currently the game renders correctly in Chrome but not in some other browsers, especially on mobile devices, updating the UI so that it renders correctly on multiple browsers would be good.
  * The UI can definitely give more feedback to the user. Currently it instructs the user what their next move is, this can be taken further by providing error messages when the user tries to make an illegal move or highlighting  nodes where the user can move a counter to and highlighting which counters the user can remove when creating a mill.
  * The above point can be taken further with the addition of sound to the game to give positive feedback once a correct move has been taken.
  * Making reaching of the win condition more exciting, rather than some small text in the bottom left of the screen.

- Improving the code:
  * I am certain that there are areas of my code that can be dried up further and made more generic, there are similar functions doing the same thing that could be better if passed arguments instructing them what to do e.g. finding empty nodes, finding red nodes and finding blue nodes should all be the same function with an argument passed telling it which nodes to look for.
  * I am also certain that it can be refactored further to break up some of the much larger functions, for example those handling flow control between turns is trying to do too much at the moment and should be broken down further.
