import React, { Component } from 'react';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      singInPassword: '',
    }
  }

  onEmailChange = (e) => {
    this.setState({signInEmail: e.target.value});
  }

  onPasswordChange = (e) => {
    this.setState({singInPassword: e.target.value})
  }

  
  onSubmitSignIn = () => {
    const { onRouteChange } = this.props;
    onRouteChange('home')
  }

  render() {
    const { onRouteChange } = this.props;
    const { onEmailChange, onPasswordChange, onSubmitSignIn } = this;
    return (
      <article className="br3 ba dark-gray b--block-10 mv4 w-100 w-50-m w-25-1 mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f4 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={onEmailChange}
                />
              </div> 
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input 
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="password" 
                  name="password"  
                  id="password"
                  onChange={onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input 
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                type="submit" 
                value="Sign in"
                onClick={onSubmitSignIn}
              />
            </div>
            <div className="lh-copy mt3">
              <p onClick={() => onRouteChange('register')} className="f6 link dim black db pointer">Register</p>
            </div>
          </div>
        </main>
      </article>
    )
  }
}
 
export default Signin;
