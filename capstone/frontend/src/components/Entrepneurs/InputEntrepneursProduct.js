import React from 'react';
import { connect } from 'react-redux'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import { AddProductActionThunk } from '../../redux/entrepneurs/actions'

export class InputEntrepneursProduct extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            productHeader: '',
            productBody: '',
            user: localStorage.getItem('token')
        }
    }

    onHeaderChange = (e) => {
        this.setState({
            productHeader: e.currentTarget.value
        })
    }

    onBodyChange = (e) => {
        this.setState({
            productBody: e.currentTarget.value
        })
    }

    addProduct = (e) => {
        e.preventDefault();
        this.props.addProduct(
            {
                productHeader: this.state.productHeader,
                productBody: this.state.productBody,
                user: this.state.user
            }
        );
        this.setState({
            productHeader: '',
            productBody: ''
        })
    }

    render(){
        return (
            <div>
                <Form style={alignForm}>
                    <FormGroup>
                      <Label for="exampleEmail">Product Header</Label>
                      <Input type="text" name="productHeader" id="productHeader" placeholder="Product Header" onChange={this.onHeaderChange} value={this.state.productHeader} required="required"/>
                      <FormText color="muted">
                        The header of product.
                      </FormText>
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleText">Product Description</Label>
                      <Input type="textarea" name="productBody" id="productBody" placeholder="Product Description" onChange={this.onBodyChange} style={textAreaStyle} value={this.state.productBody} required="required"/>
                      <FormText color="muted">
                        Tell investors about your product.
                      </FormText>
                    </FormGroup>
                    <Button color="info" style={btnStyle} onClick={this.addProduct}>Next Page</Button>{' '}
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
        addProduct: (product) => {
            dispatch(AddProductActionThunk(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputEntrepneursProduct);