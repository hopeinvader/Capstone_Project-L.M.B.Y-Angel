import React from 'react';
import {connect} from 'react-redux';
import { Button, Alert } from 'reactstrap';
import {addUserThunk, addUserFinishedThunk} from '../../redux/entrepneurs/actions';
import '../GetstartEntrepneurs.css'

export class GetstartEntrepneurs extends React.Component {
    constructor(props){
        super(props)
        this.myRef = React.createRef();
        this.state = {
            user_id: localStorage.getItem('token'),
            visible2: true
        };
        this.onDismiss2 = this.onDismiss2.bind(this);
        this.addUsertoDB = this.addUsertoDB.bind(this)
    }

    scroll(ref) {
        ref.current.scrollIntoView({behavior: 'smooth'})
    }

    onDismiss2() {
        this.setState({ visible2: false });
      }

    addUsertoDB = (e) => {
        e.preventDefault();
        this.props.addUser({
            user: this.state.user_id
        });
        let props = this.props
        props.history.push('entrepneurs/pitch')
    }

    render(){
        return (
            <div>
                <section className="notebook-hero">
                    <div className="inner">
                        <h1 className="lineAfter">Get Started</h1>
                        <p>Follow the step by step introduction guide to finish your pitch, then share your pitch with investors</p>
                        <Button style={borderRadius}onClick={() => {this.scroll(this.myRef)}} className="btnGet btnGet-lg">Get Started</Button>
                    </div>
                </section>
                <div>
        <div className="how-section1">
          <div className="row" style={firstStep}>
            <div className="col-md-6">
                <span className='num'>1</span>
                <div className="stepContent">
                    <h4 className="subheading stepC">Register</h4>
                    <p className="text-muted textG">If you haven't joined us yet, click the sign up button at the top of this page and join us</p>
                </div>
              
            </div>
            <div className="col-md-6 how-img">
              <img src="../img/register.jpg" className=" img-fluid" alt />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 ">
              <img src="../img/inputPage.jpg" className="img-fluid imgStep2" alt />
            </div>
            <div className="col-md-6">
                <span className='num'>2</span>
                <div className="stepContent">
                    <h4 className="subheading stepC">Create your Pitch</h4>
                    <p className="text-muted textG">Fill in the form to complete your pitch page</p>
                </div>
              
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
                <span className='num'>3</span>
                <div className="stepContent">
                    <h4 className="subheading stepC">Share you Pitch</h4>
                    <p className="text-muted textG">Once you finish creating your pitch, investors will now be able to view your page and contact you</p>
                </div>
            </div>
              
            <div className="col-md-6 how-img">
              <img src="../img/pitchCard.jpg" className=" img-fluid" alt />
            </div>
          </div>
        </div>
        <div style={containerStyle} ref={this.myRef}>
            <Button color="info" style={btnStyle} onClick={this.addUsertoDB}>Make your Pitch!</Button>{' '}
        </div>
            </div>
            
      </div>
      
                
        )
    }
}



const containerStyle = {
    margin: 0,
    padding: 0,
    margin: 'auto',
    textAlign: 'center',
    paddingBottom: 35
}

const btnStyle = {
    width: '30%'
}

const firstStep = {
    paddingTop: 25
}

const borderRadius = {
    borderRadius: 30
}

const mapStateToProps = (state) => {
    return {
        enOrIn: state.auth.enOrIn,
        isAuthenticated: state.auth.isAuthenticated,
        addUserB: state.entrepneurs.addUserB,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (users) => {
            dispatch(addUserThunk(users))
        },
        addUserFinished: () => {
            dispatch(addUserFinishedThunk())
        }
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(GetstartEntrepneurs)