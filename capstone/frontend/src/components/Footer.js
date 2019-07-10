import React from 'react';
import './Footer.css'

export default class Footer extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <section id="footer">
        <div className="container">
          <div className="row text-center text-xs-center text-sm-left text-md-left">
            <div className="col-xs-12 col-sm-4 col-md-4">
              <h5>Navigation</h5>
              <ul className="list-unstyled quick-links">
                <li><a href="/"><i className="fa fa-angle-double-right" />Home</a></li>
                <li><a href="/"><i className="fa fa-angle-double-right" />About</a></li>
                <li><a href="/contact"><i className="fa fa-angle-double-right" />Contact</a></li>
                <li><a href="/faq"><i className="fa fa-angle-double-right" />FAQ</a></li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
              <h5>Entrepreneurs</h5>
              <ul className="list-unstyled quick-links">
                <li><a href="/getstart/entrepneurs"><i className="fa fa-angle-double-right" />Get Started</a></li>
                <li><a href="/search/investors"><i className="fa fa-angle-double-right" />Search Investors</a></li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
              <h5>Investors</h5>
              <ul className="list-unstyled quick-links">
                <li><a href="/getstart/invesotrs"><i className="fa fa-angle-double-right" />Get Started</a></li>
                <li><a href="/search/entrepneurs"><i className="fa fa-angle-double-right" />Search Entrepreneurs</a></li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
              <ul className="list-unstyled list-inline social text-center">
                <li className="list-inline-item"><a href="https://www.facebook.com/jihyup.ryu"><i className="fa fa-facebook facebookColor" /></a></li>
                <li className="list-inline-item"><a href="https://twitter.com/JihyupRyu"><i className="fa fa-twitter" /></a></li>
                <li className="list-inline-item"><a href="https://github.com/hopeinvader?tab=repositories" target="_blank"><i class="fab fa-github githubColor"></i></a></li>
              </ul>
            </div>
          </div>	
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
              <p className="h6">©<a className="text-green ml-2" href="/" target="_blank">L.M.B.Y Angel</a> All rights reserved</p>
            </div>
          </div>	
        </div>
      </section>
        )
    }
}
