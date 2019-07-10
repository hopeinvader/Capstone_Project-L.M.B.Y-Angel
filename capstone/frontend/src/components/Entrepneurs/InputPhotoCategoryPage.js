import React from 'react';
import $ from 'jquery';
import { connect } from 'react-redux'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios'

import { formSubmitThunk } from '../../redux/entrepneurs/actions'

export class InputPhotoCategoryPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            user: localStorage.getItem('token'),
            category: '',
            title: '',
            selectedFile: null,
            selectedFile2: null,
            imgURLBackground: '',
            imgURLLogo: '',
        }
        this.handleChange = this.handleChange.bind(this);
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

    handleChange(event) {
        this.setState({ category: event.target.value });
    }
    
    handleChange2(event) {
        this.setState({ title: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        var username = this.state.username
        var category = this.state.category
        var userInfo = this.state.user
        var title = this.state.title
        var logo = this.state.imgURLLogo
        var bgImg = this.state.imgURLBackground
        this.props.formSubmit(username, category, userInfo, title, logo, bgImg)
    }

    onNameChange = (e) => {
        this.setState({
            username: e.currentTarget.value
        })
    }

    onTitleChange = (e) => {
        this.setState({
            title: e.currentTarget.value
        })
    }

    render(){
        return (
            <div>
                <Form style={alignForm}>
                    <FormGroup>
                      <Label for="exampleEmail">Title</Label>
                      <Input type="text" name="title" id="title" placeholder="Title" onChange={this.onTitleChange} value={this.state.title} required="required"/>
                      <FormText color="muted">
                        This will be the title of your pitch.
                      </FormText>
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleEmail">Name</Label>
                      <Input type="text" name="name" id="name" placeholder="Name" onChange={this.onNameChange} value={this.state.username} required="required"/>
                      <FormText color="muted">
                        You can put your name either company name here.
                      </FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">Select Category</Label>
                        <Input type="select" name="select" id="exampleSelect" value={this.state.category} onChange={this.handleChange}>
                          <option>Choose a category</option>
                          <option>Education</option>
                          <option>FinTech</option>
                          <option>Food &amp; Beverage</option>
                          <option>Technology</option>
                          <option>Others</option>
                        </Input>
                        <FormText color="muted">
                            Choose a category by your idea.
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
        formSubmit: (username, category, userInfo, title, logo, bgImg) => {
            dispatch(formSubmitThunk(username, category, userInfo, title, logo, bgImg))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputPhotoCategoryPage);