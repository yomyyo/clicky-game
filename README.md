# Dragon Ball Clicky Game

A React memory game featuring Dragon Ball characters. Click each character once
to increase the score; clicking the same character twice resets the round.
Images are shuffled after every selection.

## Features

- Nine clickable character cards
- Randomized card order after every click
- Current score and persistent top score
- Automatic round reset after a repeated selection

## Technology

- React 16
- Create React App
- CSS
- GitHub Pages deployment script

## Run Locally

The React application lives in the nested `clicky-game/` directory:

```bash
cd clicky-game
npm install
npm start
```

Open `http://localhost:3000`.

## Build

```bash
cd clicky-game
npm run build
```

## How to Play

1. Click any character image.
2. Continue selecting characters not clicked during the current round.
3. Each unique selection adds one point.
4. Selecting a repeated character resets the current score.
5. The top score remains until the page is refreshed.

## Project Status

This is a legacy React coursework project using an older Create React App
toolchain. It demonstrates component state, event handling, and list rendering.
