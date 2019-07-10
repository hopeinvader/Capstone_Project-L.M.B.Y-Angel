import React, { Component } from 'react'
import axios from 'axios';
import $ from 'jquery';
import { TabContent, TabPane, Nav, NavLink} from 'reactstrap';
import classnames from 'classnames';
import { connect } from 'react-redux'
import { formChange1Thunk, formChange2Thunk, formChange3Thunk, formChange4Thunk, formChange5Thunk, formChange6Thunk, formChange7Thunk} from '../../redux/entrepneurs/actions'

import { formSubmitThunk } from '../../redux/investors/actions'
import { AddAboutActionThunk } from '../../redux/investors/actions'

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


import 'bootstrap/dist/css/bootstrap.min.css';
import '../MakePitchPage.css'
import './Dashboard.css'


export class Dashboard2 extends Component {
    constructor(props){
        super(props)
        this.toggle = this.toggle.bind(this);
        this.state = {
        activeTab: '1',
        username: '',
        user: localStorage.getItem('token'),
        selectedFile: null,
        selectedFile2: null,
        imgURLBackground: '',
        imgURLLogo: '',
        aboutBody: '',
        targetAmount: 0,
        minimumAmount: 0,
        summuryBody: '',
        facebook_url: '',
        linkedin_url: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    componentDidMount = async() => {
        let user = this.state.user
        axios.get(`${process.env.REACT_APP_API_SERVER}/api/investors/profile/`,{
          params: {
            user: user
          }
        }
        ).then(res => {
            if(res.data.length === 0){

            } else{
                this.setState({
                    aboutBody: res.data[0].about,
                    summuryBody: res.data[0].expertise,
                    username: res.data[0].name,
                    minimumAmount: res.data[0].minimum_amount,
                    targetAmount: res.data[0].maximum_amount,
                    category: res.data[0].category
                }); 
            }

          });
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

    handleChange(event) {
        this.setState({ category: event.target.value });
    }

    singleFileChangedHandler = ( event ) => {
        this.setState({
         selectedFile: event.target.files[0]
        });
    };

    singleFileChangedHandler2 = ( event ) => {
        this.setState({
         selectedFile2: event.target.files[0]
        });
    };

    singleFileUploadHandler = (  ) => {
        const data = new FormData();
        if ( this.state.selectedFile ) {
      data.append( 'profileImage', this.state.selectedFile, this.state.selectedFile.name );
      axios.post( `${process.env.REACT_APP_API_SERVER}/api/upload/profile-img-upload`, data, {
          headers: {
           'accept': 'application/json',
           'Accept-Language': 'en-US,en;q=0.8',
           'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
          }
         })
          .then( ( response ) => {
      if ( 200 === response.status ) {
            if( response.data.error ) {
             if ( 'LIMIT_FILE_SIZE' === response.data.error.code ) {
              this.ocShowAlert( 'Max size: 2MB', 'red' );
             } else {
              this.ocShowAlert( response.data.error, 'red' );
             }
            } else {
             let fileName = response.data;
             this.ocShowAlert( 'File Uploaded', '#3089cf' );
             this.setState({
              imgURLBackground: fileName.location
             })
            }
           }
          }).catch( ( error ) => {
          this.ocShowAlert( error, 'red' );
         });
        } else {
         this.ocShowAlert( 'Please upload file', 'red' );
        }
    };

    singleFileUploadHandler2 = (  ) => {
        const data = new FormData();
        if ( this.state.selectedFile2 ) {
      data.append( 'profileImage', this.state.selectedFile2, this.state.selectedFile2.name );
      axios.post( `${process.env.REACT_APP_API_SERVER}/api/upload/profile-img-upload`, data, {
          headers: {
           'accept': 'application/json',
           'Accept-Language': 'en-US,en;q=0.8',
           'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
          }
         })
          .then( ( response ) => {
      if ( 200 === response.status ) {
            if( response.data.error ) {
             if ( 'LIMIT_FILE_SIZE' === response.data.error.code ) {
              this.ocShowAlert2( 'Max size: 2MB', 'red' );
             } else {
              this.ocShowAlert2( response.data.error, 'red' );
             }
            } else {
             let fileName = response.data;
             this.ocShowAlert2( 'File Uploaded', '#3089cf' );
             this.setState({
              imgURLLogo: fileName.location
             })
            }
           }
          }).catch( ( error ) => {
          this.ocShowAlert2( error, 'red' );
         });
        } else {
         this.ocShowAlert2( 'Please upload file', 'red' );
        }
    };

    ocShowAlert = ( message, background = '#3089cf' ) => {
        let alertContainer = document.querySelector( '#oc-alert-container' ),
         alertEl = document.createElement( 'div' ),
         textNode = document.createTextNode( message );
        alertEl.setAttribute( 'class', 'oc-alert-pop-up' );
        $( alertEl ).css( 'background', background );
        alertEl.appendChild( textNode );
        alertContainer.appendChild( alertEl );
        setTimeout( function () {
         $( alertEl ).fadeOut( 'slow' );
         $( alertEl ).remove();
        }, 3000 );
    };

    ocShowAlert2 = ( message, background = '#3089cf' ) => {
        let alertContainer = document.querySelector( '#oc-alert-container2' ),
         alertEl = document.createElement( 'div' ),
         textNode = document.createTextNode( message );
        alertEl.setAttribute( 'class', 'oc-alert-pop-up' );
        $( alertEl ).css( 'background', background );
        alertEl.appendChild( textNode );
        alertContainer.appendChild( alertEl );
        setTimeout( function () {
         $( alertEl ).fadeOut( 'slow' );
         $( alertEl ).remove();
        }, 3000 );
    };

    handleSubmit(event) {
        event.preventDefault();
        var username = this.state.username
        var userInfo = this.state.user
        var logo = this.state.imgURLLogo
        var bgImg = this.state.imgURLBackground
        var linkedin_url = this.state.linkedin_url
        var facebook_url = this.state.facebook_url
        this.props.formSubmit(username, userInfo, logo, bgImg, linkedin_url, facebook_url)
    }

    onNameChange = (e) => {
        this.setState({
            username: e.currentTarget.value
        })
    }


    deleteIn = () => {
        let user = this.state.user
        axios.delete(`${process.env.REACT_APP_API_SERVER}/api/test/deleteIn/`,{
            params: {
              user: user
            }
          })
          let props = this.props
          props.history.push('/search/investors')          
    }


    onBodyChange = (e) => {
        this.setState({
            aboutBody: e.currentTarget.value
        })
    }

    onBodyChange2 = (e) => {
        this.setState({
            summuryBody: e.currentTarget.value
        })
    }

    onTargetChange = (e) => {
        this.setState({
            targetAmount: e.currentTarget.value
        })
    }

    onMinimumChange = (e) => {
        this.setState({
            minimumAmount: e.currentTarget.value
        })
    }

    onFacebookChange = (e) => {
        this.setState({
            facebook_url: e.currentTarget.value
        })
    }
    onLinkedinChange = (e) => {
        this.setState({
            linkedin_url: e.currentTarget.value
        })
    }

    addAbout = (e) => {
        e.preventDefault();
        this.props.addAbout(
            {
                aboutBody: this.state.aboutBody,
                user: this.state.user,
                targetAmount: this.state.targetAmount,
                minimumAmount: this.state.minimumAmount,
                summuryBody: this.state.summuryBody
            }
        );
        this.setState({
            aboutBody: '',
            summuryBody: ''
        })
        let props = this.props
        props.history.push('/search/investors')
    }

    
    render(){
        return(
            <div>
            <div style={containerStyle}><header style={headerStyle}>Edit your pitch or delete.</header></div>
        {this.tabChange()}
        <Nav className="sidebar" tabs className={this.state.activeTab === "2" ? 'sidebar sidebarTitleIn' : 'sidebar'|| this.state.activeTab === "1" ? 'sidebar sidebarIn1' : 'sidebar' || this.state.activeTab === '3' ? 'sidebar3' : 'sidebar'}>
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
              <li>
              <NavLink
                className={classnames({ active: this.state.activeTab === '3' })} onClick={() => { this.toggle('3'); }}>Delete
                </NavLink>
              </li>
            </ul>
            <p className="text-muted small mb-0" id="padding0">Copyright © L.M.B.Y Angel 2019</p>
        </Nav>
        <div className="content" style={contentPadding}>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
          <Form style={alignForm}>
                    <FormGroup>
                      <Label for="exampleEmail">Name</Label>
                      <Input type="text" name="name" id="name" placeholder="Name" onChange={this.onNameChange} value={this.state.username} required="required"/>
                      <FormText color="muted">
                        You can put your name either company name here.
                      </FormText>
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleText">Facebook</Label>
                      <Input type="text" name="aboutBody" id="aboutBody" placeholder="Facebook URL" onChange={this.onFacebookChange} style={textAreaStyle} value={this.state.facebook_url} required="required"/>
                      <FormText color="muted">
                        Please fill the URL of your Facebook
                      </FormText>
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleText">LinkedIn</Label>
                      <Input type="text" name="aboutBody" id="aboutBody" placeholder="LinkedIn URL" onChange={this.onLinkedinChange} style={textAreaStyle} value={this.state.linkedin_url} required="required"/>
                      <FormText color="muted">
                      Please fill the URL of your LinkedIn
                      </FormText>
                    </FormGroup>
                    <FormGroup id="oc-alert-container">
                      <Label for="exampleFile">Background photo</Label>
                      <Input type="file" name="file" id="exampleFile" onChange={this.singleFileChangedHandler}/>
                      <Button color="secondary" style={uploadBtn} onClick={this.singleFileUploadHandler}>Upload</Button>
                      <FormText color="muted">
                        This photo renders top of your pitch page.
                      </FormText>
                    </FormGroup>
                    <FormGroup id="oc-alert-container2">
                      <Label for="exampleFile">Logo photo</Label>
                      <Input type="file" name="file" id="exampleFile" onChange={this.singleFileChangedHandler2}/>
                      <Button color="secondary" style={uploadBtn} onClick={this.singleFileUploadHandler2}>Upload</Button>
                      <FormText color="muted">
                        This photo renders bottom of the background photo.
                      </FormText>
                    </FormGroup>
                    <Button color="info" size="sm" style={btnStyle} onClick={this.handleSubmit}>Next Page</Button>{' '}
                </Form>
          </TabPane>
          <TabPane tabId="2" className='pb-86'>
          <Form style={alignForm}>
                    <FormGroup>
                      <Label for="exampleEmail">Minimum Amount</Label>
                      <Input type="text" name="targetAmount" id="targetAmount" placeholder="Target Amount" onChange={this.onMinimumChange} value={this.state.minimumAmount} required="required"/>
                      <FormText color="muted">
                        The minimum amount you do investment. Don't need to add commas!
                      </FormText>
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleEmail">Maximum Amount</Label>
                      <Input type="text" name="minimumAmount" id="minimumAmount" placeholder="Minimum Amount" onChange={this.onTargetChange} value={this.state.targetAmount} required="required"/>
                      <FormText color="muted">
                        The maximum amount you do investment. Don't need to add commas!
                      </FormText>
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleText">About Description</Label>
                      <Input type="textarea" name="aboutBody" id="aboutBody" placeholder="About yourself" onChange={this.onBodyChange} style={textAreaStyle} value={this.state.aboutBody} required="required"/>
                      <FormText color="muted">
                        Tell everyone abouy yourself!
                      </FormText>
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleText">Expertise</Label>
                      <Input type="textarea" name="summuryBody" id="summuryBody" placeholder="Expertise" onChange={this.onBodyChange2} style={textAreaStyle} value={this.state.summuryBody} required="required"/>
                      <FormText color="muted">
                        Tell entrepneurs what category or industry you are interested in!
                      </FormText>
                    </FormGroup>
                    <Button color="info" style={btnStyle} onClick={this.addAbout}>Submit</Button>{' '}
                </Form>
                </TabPane>
          <TabPane tabId="3" className="pb-1116">
          <Form style={alignForm}>
                <FormGroup>
                <h2 style={h2Style}>Are you sure you want to delete your profile?</h2>
                <Button color="danger" style={btnStyle} onClick={this.deleteIn}>Delete</Button>{' '}
                </FormGroup>
            </Form>
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

const uploadBtn = {
    width: '18%',
    marginTop: 5,
    fontSize: 12
}

const textAreaStyle = {
    resize: 'none',

}

const alignForm = {
    width: '60%',
    margin: '0 auto'
}

const btnStyle = {
    width: '100%'
}

const headerStyle = {
    backgroundColor: '#404447',
    width: '100%',
    height: 50,
    color: '#dee0e2',
    padding: 10
}

const containerStyle = {
    margin: 0,
    padding: 0,
    margin: 'auto'
}

const h2Style = {
    padding: 10,
    fontSize: 20,
    textAlign: 'center'
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
        formSubmit: (username, userInfo, logo, bgImg, facebook_url, linkedin_url) => {
            dispatch(formSubmitThunk(username, userInfo, logo, bgImg, facebook_url, linkedin_url))
        },
        addAbout: (about) => {
            dispatch(AddAboutActionThunk(about))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard2);