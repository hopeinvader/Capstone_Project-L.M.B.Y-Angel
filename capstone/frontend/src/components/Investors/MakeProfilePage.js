import React, { Component } from 'react'
import { TabContent, TabPane, Nav, NavLink} from 'reactstrap';
import classnames from 'classnames';
import { connect } from 'react-redux'
import { formChange1Thunk, formChange2Thunk, formChange3Thunk, formChange4Thunk, formChange5Thunk, formChange6Thunk, formChange7Thunk} from '../../redux/entrepneurs/actions'


import 'bootstrap/dist/css/bootstrap.min.css';
import '../MakePitchPage.css'

import InputEntrepneursToInvestors from './InputPhotoCategoryPage'
import InputEntrepneursAbout from './InputInvestorsAbout'


export class MakeProfilePage extends Component {
    constructor(props){
        super(props)
        this.toggle = this.toggle.bind(this);
        this.state = {
        activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }

    tabChange = () => {
        if(this.props.formSubmit1){
            this.setState({
                activeTab: '2'
            })
            this.props.formChange1()
        }
        if(this.props.formSubmit2){
            this.setState({
                activeTab: '3'
            })
            this.props.formChange2()
        }
        if(this.props.formSubmit3){
            this.setState({
                activeTab: '4'
            })
            this.props.formChange3()
        }
        if(this.props.formSubmit4){
            this.setState({
                activeTab: '5'
            })
            this.props.formChange4()
        }
        if(this.props.formSubmit5){
            this.setState({
                activeTab: '6'
            })
            this.props.formChange5()
        }
        if(this.props.formSubmit6){
            this.setState({
                activeTab: '7'
            })
            this.props.formChange6()
        }
        if(this.props.formSubmit7){
            this.setState({
                activeTab: '8'
            })
            this.props.formChange7()
        }
    }
    
    render(){
        return(
        <div>
        {this.tabChange()}
        <Nav className="sidebar" tabs className={this.state.activeTab === "2" ? 'sidebar sidebarAbout' : 'sidebar' || this.state.activeTab === "1" ? 'sidebar sidebarIn1' : 'sidebar'}>
            <ul className="list-unstyled components" id="test" style={ulStyle}>
            <h3 className="sidebar-header">Menu</h3>

              <li>
              <NavLink
                className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggle('1'); }}>Name
                </NavLink>
              </li>
              <li className="active">
              <NavLink
                className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggle('2'); }}>About
                </NavLink>
              </li>
            </ul>
            <p className="text-muted small mb-0" id="padding0">Copyright © L.M.B.Y Angel 2019</p>
        </Nav>
        <div className="content" style={contentPadding}>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <InputEntrepneursToInvestors />
          </TabPane>
          <TabPane tabId="2">
            <InputEntrepneursAbout props={this.props.props}/>
          </TabPane>
        </TabContent>
        </div>
      </div>
    );
    }
}

const contentPadding = {
    paddingTop: 40
}

const ulStyle = {
    width: "100%"
}

const mapStateToProps = (state) => {
    return {
        formSubmit1: state.entrepneurs.formSubmit1,
        formSubmit2: state.entrepneurs.formSubmit2,
        formSubmit3: state.entrepneurs.formSubmit3,
        formSubmit4: state.entrepneurs.formSubmit4,
        formSubmit5: state.entrepneurs.formSubmit5,
        formSubmit6: state.entrepneurs.formSubmit6,
        formSubmit7: state.entrepneurs.formSubmit7,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        formChange1: () => {
            dispatch(formChange1Thunk())
        },
        formChange2: () => {
            dispatch(formChange2Thunk())
        },
        formChange3: () => {
            dispatch(formChange3Thunk())
        },
        formChange4: () => {
            dispatch(formChange4Thunk())
        },
        formChange5: () => {
            dispatch(formChange5Thunk())
        },
        formChange6: () => {
            dispatch(formChange6Thunk())
        },
        formChange7: () => {
            dispatch(formChange7Thunk())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MakeProfilePage);