import React from 'react';

class Tile extends React.Component {
  constructor (props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const flagged = e.altKey ? true : false;
    this.props.updateGame(this.props.tile, flagged);
  }

  render () {
    const tile = this.props.tile;
    console.log(tile);
    let klass, text, count;
    if (tile.explored) {
      if (tile.bombed) {
        //Game over
        klass = 'bombed';
        text = '\u2622'   // this is Unicode for a radioactive sign
      } else {
        // tile is explored and we need to give it a class that
        // represents that
        klass = 'explored';
        count = tile.adjacentBombCount();     //note that this method comes from the minesweeper.js library. We're able to use it because this is a real Tile object from that library which whas created when the Minesweeper.Board was initialized in the Game class. This Tile object was passed down through the props
        text = (count > 0 ? `${count} ` : "");
      } 
    } else if (tile.flagged) {
        klass = 'flagged';
        text = '\u2691'     // this is Unicode for a black flag (will probably style it to be red later)
    } else {
      klass = 'unexplored';
    }
    klass = `tile ${klass}`;      // we do this so that we can add one interpolated object into the className atr (since we can't enter one class in string and one class interpolated)

    return (
      <div className={klass} onClick={this.handleClick}>{text}</div>
    );
  } 
}

export default Tile;