import React from 'react';
import { connect } from 'react-redux'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import { AddAdvantageActionThunk } from '../../redux/entrepneurs/actions'

export class InputEntrepneursAdavantage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            advantageHeader: '',
            advantageBody: '',
            user: localStorage.getItem('token')
        }
    }

    onHeaderChange = (e) => {
        this.setState({
            advantageHeader: e.currentTarget.value
        })
    }

    onBodyChange = (e) => {
        this.setState({
            advantageBody: e.currentTarget.value
        })
    }

    addAdvantage = (e) => {
        e.preventDefault();
        this.props.addAdvantage(
            {
                advantageHeader: this.state.advantageHeader,
                advantageBody: this.state.advantageBody,
                user: this.state.user
            }
        );
        this.setState({
            advantageHeader: '',
            advantageBody: ''
        })
    }

    render(){
        return (
            <div>
                <Form style={alignForm}>
                    <FormGroup>
                      <Label for="exampleEmail">Advantage Header</Label>
                      <Input type="text" name="advantageHeader" id="advantageHeader" placeholder="Advantage Header" onChange={this.onHeaderChange} value={this.state.advantageHeader} required="required"/>
                      <FormText color="muted">
                        The header of advantage.
                      </FormText>
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleText">Advantage Description</Label>
                      <Input type="textarea" name="advantageBody" id="advantageBody" placeholder="Advantage Description" onChange={this.onBodyChange} style={textAreaStyle} value={this.state.advantageBody} required="required"/>
                      <FormText color="muted">
                      Tell investors the advantage of your project.
                      </FormText>
                    </FormGroup>
                    <Button color="info" style={btnStyle} onClick={this.addAdvantage}>Next Page</Button>{' '}
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
        addAdvantage: (advantage) => {
            dispatch(AddAdvantageActionThunk(advantage))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputEntrepneursAdavantage);