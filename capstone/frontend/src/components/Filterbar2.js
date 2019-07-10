import React from 'react';
import './Filterbar.css'
import {connect} from 'react-redux';
import { Button, Alert } from 'reactstrap';

export class Filterbar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            user_id: localStorage.getItem('token'),
            visible2: true
        };
        this.onDismiss2 = this.onDismiss2.bind(this);
    }

    onDismiss2() {
        this.setState({ visible2: false });
      }


    testRenderAlert = (props) => {
        return (
            this.props.addUserB ? (<Alert color="info" isOpen={this.state.visible2} toggle={this.onDismiss2}>Please follow introduction, finish your pitch and share with invesotrs!</Alert>) : null
        )
    }

    render(){
        return (
            <div className="col-lg-4">
                <div className="list-group mb-30">
                    <a className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" onClick={this.props.buttonA}>All</a>
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

const textStyle = {
    fontFamily: 'inherit',
    fontWeight: 500,
    color: 'inherit'
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

    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Filterbar)

