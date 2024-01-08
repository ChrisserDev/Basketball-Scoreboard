# Basketball Scoreboard App

## Overview of the project:

This project is a web-based basketball scorekeeping application with a user interface that includes a basketball court background image, timer, team scores, and fouls. 

It allows users to start a game, increment scores and fouls for both the home and guest teams, display possession arrows based on the current score, and start a new game.

## Key Concepts Used:

### HTML Structure:

The project uses HTML to structure the main content with div elements for the timer, teams, and a modal for starting a new game.

### CSS Styling:

CSS is employed for styling, including background images, container styles, button styles, and responsive design for mobile layout.

### Modal Interaction:

A modal is displayed when the game timer reaches zero, prompting users to start a new game.

### Responsive Design:

Media queries are used for responsive design, adjusting font sizes and layout for mobile devices.

### FontAwesome Icons:

FontAwesome icons are utilized for possession arrows.

## JS Explained:

### 1. DOM Elements:

Several constants are declared to store references to various HTML elements, making it easier to interact with them in the JavaScript code.

![image](https://github.com/ChrisserDev/Basketball-Scoreboard/assets/126911205/ad76a335-a52c-4c12-9691-1df267572975)
 
### 2. Initial Variables:

Initial game variables such as scores, fouls, and timer values are declared.

![image](https://github.com/ChrisserDev/Basketball-Scoreboard/assets/126911205/90bdd338-f62a-4c21-9648-1d728ad72600)
 
### 3. Event Listeners:
   
An event listener is added to the "Start Game" button (startGameBtn). When clicked, it triggers the startGameBtn callback function.

The callback function uses setInterval to decrement the timer every second until it reaches zero. It also handles the logic to reset the timer and display a modal when the game time is up.

![image](https://github.com/ChrisserDev/Basketball-Scoreboard/assets/126911205/fbb6c3ad-16df-4cae-a0d5-70091cb39295)

### 4. Reset Timer Variables Function:

The resetTimerVariables function resets various game-related variables and display settings to their initial state when starting a new game.

![image](https://github.com/ChrisserDev/Basketball-Scoreboard/assets/126911205/f14eb901-f450-4515-9bcc-75b6b9cb00e5)
 
### 5. Button Click Handling Function:

The handleBtnClicks function sets up event listeners for buttons related to scoring and fouls for both the home and guest teams.

![image](https://github.com/ChrisserDev/Basketball-Scoreboard/assets/126911205/3a167134-1c61-49e8-88ba-051c823993fe)
![image](https://github.com/ChrisserDev/Basketball-Scoreboard/assets/126911205/11acabaa-b832-4b2d-ae31-7c20f8a9d940)
 
### 6.Display Possession Function:

The displayPossession function determines which team has possession based on the score and displays corresponding arrows.

![image](https://github.com/ChrisserDev/Basketball-Scoreboard/assets/126911205/1afb9192-1674-4905-8a55-dd7e23f4a768)
 
### 7. Start New Game Event Listener:

An event listener is set up for the "Start New Game" button (startNewGame). When clicked, it triggers the callback function, which resets the game variables and starts a new game.

![image](https://github.com/ChrisserDev/Basketball-Scoreboard/assets/126911205/d5283783-6e22-4c51-8b62-6ee2ee68d7d1)
 
These functions and event listeners collectively manage the game state, handle user interactions, and update the display accordingly in response to various events.

