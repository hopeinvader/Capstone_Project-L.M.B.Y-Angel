import React from 'react';
import { connect } from 'react-redux'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import { AddAboutActionThunk } from '../../redux/entrepneurs/actions'

export class InputEntrepneursAbout extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            aboutBody: '',
            user: localStorage.getItem('token'),
            targetAmount: 0,
            minimumAmount: 0,
            facebook_url: '',
            linkedin_url: ''
        }
    }

    onBodyChange = (e) => {
        this.setState({
            aboutBody: e.currentTarget.value
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

    onLinkedinChange = (e) => {
        this.setState({
            linkedin_url: e.currentTarget.value
        })
    }

    onFacebookChange = (e) => {
        this.setState({
            facebook_url: e.currentTarget.value
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
                facebook_url: this.state.facebook_url,
                linkedin_url: this.state.linkedin_url
            }
        );
        this.setState({
            aboutBody: ''
        })
    }

    render(){
        return (
            <div>
                <Form style={alignForm}>
                    <FormGroup>
                      <Label for="exampleEmail">Target Amount</Label>
                      <Input type="text" name="targetAmount" id="targetAmount" placeholder="Target Amount" onChange={this.onTargetChange} value={this.state.targetAmount} required="required"/>
                      <FormText color="muted">
                        The total amount you want to get investment. Don't need to add commas!
                      </FormText>
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleEmail">Minimum Amount</Label>
                      <Input type="text" name="minimumAmount" id="minimumAmount" placeholder="Minimum Amount" onChange={this.onMinimumChange} value={this.state.minimumAmount} required="required"/>
                      <FormText color="muted">
                        The minimum amount you get a investment. Don't need to add commas!
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
                    <Button color="info" style={btnStyle} onClick={this.addAbout}>Next Page</Button>{' '}
                </Form>
            </div>
        )
    }
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
        addAbout: (about) => {
            dispatch(AddAboutActionThunk(about))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputEntrepneursAbout);