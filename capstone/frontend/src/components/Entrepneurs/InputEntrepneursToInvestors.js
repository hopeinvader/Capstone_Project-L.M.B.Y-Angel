import React from 'react';
import { connect } from 'react-redux'
import { Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

import { AddToInvestorsActionThunk } from '../../redux/entrepneurs/actions'

export class InputEntrepneursToInvestors extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            toInvestorsHeader: '',
            toInvestorsBody: '',
            user: localStorage.getItem('token')
        }
        this.addToInvestors = this.addToInvestors.bind(this)
    }

    onHeaderChange = (e) => {
        this.setState({
            toInvestorsHeader: e.currentTarget.value
        })
    }

    onBodyChange = (e) => {
        this.setState({
            toInvestorsBody: e.currentTarget.value
        })
    }

    addToInvestors = (e) => {
        e.preventDefault();
        this.props.addToInvestors(
            {
                toInvestorsHeader: this.state.toInvestorsHeader,
                toInvestorsBody: this.state.toInvestorsBody,
                user: this.state.user
            }
        );
        this.setState({
            toInvestorsHeader: '',
            toInvestorsBody: ''
        })
        let props = this.props.props
        props.history.push('/search/entrepneurs')
    }

    render(){
        return (
            <div>
                <Form style={alignForm}>
                    <FormGroup>
                      <Label for="exampleEmail">To Investors Header</Label>
                      <Input type="text" name="toInvestorsHeader" id="toInvestorsHeader" placeholder="To Investors Header" onChange={this.onHeaderChange} value={this.state.toInvestorsHeader} required="required"/>
                      <FormText color="muted">
                        The header of to investors.
                      </FormText>
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleText">To Investors Description</Label>
                      <Input type="textarea" name="toInvestorsBody" id="toInvestorsBody" placeholder="To Investors Description" onChange={this.onBodyChange} style={textAreaStyle} value={this.state.toInvestorsBody} required="required"/>
                      <FormText color="muted">
                        Any message to investors!
                      </FormText>
                    </FormGroup>
                    <Button color="info" style={btnStyle} onClick={this.addToInvestors}>Submit</Button>{' '}
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
        addToInvestors: (toInvestors) => {
            dispatch(AddToInvestorsActionThunk(toInvestors))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputEntrepneursToInvestors);