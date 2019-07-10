import React from 'react';
import $ from 'jquery';
import { connect } from 'react-redux'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios'

import { formSubmitThunk } from '../../redux/investors/actions'

export class InputPhotoCategoryPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            user: localStorage.getItem('token'),
            selectedFile: null,
            selectedFile2: null,
            imgURLBackground: '',
            imgURLLogo: '',
            facebook_url: '',
            linkedin_url: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
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

    render(){
        return (
            <div>
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
            </div>
        )
    }
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

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        formSubmit: (username, userInfo, logo, bgImg, facebook_url, linkedin_url) => {
            dispatch(formSubmitThunk(username, userInfo, logo, bgImg, facebook_url, linkedin_url))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputPhotoCategoryPage);