import React from 'react';
import './LogIn.css'
import {connect} from 'react-redux'
import { Alert } from 'reactstrap';
import { loginUser, loginFailureMessageThunk } from '../redux/auth/actions';

export class Login extends React.Component {
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

    login = (e) => {
        e.preventDefault()
        var email = this.input.current.value
        var password = this.input2.current.value
        this.props.login(email, password)
    }

    afterLogin = (props) => {
      if(this.props.loginFailureE){
        this.setState({
          visible: true
        });
        this.props.loginFailure();
      }
      if(this.props.loginFailureP){
        this.setState({
          visible2: true
        });
        this.props.loginFailure(); 
      }
      if(this.props.isAuthenticated && this.props.enOrIn){
        props.history.push('/getstart/entrepneurs');
      }
      if(this.props.isAuthenticated && !this.props.enOrIn){
        props.history.push('/getstart/investors');
      }
      else {
      }
    }

    render(){

     

        return(


          
            <div>
  {this.afterLogin(this.props)}
  <div className="card gedf-card">
    <div className="card-body py-2">
      <div className="d-flex justify-content-between align-items-center">
        <div className="login-form">
          <form className="cards-login" action="/login" method="post" onSubmit={this.login}>
            <h2 className="text-center">Sign in</h2>
            <p className="text-center">Haven't joined us? <a className="linkStyle" href="/signup">Sign up now!</a></p>
            <Alert color="danger" isOpen={this.state.visible} toggle={this.onDismiss}>The email is not exist!</Alert>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">

                  <span className="input-group-text"><i className="fa fa-user " /></span>
                  <input type="text" className="form-control" ref={this.input} name="email" placeholder="Email" required="required" />
                </div>
              </div>
            </div>
            <Alert color="danger" isOpen={this.state.visible2} toggle={this.onDismiss2}>Password is wrong! Please Try Again.</Alert>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fa fa-lock" /></span>
                  <input type="password" className="form-control" ref={this.input2} name="password" placeholder="Password" required="required"/>
                </div>
              </div>
            </div>        
            <div className="clearfix">
              <label className="pull-left checkbox-inline"><input type="checkbox" /> Remember me</label>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-success btn-block login-btn" >Sign in</button>
            </div>
            <div className="or-seperator">
              <i>or</i>
            </div>
            <div className="text-center social-btn">
              <a href="#" className="btn btn-primary btn-block"><i className="fab fa-facebook fa-lg login-icons" /> Sign in with <b>Facebook</b></a>
              <a href="#" className="btn btn-danger btn-block"><i className="fab fa-google fa-lg login-icons" /> Sign in with <b>Google</b></a>			
            </div>
            <p><strong className='note-style'>Note: </strong><span className='note-text-style'>Social media sign in is under development, Please sign up with email.</span></p>
            
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

        )
    }
}

const mapStateToProps = (state) => {
    return {

        enOrIn: state.auth.enOrIn,
        isAuthenticated: state.auth.isAuthenticated,
        loginFailureP: state.auth.loginFailureP,
        loginFailureE: state.auth.loginFailureE
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password) => {
            dispatch(loginUser(email, password))
        },
        loginFailure: () => {
          dispatch(loginFailureMessageThunk())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)