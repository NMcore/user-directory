import React, { Component } from 'react';
import './assets/reset.css'
import './assets/style.css'
import UserInfo from './components/UserInfo'
import Nav from './components/Nav'
import data from './data';

class App extends Component {
constructor() {
  super()

  this.state = {
    index: 0,
    users: data,
  }
}

moreHandle = () => {
  if(this.state.index < 24){
    const moreValue = this.state.index + 1;
    this.setState({ index: moreValue });
  }
}

lessHandle = () => {
  if(this.state.index > 0){
    const lessValue = this.state.index - 1;
    this.setState({ index: lessValue });
  }
}



deleteUser = () => {
  const removeUsers = [...this.state.users];
  removeUsers.splice(this.state.index,1)
  this.setState({users: removeUsers})
  // this.setState(this.state.users[this.state.index].id.splice(1,1))
}


  render() { 
    console.log(this.state.users[this.state.index].id)
    return (
      <div>
        <header className="userhead">
          <h3 className="header">Home</h3> 
        </header>
          <div className="container">
              <UserInfo  userInfo={this.state.users[this.state.index]}/> 
              <div className="containerA">  
                <Nav 
                moreValue={this.moreHandle} 
                lessValue={this.lessHandle}  
                deleteUser={this.deleteUser}
                /> 
              </div>
          </div>
      </div>
    )
  }
}
export default App;
