import React from 'react';

class Header extends React.Component {

}

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTabIdx: 0
    }
    this.props = props;

  }

  render () {
    // let pane = this.props.pane
    return(
      <div>
        <h1>Tabs</h1>
        <ul>
          <li>
            <h1>{this.props.pane[0].title}</h1>
          </li>
          <li>
            <h1>{this.props.pane[1].title}</h1>
          </li>  
          <li>
            <h1>{this.props.pane[2].title}</h1>
          </li>  
        </ul>  
      </div>  
    );
  }
}




export default Tabs;