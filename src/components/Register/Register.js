import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    }
  }

  onUsernameChange = (e) => {
    this.setState({username: e.target.value});
    console.log(e.target.value)
  }

  onEmailChange = (e) => {
    this.setState({email: e.target.value});
    console.log(e.target.value)
  }

  onPasswordChange = (e) => {
    this.setState({password: e.target.value});
    console.log(e.target.value)
  }

  onSubmitRegister = () => {
    const { onRouteChange } = this.props;
    onRouteChange('home')
  }

  render() { 
    const { onUsernameChange, onEmailChange, onPasswordChange } = this;
    const { onRouteChange } = this.props
    return (
      <article className="br3 ba dark-gray b--block-10 mv4 w-100 w-50-m w-25-1 mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f4 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="username">Username</label>
                  <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="username" id="username"
                  onChange={onUsernameChange}
               />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address"
                onChange={onEmailChange}
              />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"
                onChange={onPasswordChange}
              />
              </div>
            </fieldset>
            <div className="">
              <input 
              onClick={this.onSubmitRegister}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
              type="submit" 
              value="Register" />
            </div>
            <div className="lh-copy mt3">
              <p onClick={() => onRouteChange('signin')} className="f6 link dim black db pointer">Signin</p>
            </div>
          </div>
        </main>
      </article>
    )
  }
}
 
export default Register;

