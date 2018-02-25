import React from 'react';

class Headers extends React.Component {
  render() {
    let selected = this.props.selectedTabIdx;
    let headers = this.props.panes.map((pane, index) => {
      let title = pane.title;
      let klass = '';
      if (index === selected) {
        klass = 'active';
      }

      return (
        <li 
          key={index}
          className={klass}
          onClick={this.props.onTabChosen.bind(null, index)}>
          {title}{' '}
        </li>
      );
    });
    return (
      <ul className='tab-header'>
        {headers}
      </ul>
    );
  }
}

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTabIdx: 0
    }

    this.selectTab = this.selectTab.bind(this);
  }

  selectTab (num) {
    this.setState({selectedTabIdx: num});
  }

  render () {
    let pane = this.props.panes[this.state.selectedTabIdx];

    return(
      <div>
        <h1>Tabs</h1>
        <div className='tabs'>
          <Headers 
            selectedTabIdx={this.state.selectedTabIdx}
            onTabChosen={this.selectTab}
            panes={this.props.panes}>
          </Headers>
          <div className='tab-content'>
            <article>
              {pane.content}
            </article>
          </div>
        </div>
      </div>  
    );
  }
}




export default Tabs;