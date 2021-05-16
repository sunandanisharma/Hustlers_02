import Google from '../../Assets/Google.svg';
import github from '../../Assets/github.svg';
import React, { Component } from 'react';
import dribbble from '../../Assets/dribbble.svg';
import { Link } from 'react-router-dom'
import "./Register.css";
class Register extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state);
    const { history } = this.props
    if (history) history.push('/Cards')
}
render() {
  return (
  <div className="initialsec"> 
    <div className='section'>
      <h2 className="title">Register to Hustler Village</h2> 
       <div className="icons">
          <button className="Google"> <img  src={Google} alt="ab" />Google</button>
          <button className="Github"><img src={github} alt="ab" />Github</button>
          <button className="Dribble"><img  src={dribbble} alt="ab" />Dribble</button>
        </div>
   <p className="desc">or log in with email</p>
    </div> 
<form className='cardnew'> 
  <div className="name">
  <div className="firstid">
  <label className='first-content'>First Name</label>
  <input className='first-input' type="name1" value={this.state.nam1} onChange={this.handleChange}></input>
  </div>
  <div className="last-mailid">
  <label className='last-content'>Last Name</label>
  <input className='last-input' type="name2" value={this.state.nam2} onChange={this.handleChange}></input>
  </div>
  </div>
  <div className="mailid">
  <label className='content'>Email</label>
  <input className='input' type="email" value={this.state.email} onChange={this.handleChange} />
        </div>
          <div className="Pass">
          <label className='desc1'>Password</label>
          <div>
          <p className='forpas'>Forget Password?</p>
            </div>
         <input className='passinput' type="password" value={this.state.password} onChange={this.handleChange}/>
        </div>
         <div>
          <Link to='/Cards'>
          <button className='new'>Take Me To The Village</button>
          </Link>
        </div>
        <p className="sign1"> Don't have an account on HustlersVillage? 
        <Link to='/Cards' className='sign'>Sign up</Link>
        </p>
</form>
 </div>
  );
}
}
export default Register