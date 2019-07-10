import React from 'react';
import { connect } from 'react-redux';
import '../PitchCard.css'
import Background from './laptopCoffee.jpg'



export class PitchCard2 extends React.Component {
    constructor(props){
        super(props)
    }

    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    render(){
        return (
          <div className="col-md-6 mb-30">
            <div className="projects card">
              <a href={"/investors/" + this.props.id}><img style={imgStyle} className="card-img-top" alt="Not found" src={this.props.background_photo} /></a>
              <div className="card-body cardInvestor">
                <div className="company media">
                  <img width={64} height={64} className="media-object" src={this.props.logo} />
                  <div className="media-body">
                    <span className="text-muted">{this.props.name}</span>
                  </div>
                </div>
                <div className="description">{this.props.about}</div>
                <div className="achievement clearfix">
                  <div className='row textCenter'>
                    <h3 className="solicit col-sm-12 col-md-6">{this.numberWithCommas(this.props.minimum_amount)} HKD<p className="card-title2"><span>Minimum</span> amount</p> </h3>
                    <h3 className="solicit col-sm-12 col-md-6">{this.numberWithCommas(this.props.maximum_amount)} HKD <p className="card-title2"><span>Maximum</span> amount</p> </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}



const testBackground = {
  backgroundImage: `url(${Background})`,
}

const imgStyle = {
  height: 185
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {

}

export default connect(mapStateToProps, mapDispatchToProps)(PitchCard2);