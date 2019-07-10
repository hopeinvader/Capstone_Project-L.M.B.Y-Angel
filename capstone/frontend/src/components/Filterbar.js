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
        this.addUsertoDB = this.addUsertoDB.bind(this)

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
                <div className="list-group mb-30">
                    <div className="collapse show" id="accordion-category">
                        <a className="color-navy list-group-item list-group-item-heading" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="accordion-category" style={textStyle}>Sort by Category</a>
                        <a className="list-group-item list-group-item-action d-flex justify-content-between align-items-center " onClick={this.props.buttonFi}>FinTech<i className="fa fa-angle-right text-muted" /></a>
                        <a className="list-group-item list-group-item-action d-flex justify-content-between align-items-center " onClick={this.props.buttonFo}>Food &amp; Beverage<i className="fa fa-angle-right text-muted" /></a>
                        <a className="list-group-item list-group-item-action d-flex justify-content-between align-items-center " onClick={this.props.buttonT}>Technology<i className="fa fa-angle-right text-muted" /></a>
                        <a className="list-group-item list-group-item-action d-flex justify-content-between align-items-center " onClick={this.props.buttonE}>Education <i className="fa fa-angle-right text-muted" /></a>
                        <a className="list-group-item list-group-item-action d-flex justify-content-between align-items-center " onClick={this.props.buttonO}>Others <i className="fa fa-angle-right text-muted" /></a>
                    </div>
                </div>
            </div>
        )
    }
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

