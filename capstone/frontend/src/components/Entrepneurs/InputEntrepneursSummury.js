import React from 'react';
import { connect } from 'react-redux'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import { AddSummuryActionThunk } from '../../redux/entrepneurs/actions'

export class InputEntrepneursSummury extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            summuryHeader: '',
            summuryBody: '',
            user: localStorage.getItem('token')
        }
    }

    onHeaderChange = (e) => {
        this.setState({
            summuryHeader: e.currentTarget.value
        })
    }

    onBodyChange = (e) => {
        this.setState({
            summuryBody: e.currentTarget.value
        })
    }

    addSummury = (e) => {
        e.preventDefault();
        this.props.addSummury(
            {
                summuryHeader: this.state.summuryHeader,
                summuryBody: this.state.summuryBody,
                user: this.state.user
            }
        );
        this.setState({
            summuryHeader: '',
            summuryBody: ''
        })
    }

    render(){
        return (
            <div>
                <Form style={alignForm}>
                    <FormGroup>
                      <Label for="exampleEmail">Summuay Header</Label>
                      <Input type="text" name="summuryHeader" id="summuryHeader" placeholder="Summury Header" onChange={this.onHeaderChange} value={this.state.summuryHeader} required="required"/>
                      <FormText color="muted">
                        The header of summary.
                      </FormText>
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleText">Summary Description</Label>
                      <Input type="textarea" name="summuryBody" id="summuryBody" placeholder="Summury Description" onChange={this.onBodyChange} style={textAreaStyle} value={this.state.summuryBody} required="required"/>
                      <FormText color="muted">
                        Tell investors about your project.
                      </FormText>
                    </FormGroup>
                    <Button color="info" style={btnStyle} onClick={this.addSummury}>Next Page</Button>{' '}
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
        addSummury: (summury) => {
            dispatch(AddSummuryActionThunk(summury))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputEntrepneursSummury);