import React from 'react';
import { connect } from 'react-redux'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import { AddMotivationActionThunk } from '../../redux/entrepneurs/actions'

export class InputEntrepneursMotivation extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            motivationHeader: '',
            motivationBody: '',
            user: localStorage.getItem('token')
        }
    }

    onHeaderChange = (e) => {
        this.setState({
            motivationHeader: e.currentTarget.value
        })
    }

    onBodyChange = (e) => {
        this.setState({
            motivationBody: e.currentTarget.value
        })
    }

    addMotivation = (e) => {
        e.preventDefault();
        this.props.addMotivation(
            {
                motivationHeader: this.state.motivationHeader,
                motivationBody: this.state.motivationBody,
                user: this.state.user
            }
        );
        this.setState({
            motivationHeader: '',
            motivationBody: ''
        })
    }

    render(){
        return (
            <div>
                <Form style={alignForm}>
                    <FormGroup>
                      <Label for="exampleEmail">Motivation Header</Label>
                      <Input type="text" name="motivationHeader" id="motivationHeader" placeholder="Motivation Header" onChange={this.onHeaderChange} value={this.state.motivationHeader} required="required"/>
                      <FormText color="muted">
                        The header of motivation.
                      </FormText>
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleText">Motivation Description</Label>
                      <Input type="textarea" name="motivationBody" id="motivationBody" placeholder="Motivation Description" onChange={this.onBodyChange} style={textAreaStyle} value={this.state.motivationBody} required="required"/>
                      <FormText color="muted">
                        Tell investors the reason you want to do this.
                      </FormText>
                    </FormGroup>
                    <Button color="info" style={btnStyle} onClick={this.addMotivation}>Next Page</Button>{' '}
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
        addMotivation: (motivation) => {
            dispatch(AddMotivationActionThunk(motivation))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputEntrepneursMotivation);