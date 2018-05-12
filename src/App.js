import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
}, {
    title: 'Redux111',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
}, ];

// App =>（es6类组件，是个组件声明）
//<App /> => (实例化)
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: list,
    }
  this.onDismiss = this.onDismiss.bind(this);
  this.onSearchChange = this.onSearchChange.bind(this);
  }
  onDismiss(id){
    const updatedList = this.state.list.filter((item)=>{
        return item.objectID !==id;
    });
    this.setState({list:updatedList})
  }
  render() {
 
    return (
      //元素（element） JSX
    <div className="App"  > 
    <form>
          <input onChange={this.onSearchChange} type="text" />
</form>
      {this.state.list.map((item)=>{
        return (
        <div key={item.objectID}> <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
              <span>
              <button
                // onClick={(this.onDismiss}
                onClick={() => this.onDismiss(item.objectID)}
                type="button"> Dismiss
              </button>
            </span>
</div>)
      })}
    </div>
    );
  }
}

export default App;
