import React from 'react';
import './LogIn.css';
import {connect} from 'react-redux';
import { signupUser, messageFinishedThunk } from '../redux/auth/actions';
import { Alert } from 'reactstrap';

export class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.input = React.createRef();
        this.input2 = React.createRef();
        this.state = {
          signUpBoolean: true,
          visible: false,
          visible2: false
        };
        this.onDismiss = this.onDismiss.bind(this);
        this.onDismiss2 = this.onDismiss2.bind(this);

    }

    onDismiss() {
      this.setState({ visible: false });
    }

    onDismiss2() {
      this.setState({ visible2: false });
    }

    handleOptionChange = (e) => {
      if(e.target.value === 'entrepneurs'){
        this.setState({
          signUpBoolean: true
        })
      } else if (e.target.value === 'investors'){
        this.setState({
          signUpBoolean: false
        })
      }
    }

    signUp = (e) => {
      e.preventDefault()
      var email = this.input.current.value
      var password = this.input2.current.value
      var customBoolean = this.state.signUpBoolean
      this.props.signUp(email, password, customBoolean)
    }

    afterSignup = (props) => {
      if(this.props.messageFailureB){
        this.setState({
          visible: true
        });
        setTimeout(function(){props.history.push('/signup')}, 1500)
        this.props.messageFinished();
      }
      if(this.props.messageSuccessB){
        this.setState({
          visible2: true
        });
        setTimeout(function(){props.history.push('/login')}, 2000)
        this.props.messageFinished(); 
      }
    }

    render(){
        return(
            <div>          {this.afterSignup(this.props)}

    <div className="card gedf-card">
<div className="card-body py-2">
  <div className="d-flex justify-content-between align-items-center">
<div className="login-form" id="sign-up-box">
<form className="cards-login" action="/signup" method="post" noValidate>
  <h2 className="text-center">Sign Up</h2>		
  <p className="text-center">Please fill in this form to create an account!</p>
  <hr />
  <Alert color="danger" isOpen={this.state.visible} toggle={this.onDismiss}>Email is already taken!</Alert>
  <div className="form-group">
    <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text"><i className="fa fa-user" /></span>
        <input type="text" className="form-control" name="email" placeholder="Email" required="required" ref={this.input}/>
      </div>
    </div>
  </div>
  <div className="form-group">
    <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text"><i className="fa fa-lock" /></span>
        <input type="password" className="form-control" name="password" placeholder="Password" required="required" ref={this.input2}/>
      </div>
    </div>
  </div>

  <div className="form-group">
    <div className="input-group" style={JCC}>
      <div className="form-check-inline">
        <label className="customradio"><span className="radiotextsty">Entrepneurs</span>
          <input type="radio" name="radio" checked={this.state.signUpBoolean === true} value="entrepneurs" onChange={this.handleOptionChange}/>
          <span className="checkmark" />
        </label> &nbsp; &nbsp; &nbsp; &nbsp;
        <label className="customradio"><span className="radiotextsty" >Investors</span>
          <input type="radio" name="radio"  value="investors" checked={this.state.signUpBoolean === false} onChange={this.handleOptionChange}/>
          <span className="checkmark" />
        </label>
      </div>
    </div>
  </div>

  <div className="form-group">
    <label className="checkbox-inline"><input type="checkbox" required="required" /> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
  </div>
  <div className="form-group">
    <button type="submit" className="btn btn-success btn-block login-btn" onClick={this.signUp}>Sign up</button>
  </div>
  <Alert color="info" isOpen={this.state.visible2} toggle={this.onDismiss2}>Sign up success! Please Login</Alert>
  <div className="or-seperator">
              <i>or</i>
            </div>
            <div className="text-center social-btn">
              <a href="#" className="btn btn-primary btn-block"><i className="fab fa-facebook fa-lg login-icons" /> Sign up with <b>Facebook</b></a>
              <a href="#" className="btn btn-danger btn-block"><i className="fab fa-google fa-lg login-icons" /> Sign up with <b>Google</b></a>			
            </div>
            <p><strong className='note-style'>Note: </strong><span className='note-text-style'>Social media sign up is under development, Please sign up with email.</span></p>

</form>
</div>
</div>
</div>
</div>
  
</div>

        )
    }
}

const JCC = {
  justifyContent: 'center'
}

const mapStateToProps = (state) => {
  return {
      enOrIn: state.auth.enOrIn,
      isAuthenticated: state.auth.isAuthenticated,
      messageSuccessB: state.auth.messageSuccessB,
      messageFailureB: state.auth.messageFailureB
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      signUp: (email, password, customBoolean) => {
          dispatch(signupUser(email, password, customBoolean))
      },
      messageFinished: () => {
        dispatch(messageFinishedThunk())
      }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)