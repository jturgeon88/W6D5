import Board from './board';
import React from 'react';
import * as Minesweeper from '../minesweeper';

class Game extends React.Component {
    constructor(props) {
      super(props);
      const board = new Minesweeper.Board(9, 10);
      this.state = {
        board: board
      };
      
      this.updateGame = this.updateGame.bind(this);
    }

    updateGame (tile, flagged) {
      if (flagged) {
        tile.toggleFlag();
      } else {
        tile.explore();
      }

      this.setState({
        board: this.state.board
      });


    }

    render () {
      let modal;
      if (this.state.board.lost() || this.state.board.won()) {
        const text = this.state.board.won() ? "You won!" : "You lost, loserrr!";
        modal = <p>{text}</p>;
      } 

      return (
        <div>
        {modal}
          <Board board={this.state.board} updateGame={this.updateGame} />
        </div>
      )
    }
}

export default Game;