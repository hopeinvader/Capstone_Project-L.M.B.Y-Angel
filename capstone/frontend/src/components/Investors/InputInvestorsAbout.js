import React from 'react';
import { connect } from 'react-redux'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import { AddAboutActionThunk } from '../../redux/investors/actions'

export class InputEntrepneursAbout extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            aboutBody: '',
            user: localStorage.getItem('token'),
            targetAmount: 0,
            minimumAmount: 0,
            summuryBody: ''
        }
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
        let props = this.props.props
        props.history.push('/search/investors')
    }

    render(){
        return (
            <div>
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