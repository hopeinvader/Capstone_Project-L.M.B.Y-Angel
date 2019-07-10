import React, { Component } from 'react'
import axios from 'axios';
import { TabContent, TabPane, Nav, NavLink} from 'reactstrap';
import classnames from 'classnames';
import { connect } from 'react-redux'
import { formChange1Thunk, formChange2Thunk, formChange3Thunk, formChange4Thunk, formChange5Thunk, formChange6Thunk, formChange7Thunk} from '../../redux/entrepneurs/actions'
import { formSubmitThunk } from '../../redux/entrepneurs/actions'
import { AddAboutActionThunk } from '../../redux/entrepneurs/actions'
import { AddSummuryActionThunk } from '../../redux/entrepneurs/actions'
import { AddProductActionThunk } from '../../redux/entrepneurs/actions'
import { AddAdvantageActionThunk } from '../../redux/entrepneurs/actions'
import { AddMotivationActionThunk } from '../../redux/entrepneurs/actions'
import { AddToInvestorsActionThunk } from '../../redux/entrepneurs/actions'


import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



import 'bootstrap/dist/css/bootstrap.min.css';
import '../MakePitchPage.css'
import'./Dashboard.css'
import UserInfo from './UserInfoEn'


export class Dashboard extends Component {
    constructor(props){
        super(props)
        this.toggle = this.toggle.bind(this);
        this.state = {
        activeTab: '1',
        user: localStorage.getItem('token'),
        visible2: true,
        title: '',
        summuryHeader:'',
        summuryBody:'',
        productHeader:'',
        productBody:'',
        advantageHeader:'',
        advantageBody:'',
        motivationHeader:'',
        motivationBody:'',
        toInvestorsHeader:'',
        toInvestorsBody:'',
        about:'',
        bgImg:'',
        logo:'',
        name:'',
        minimumAmount: 0,
        targetAmount: 0,
        category: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount = async() => {
        let user = this.state.user
        axios.get(`${process.env.REACT_APP_API_SERVER}/api/test/pitch/`,{
          params: {
            user: user
          }
        }
        ).then(res => {
            if(res.data.length === 0){

            } else{
                this.setState({
                    title: res.data[0].title,
                    about: res.data[0].about,
                    bgImg: res.data[0].background_photo,
                    logo: res.data[0].logo,
                    name: res.data[0].name,
                    minimumAmount: res.data[0].minimum_amount,
                    targetAmount: res.data[0].target_amount,
                    category: res.data[0].category
    
                });
                let testSummury = res.data[0].summury
                let testProduct = res.data[0].product
                let testAdvantage = res.data[0].advantage
                let testMotivation = res.data[0].motivation
                let testToInvestors = res.data[0].toInvestors
    
            axios.get(`${process.env.REACT_APP_API_SERVER}/api/pitch/summury/${testSummury}`)
                .then((res =>{
                    this.setState({
                        summuryHeader: res.data[0].header,
                        summuryBody: res.data[0].body
                    })
                }))
            axios.get(`${process.env.REACT_APP_API_SERVER}/api/pitch/product/${testProduct}`)
                .then((res=>{
                    this.setState({
                        productHeader: res.data[0].header,
                        productBody: res.data[0].body
                    })
                }))
            axios.get(`${process.env.REACT_APP_API_SERVER}/api/pitch/advantage/${testAdvantage}`)
                .then((res=>{
                    this.setState({
                        advantageHeader: res.data[0].header,
                        advantageBody: res.data[0].body
                    })
                }))
            axios.get(`${process.env.REACT_APP_API_SERVER}/api/pitch/motivation/${testMotivation}`)
                .then((res=>{
                    this.setState({
                        motivationHeader: res.data[0].header,
                        motivationBody: res.data[0].body
                    })
                }))
            axios.get(`${process.env.REACT_APP_API_SERVER}/api/pitch/toInvestors/${testToInvestors}`)
                .then((res=>{
                    this.setState({
                        toInvestorsHeader: res.data[0].header,
                        toInvestorsBody: res.data[0].body
                    })
                }))
            }
          });
      }

      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }

    tabChange = () => {
        if(this.props.formSubmit1){
            this.setState({
                activeTab: '2'
            })
            this.props.formChange1()
        }
        if(this.props.formSubmit2){
            this.setState({
                activeTab: '3'
            })
            this.props.formChange2()
        }
        if(this.props.formSubmit3){
            this.setState({
                activeTab: '4'
            })
            this.props.formChange3()
        }
        if(this.props.formSubmit4){
            this.setState({
                activeTab: '5'
            })
            this.props.formChange4()
        }
        if(this.props.formSubmit5){
            this.setState({
                activeTab: '6'
            })
            this.props.formChange5()
        }
        if(this.props.formSubmit6){
            this.setState({
                activeTab: '7'
            })
            this.props.formChange6()
        }
        if(this.props.formSubmit7){
            this.setState({
                activeTab: '8'
            })
            this.props.formChange7()
        }
    }

    handleChange(event) {
        this.setState({ category: event.target.value });
    }
    
    handleChange2(event) {
        this.setState({ title: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        var username = this.state.name
        var category = this.state.category
        var userInfo = this.state.user
        var title = this.state.title
        var logo = this.state.imgURLLogo
        var bgImg = this.state.imgURLBackground
        this.props.formSubmit(username, category, userInfo, title, logo, bgImg)
    }

    onNameChange = (e) => {
        this.setState({
            name: e.currentTarget.value
        })
    }

    onTitleChange = (e) => {
        this.setState({
            title: e.currentTarget.value
        })
    }


    onBodyChange = (e) => {
        this.setState({
            about: e.currentTarget.value
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
                aboutBody: this.state.about,
                user: this.state.user,
                targetAmount: this.state.targetAmount,
                minimumAmount: this.state.minimumAmount
            }
        );
        this.setState({
            about: ''
        })
    }


    onHeaderChange = (e) => {
        this.setState({
            summuryHeader: e.currentTarget.value
        })
    }

    onSummaryBodyChange = (e) => {
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

    onProHeaderChange = (e) => {
        this.setState({
            productHeader: e.currentTarget.value
        })
    }

    onProBodyChange = (e) => {
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

    onAdHeaderChange = (e) => {
        this.setState({
            advantageHeader: e.currentTarget.value
        })
    }

    onAdBodyChange = (e) => {
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

    onMoHeaderChange = (e) => {
        this.setState({
            motivationHeader: e.currentTarget.value
        })
    }

    onMoBodyChange = (e) => {
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


    onTIHeaderChange = (e) => {
        this.setState({
            toInvestorsHeader: e.currentTarget.value
        })
    }

    onTIBodyChange = (e) => {
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
        let props = this.props
        props.history.push('/search/entrepneurs')
    }

    deleteEn = () => {
        let user = this.state.user
        axios.delete(`${process.env.REACT_APP_API_SERVER}/api/test/deleteEn/`,{
            params: {
              user: user
            }
          })
          let props = this.props
          props.history.push('/search/entrepneurs')          
    }
    
    render(){
        return(
            <div>
            <div style={containerStyle}><header style={headerStyle}>Edit your pitch or delete.</header></div>
        {this.tabChange()}
        <Nav className="sidebar" tabs className={this.state.activeTab === "1" ? 'sidebar sidebarTitle' : 'sidebar' || this.state.activeTab === "2" ? 'sidebar sidebarTitle2' : 'sidebar'}>
            <ul className="list-unstyled components" id="test" style={ulStyle}>
            <h3 className="sidebar-header">Menu</h3>

              <li>
              <NavLink
                className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggle('1'); }}>Title and Name
                </NavLink>
              </li>
              <li className="active">
              <NavLink
                className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggle('2'); }}>About
                </NavLink>
              </li>
              <li>
              <NavLink
                className={classnames({ active: this.state.activeTab === '3' })} onClick={() => { this.toggle('3'); }}>Summary
                </NavLink>
              </li>
              <li>
              <NavLink
                className={classnames({ active: this.state.activeTab === '4' })} onClick={() => { this.toggle('4'); }}>Product
                </NavLink>
              </li>
              <li>
              <NavLink
                className={classnames({ active: this.state.activeTab === '5' })} onClick={() => { this.toggle('5'); }}>Advantage
                </NavLink>
              </li>
              <li>
              <NavLink
                className={classnames({ active: this.state.activeTab === '6' })} onClick={() => { this.toggle('6'); }}>Motivation
                </NavLink>
              </li>
              <li>
              <NavLink
                className={classnames({ active: this.state.activeTab === '7' })} onClick={() => { this.toggle('7'); }}>To Investors
                </NavLink>
              </li>
              <li>
              <NavLink
                className={classnames({ active: this.state.activeTab === '8' })} onClick={() => { this.toggle('8'); }}>Delete
                </NavLink>
              </li>
            </ul>
            <p className="text-muted small mb-0" id="padding0">Copyright © L.M.B.Y Angel 2019</p>
        </Nav>
        <div className="content" style={contentPadding}>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
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
                      <Input type="text" name="name" id="name" placeholder="Name" onChange={this.onNameChange} value={this.state.name} required="required"/>
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
          </TabPane>
          <TabPane tabId="2" className="pb-86">
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
                      <Input type="textarea" name="aboutBody" id="aboutBody" placeholder="About yourself" onChange={this.onBodyChange} style={textAreaStyle} value={this.state.about} required="required"/>
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
                </TabPane>
          <TabPane tabId="3" className="pb-116">
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
                      <Input type="textarea" name="summuryBody" id="summuryBody" placeholder="Summury Description" onChange={this.onSummaryBodyChange} style={textAreaStyle} value={this.state.summuryBody} required="required"/>
                      <FormText color="muted">
                        Tell investors about your project.
                      </FormText>
                    </FormGroup>
                    <Button color="info" style={btnStyle} onClick={this.addSummury}>Next Page</Button>{' '}
                </Form>          </TabPane>
          <TabPane tabId="4" className="pb-116">
          <Form style={alignForm}>
                    <FormGroup>
                      <Label for="exampleEmail">Product Header</Label>
                      <Input type="text" name="productHeader" id="productHeader" placeholder="Product Header" onChange={this.onProHeaderChange} value={this.state.productHeader} required="required"/>
                      <FormText color="muted">
                        The header of product.
                      </FormText>
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleText">Product Description</Label>
                      <Input type="textarea" name="productBody" id="productBody" placeholder="Product Description" onChange={this.onProBodyChange} style={textAreaStyle} value={this.state.productBody} required="required"/>
                      <FormText color="muted">
                        Tell investors about your product.
                      </FormText>
                    </FormGroup>
                    <Button color="info" style={btnStyle} onClick={this.addProduct}>Next Page</Button>{' '}
                </Form>          </TabPane>
          <TabPane tabId="5" className="pb-116">
          <Form style={alignForm}>
                    <FormGroup>
                      <Label for="exampleEmail">Advantage Header</Label>
                      <Input type="text" name="advantageHeader" id="advantageHeader" placeholder="Advantage Header" onChange={this.onAdHeaderChange} value={this.state.advantageHeader} required="required"/>
                      <FormText color="muted">
                        The header of advantage.
                      </FormText>
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleText">Advantage Description</Label>
                      <Input type="textarea" name="advantageBody" id="advantageBody" placeholder="Advantage Description" onChange={this.onAdBodyChange} style={textAreaStyle} value={this.state.advantageBody} required="required"/>
                      <FormText color="muted">
                      Tell investors the advantage of your project.
                      </FormText>
                    </FormGroup>
                    <Button color="info" style={btnStyle} onClick={this.addAdvantage}>Next Page</Button>{' '}
                </Form>          </TabPane>
          <TabPane tabId="6" className="pb-116">
          <Form style={alignForm}>
                    <FormGroup>
                      <Label for="exampleEmail">Motivation Header</Label>
                      <Input type="text" name="motivationHeader" id="motivationHeader" placeholder="Motivation Header" onChange={this.onMoHeaderChange} value={this.state.motivationHeader} required="required"/>
                      <FormText color="muted">
                        The header of motivation.
                      </FormText>
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleText">Motivation Description</Label>
                      <Input type="textarea" name="motivationBody" id="motivationBody" placeholder="Motivation Description" onChange={this.onMoBodyChange} style={textAreaStyle} value={this.state.motivationBody} required="required"/>
                      <FormText color="muted">
                        Tell investors the reason you want to do this.
                      </FormText>
                    </FormGroup>
                    <Button color="info" style={btnStyle} onClick={this.addMotivation}>Next Page</Button>{' '}
                </Form>          
                </TabPane>
          <TabPane tabId="7" className="pb-116">
          <Form style={alignForm}>
                    <FormGroup>
                      <Label for="exampleEmail">To Investors Header</Label>
                      <Input type="text" name="toInvestorsHeader" id="toInvestorsHeader" placeholder="To Investors Header" onChange={this.onTIHeaderChange} value={this.state.toInvestorsHeader} required="required"/>
                      <FormText color="muted">
                        The header of to investors.
                      </FormText>
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleText">To Investors Description</Label>
                      <Input type="textarea" name="toInvestorsBody" id="toInvestorsBody" placeholder="To Investors Description" onChange={this.onTIBodyChange} style={textAreaStyle} value={this.state.toInvestorsBody} required="required"/>
                      <FormText color="muted">
                        Any message to investors!
                      </FormText>
                    </FormGroup>
                    <Button color="info" style={btnStyle} onClick={this.addToInvestors}>Submit</Button>{' '}
                </Form>
            </TabPane>
            <TabPane tabId="8"  className="pb-1116">
            <Form style={alignForm}>
                <FormGroup>
                <h2 style={h2Style}>Are you sure you want to delete your pitch?</h2>
                <Button color="danger" style={btnStyle} onClick={this.deleteEn}>Delete</Button>{' '}
                </FormGroup>
            </Form>
            </TabPane>
        </TabContent>
        </div>
      </div>
    );
    }
}

const contentPadding = {
    paddingTop: 40
}

const ulStyle = {
    width: "100%"
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

const headerStyle = {
    backgroundColor: '#404447',
    width: '100%',
    height: 50,
    color: '#dee0e2',
    padding: 10
}

const containerStyle = {
    margin: 0,
    padding: 0,
    margin: 'auto'
}

const h2Style = {
    padding: 10,
    fontSize: 20,
    textAlign: 'center'
}

const mapStateToProps = (state) => {
    return {
        formSubmit1: state.entrepneurs.formSubmit1,
        formSubmit2: state.entrepneurs.formSubmit2,
        formSubmit3: state.entrepneurs.formSubmit3,
        formSubmit4: state.entrepneurs.formSubmit4,
        formSubmit5: state.entrepneurs.formSubmit5,
        formSubmit6: state.entrepneurs.formSubmit6,
        formSubmit7: state.entrepneurs.formSubmit7,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        formChange1: () => {
            dispatch(formChange1Thunk())
        },
        formChange2: () => {
            dispatch(formChange2Thunk())
        },
        formChange3: () => {
            dispatch(formChange3Thunk())
        },
        formChange4: () => {
            dispatch(formChange4Thunk())
        },
        formChange5: () => {
            dispatch(formChange5Thunk())
        },
        formChange6: () => {
            dispatch(formChange6Thunk())
        },
        formChange7: () => {
            dispatch(formChange7Thunk())
        },
        formSubmit: (username, category, userInfo, title, logo, bgImg) => {
            dispatch(formSubmitThunk(username, category, userInfo, title, logo, bgImg))
        },
        addAbout: (about) => {
            dispatch(AddAboutActionThunk(about))
        },
        addSummury: (summury) => {
            dispatch(AddSummuryActionThunk(summury))
        },
        addProduct: (product) => {
            dispatch(AddProductActionThunk(product))
        },
        addAdvantage: (advantage) => {
            dispatch(AddAdvantageActionThunk(advantage))
        },
        addMotivation: (motivation) => {
            dispatch(AddMotivationActionThunk(motivation))
        },
        addToInvestors: (toInvestors) => {
            dispatch(AddToInvestorsActionThunk(toInvestors))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);