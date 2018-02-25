import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';



// array of javascript objects to be passed to the Tabs component as props
const Panes = [
    { title: 'one', content: 'I am the first'},
    { title: 'two', content: 'I am the second'},
    { title: 'three', content: 'I am the third'}
  ];

class Root extends React.Component{

  render () {
    return (
      <div>
        <Clock />
        <Tabs panes={Panes} />
      </div>
    );
  }
}


document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById('main');
  ReactDOM.render(<Root/>, main);
});