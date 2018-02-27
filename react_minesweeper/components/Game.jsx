import Board from './board';
import React from 'react';
import * as Minesweeper from '../minesweeper';

class Game extends React.Component () {
    constructor(props) {
      super(props);
      const board = new Minesweeper.Board(9, 10);
      this.state = {
        board: board
      };
      
      this.updateGame = this.updateGame.bind(this);
    }

    updateGame (){
      // we'll come back to this after we have a properly rendering board
    }

    render () {
      //Then, write a render method. Have it return a new React component, Board, passing in this.state.board and this.updateGame as props. 

      return (
        <div>
          <Board board={this.state.board} updateGame={this.updateGame} />
        </div>
      )
    }
}