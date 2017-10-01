import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../assets/styles/style.css';
import '../assets/styles/font-awesome.css';

class WelcomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      checkbox: ''
    }
  }

  signupChange(){
    this.props.action.showSignupForm();
  }


  render() {
    return (
          <div className="w3-agile-banner">
            <div className="center-container">
              <div className="header-w3l">
                <h1>Find the Lost</h1>
              </div>
              <div className="main-content-agile">
                <div className="wthree-pro">
                  <h2>Identify yourself</h2>
                </div>
                <div className="sub-main-w3">
                  <form action="#" method="post">
                    <input placeholder="E-mail" value={this.state.email} name="mail" type="email" required=""></input>
                    <span className="icon1"><i className="fa fa-user" aria-hidden="true"></i></span>
                    <input  placeholder="Password" value={this.state.password} name="Password" type="password" required=""></input>
                    <span className="icon2"><i className="fa fa-unlock" aria-hidden="true"></i></span>
                    <div className="rem-w3">
                      <span className="check-w3"><input type="checkbox"  value={this.state.password} />Remember Me</span>
                      <a className="w3-pass" href="#">Forgot Password?</a>
                      <div className="clear"></div>
                    </div>
                    <div className="w3-head-continue">
                      <h4>Continue with</h4>
                    </div>
                    <div className="navbar-right social-icons">
                        <ul>
                          <li><a href="#" className="fa fa-facebook icon-border facebook"> </a></li>
                          <li><a href="#" className="fa fa-twitter icon-border twitter"> </a></li>
                          <li><a href="#" className="fa fa-google-plus icon-border googleplus"> </a></li>
                          <li><a href="#" className="fa fa-pinterest icon-border rss"> </a></li>
                        </ul>
                      </div>
                    <input type="submit" value="Login"/>
                    <button className="sign-up" onChange={this.signupChange}> or SignUp</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
    );
  }
}


/*
Redux Containers - To map the components to store
*/

function mapStateToProps(state){
}

function mapDispatchToProps(dispatch){
}

export default connect(mapStateToProps,mapDispatchToProps)(WelcomePage);
