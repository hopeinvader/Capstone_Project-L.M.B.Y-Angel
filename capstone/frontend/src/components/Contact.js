import React from 'react';
import axios from 'axios';
import './MainPage.css'
import './LogIn.css'
import { Input, Button } from 'reactstrap'

export default class Contact extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          name: '',
          email: '',
          message: ''
        }
    }

    onNameChange = (e) => {
      this.setState({
          name: e.currentTarget.value
      })
    }

    onEmailChange = (e) => {
        this.setState({
            email: e.currentTarget.value
        })
    }

    onBodyChange = (e) => {
      this.setState({
          message: e.currentTarget.value
      })
    }

    formSubmit = () => {
      axios.post(`${process.env.REACT_APP_API_SERVER}/api/users/contact`,
            {
                name: this.state.name,
                email: this.state.email,
                message: this.state.message
            })
              alert('Form submited!');
    }

    render(){
        return (
            <div className="container pt-50">
                <h2 className="text-center">Contact us</h2>
                <p className="text-center">Leave any comments for developing our website.</p>
                <div className="row justify-content-center">
                  <div className="col-12 col-md-10 col-lg-9 pb-5">
                    <form>
                      <div className="card border-primary rounded-0">
                        <div className="card-body p-3">
                          <div className="row pdlr-1">
                              <div className="form-group form-group-1 formGroup mgr-26">
                            <div className="input-group mb-2">
                              <div className="input-group-prepend input-group-prepend-sp">
                                <div className="input-group-text"><i className="fa fa-user text-info" /></div>
                              </div>
                              <input type="text" className="form-control" id="nombre" name="nombre" placeholder="Name" onChange={this.onNameChange} value={this.state.name}  required />
                            </div>
                          </div>
                          <div className="form-group form-group-1 formGroup">
                            <div className="input-group mb-2">
                              <div className="input-group-prepend input-group-prepend-sp">
                                <div className="input-group-text"><i className="fa fa-envelope text-info" /></div>
                              </div>
                              <input type="email" className="form-control" name="email" placeholder="email" onChange={this.onEmailChange} value={this.state.email} required />
                            </div>
                          </div>
                          </div>
                          
                          <div className="form-group form-group-1">
                            <div className="input-group mb-2">
                              <div className="input-group-prepend input-group-prepend-sp">
                                <div className="input-group-text"><i className="fa fa-comment text-info" /></div>
                              </div>
                              <Input type="textarea" name="aboutBody" id="aboutBody" placeholder="About yourself" onChange={this.onBodyChange} value={this.state.message} required="required"/>
                            </div>
                          </div>
                          <div className="text-center">
                            <Button type="submit" defaultValue="Enviar" className="btn btn-info btn-block rounded-0 py-2 btnSp" onClick={this.formSubmit}>Submit</Button>
                          </div>
                        </div>
                      </div>
                    </form>
                </div>
                </div>
            </div>
        )
    }
}
