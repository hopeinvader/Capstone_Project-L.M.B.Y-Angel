import React from 'react';
import axios from 'axios';
import './MainPage.css'
import { match } from 'react-router-dom';

export default class MainPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return (
            <div>
            <header>

          <section className="view hm-gradient" id="intro">
            <div className="full-bg-img d-flex align-items-center">
              <div className="container containerM">
                <div className="row no-gutters">
                  <div className="col-md-10 col-lg-6 text-center text-md-left margins">
                    <div className="white-text">
                      <div className="wow fadeInLeft" data-wow-delay="0.3s">
                        <h1 className="h1-responsive font-bold mt-sm-5">Your Success is Our Mission.</h1>
                        <div className="h6">
                          

                        Join ambitious entrepreneurs and investors that have funded on L.M.B.Y. Angel.
                        </div>
                      </div><br />
                      <div className="wow fadeInLeft" data-wow-delay="0.3s"><a className="btn-white dark-grey-text font-bold ml-0" href="/signup" target="_blank"><i className="fa fa-play mr-1" /> Join us</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </header>
        <div id="content">
          <section className="text-center py-5 grey lighten-4" id="about">
            <div className="container">
              <div className="wow fadeIn">
                <h2 className="h1 pt-5 cpb-3">How it works</h2>
              </div>
              <div className="row">
                <div className="col-md-4 mb-r wow fadeInUp" data-wow-delay=".3s"><i className="far fa-address-card far-3x"></i>
                  <h3 className="h4 mt-3">Create pitch</h3>
                  <p className="mt-3 blue-grey-text">
                  Once you finish creating your pitch, begin to share your pitch page with investors                  </p>
                </div>
                <div className="col-md-4 mb-r wow fadeInUp" data-wow-delay=".4s"><i className="fas fa-search-plus far-4x"></i>
                  <h3 className="h4 mt-3">Search</h3>
                  <p className="mt-3 blue-grey-text">
                  As an investor you can search entrepreneurs that match your requirements	
                  </p>
                </div>
                <div className="col-md-4 mb-r wow fadeInUp" data-wow-delay=".5s"><i className="fa fa-comments-o fa-3x msgColor" />
                  <h3 className="h4 mt-3">Easy to contact</h3>
                  <p className="mt-3 blue-grey-text">
                  We provide a free web chat system between entrepreneurs and investors(Under development)
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section class="about" id="team">
            <div class="container">
              <div class="row">
                <div class="description col-md-9">
                  <div class="mb-30">
                    <h2 class="mb-15">
                      <span class="c-primary">About us</span>
                    </h2>
                    We strive to bring transparency and ease to entrepreneurs and investors big and small.  Investments come in all shapes and sizes and we bridge the gap between those who want to make their money grow and those who want their businesses to expand. 
                  </div>
                </div>
              </div>
            </div>       
          </section>
          <section className="py-5">
            <div className="container">
              <div className="wow fadeIn">
                <h2 className="h1 pt-5 cpb-3 text-center">Example of pitches</h2>

              </div>
                    <div className="row cards">
        <div className="col-md-6 col-lg-4">
        <div ><img className="img-fluid rounded z-depth-1 mb-3 imgMain" src="img/pitchCard.jpg" alt="team member" /></div>
        </div>
        <div className="col-md-6 col-lg-4">
        <div ><img className="img-fluid rounded z-depth-1 mb-3 imgMain" src="img/PitchCard2.jpg" alt="team member" /></div>
        </div>
        <div className="col-md-6 col-lg-4">
        <div ><img className="img-fluid rounded z-depth-1 mb-3 imgMain" src="img/profile.jpg" alt="team member" /></div>
        </div>
      </div>
            </div>
          </section>
          </div>
        </div>
        )
    }
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