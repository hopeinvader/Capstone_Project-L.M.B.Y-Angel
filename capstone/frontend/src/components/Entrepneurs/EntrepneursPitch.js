import React from 'react';
import {connect} from 'react-redux';
import { Button, Alert } from 'reactstrap';
import axios from 'axios';
import {addUserThunk, addUserFinishedThunk} from '../../redux/entrepneurs/actions';
import '../EntrepneursPitch.css'

export class EntrepneursPitch extends React.Component {
    constructor(props){
        super(props)
        this.myRef = React.createRef();
        this.state = {
            user_id: localStorage.getItem('token'),
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
            facebook_url: '',
            linkedin_url: ''
        };
        this.onDismiss2 = this.onDismiss2.bind(this);
        this.addUsertoDB = this.addUsertoDB.bind(this)
    }

    componentDidMount = async() => {
        axios.get(`${process.env.REACT_APP_API_SERVER}/api/pitch/${this.props.match.params.id}`)
          .then((res => {
            
            this.setState({
                title: res.data[0].title,
                about: res.data[0].about,
                bgImg: res.data[0].background_photo,
                logo: res.data[0].logo,
                name: res.data[0].name,
                minimumAmount: res.data[0].minimum_amount,
                targetAmount: res.data[0].target_amount,
                linkedin_url: res.data[0].linkedin_url,
                facebook_url: res.data[0].facebook_url
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
          }));
      }

    scroll(ref) {
        ref.current.scrollIntoView({behavior: 'smooth'})
    }

    onDismiss2() {
        this.setState({ visible2: false });
      }

    addUsertoDB = (e) => {
        e.preventDefault();
        this.props.addUser({
            user: this.state.user_id
        });
        let props = this.props
        props.history.push('entrepneurs/pitch')
    }

    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    testRenderAlert = (props) => {
        return (
            this.props.addUserB ? (<Alert color="info" isOpen={this.state.visible2} toggle={this.onDismiss2}>Please follow introduction, finish your pitch and share with investors!</Alert>) : null
        )
    }

    render(){
        return (
            <div>
        <section className="header-1">
          <div className="container">
            <h1 className="mb-4">{this.state.title}</h1>
            <div className="img-container">
              <img width="100%" className="rounded" alt="" src={this.state.bgImg} />
            </div>
            <div className="company-info d-flex justify-content-between">
              <div className="company-media d-flex justify-content-start">
                <img className="company-image rounded" src={this.state.logo} />
                <div className="company-name ml-3">{this.state.name}</div>
              </div>
            <div className="socialMenu">
              <ul class="list-inline">
                <li class="list-inline-item">
                  <a class="social-link rounded-circle text-white mr-3" href={this.state.facebook_url}>
                        <i class="fab fa-facebook facebookColor"></i>                  
                    </a>
                </li>
                <li class="list-inline-item">
                  <a class="social-link rounded-circle text-white mr-3" href={this.state.linkedin_url}>
                        <i class="fab fa-linkedin"></i>                  
                    </a>
                </li>
              </ul>
              </div>
            </div>
          </div>
        </section>
          <div className="container">
          <div class="cc-pitchHead__statsMain">
                        <dl className='testAfter'>
                            <dt>Target</dt>
                            <dd>{this.numberWithCommas(this.state.targetAmount)} HKD</dd>
                        </dl>
                        <dl>
                            <dt>Minimum</dt>
                            <dd>{this.numberWithCommas(this.state.minimumAmount)} HKD</dd>
                        </dl>
                    </div>
          </div>

            <section className="project-nav">
              <div className="tab-nav-bar">
              <div className="container">
          <div className="row">
            <div className="col-xs-12 wid-100">
              <nav>
                <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                  <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Features</a>
                  <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Message</a>
                </div>
              </nav>
              <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
              <div className="container pt-45 pb-80">
          <div id="show" className="row">
          <div class="col-md-3">
                <div class="toc">
                    <div class="list-group" data-turbolinks="false">
                            <div class="list-group-item list-group-item-heading" style={textStyle}>Contents</div>
                            <a href="#toc-0" class="list-group-item list-group-item-action toc-li-0 toc-mokuji">About me</a>
                            <a href="#toc-1" class="list-group-item list-group-item-action toc-li-1 toc-mokuji">Summary</a>
                            <a href="#toc-2" class="list-group-item list-group-item-action toc-li-2 toc-mokuji">Product</a>
                            <a href="#toc-3" class="list-group-item list-group-item-action toc-li-3 toc-mokuji">Advantage</a>
                            <a href="#toc-4" class="list-group-item list-group-item-action toc-li-4 toc-mokuji">Motivation</a>
                            <a href="#toc-5" class="list-group-item list-group-item-action toc-li-5 toc-mokuji">To Investors</a>
                    </div>
                </div>
            </div>
            <div className="col-md-9">
              <div className="tab-content">
                <div className="tab-pane description show active" id="description">                  
                    <section className="content_wrapper top_pad_half">
                    <div id="i15">
                      <h3 className="mokuji" id="toc-0">
                        About me
                      </h3>
                    </div>
                    <p className="text">{this.state.about}</p>
                  </section>
                  <section className="content_wrapper">
                    <div id="i2">
                      <h3 className="mokuji" id="toc-1">
                        Summary
                      </h3>
                    </div>
                    <h4 className="style5a">{this.state.summuryHeader}</h4>
                    <p className="text tx_mar_zero">{this.state.summuryBody}</p>
                  </section>
                  <section className="content_wrapper">
                    <h3 className="mokuji" id="toc-2">
                      Product
                    </h3>
                    <h4 className="style5a">{this.state.productHeader}</h4>
                    <p className="text tx_mar_zero">{this.state.productBody}</p>
                  </section>
                  <section className="content_wrapper">
                    <div id="i6">
                      <h3 className="mokuji" id="toc-3">
                        Advantage
                      </h3>
                    </div>
                    <h4 className="style5a">{this.state.advantageHeader}</h4>
                    <p className="text tx_mar_zero">{this.state.advantageBody}</p>
                  </section>
                  <section className="content_wrapper">
                      <div id="i7">
                          <h3 className="mokuji" id="toc-4">
                              Motivation
                          </h3>
                    </div>
                      <h4 className="style5a">{this.state.motivationHeader}</h4>
                      <p className="text tx_mar_zero">{this.state.motivationBody}</p>
                  </section>
                  <section className="content_wrapper">
                      <div id="i7">
                          <h3 className="mokuji" id="toc-5">
                              To Investors
                          </h3>
                    </div>
                      <h4 className="style5a">{this.state.toInvestorsHeader}</h4>
                      <p className="text tx_mar_zero">{this.state.toInvestorsBody}</p>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
              </div>
            </div>
          </div>
      </div>
              </div>
            </section>
      </div>
      
                
        )
    }
}


const textStyle = {
    fontFamily: 'inherit',
    fontWeight: 500,
    color: 'inherit'
}

const mapStateToProps = (state) => {
    return {
        enOrIn: state.auth.enOrIn,
        isAuthenticated: state.auth.isAuthenticated,
        addUserB: state.entrepneurs.addUserB,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (users) => {
            dispatch(addUserThunk(users))
        },
        addUserFinished: () => {
            dispatch(addUserFinishedThunk())
        }
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(EntrepneursPitch)