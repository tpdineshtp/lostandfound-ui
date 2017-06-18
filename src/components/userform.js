import React, { Component } from 'react';

class UserForm extends Component {
  constructor(props){
    super(props);
  }

  authenticate_user(){
    var documentElementId = this.props.register? "r" : ""
    var user_name = document.getElementById(documentElementId +'username').value;
    var password = document.getElementById(documentElementId +'password').value;
    if(!this.props.register){
      this.props.useraction.authUser({username: user_name, password: password})
    }
    else{
      this.props.useraction.addUser({username: user_name, password: password})
    }
  }

  render() {
    var documentElementId = this.props.register? "r" : ""
    return (
      <div>
        <input id={documentElementId+"username"} type="text" /> <br />
        <input id={documentElementId+"password"} type="password" /> <br />
        <input type="submit" onClick={() => this.authenticate_user()}/>
      </div>
    );
  }
}

export default UserForm;
