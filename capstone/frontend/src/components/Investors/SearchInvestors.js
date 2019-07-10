import React from 'react';
import { connect } from 'react-redux';
import '../SearchEntrepneurs.css'
import PitchCard2 from './PitchCard2'
import PitchCardList2 from './PitchCardList2'
import Filterbar from '../Filterbar2'
import axios from 'axios'
import {loadProfileAPI} from '../../redux/pitch/actions'




export class SearchInvestors extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value: '',
            pitchFilterList: []
        }
    }

    componentDidMount(){
        this.props.loadPitch();
        axios.get(`${process.env.REACT_APP_API_SERVER}/api/investors`)
        .then(res => {
            this.setState({
                pitchFilterList: res.data
            })
        })
    }

    handleChangeValue = (e) => { 
        e.preventDefault()
        this.setState({value: e.target.value})
        var result = this.filterSearchBar(this.props.pitch, this.state.value)
        this.setState({
            pitchFilterList: result
        })
    };

    filterSearchBar = (arr, query) => {
        return arr.filter(el=> el.name.toString().toLowerCase().indexOf(query.toLowerCase()) > -1 || el.about.toString().toLowerCase().indexOf(query.toLowerCase()) > -1)
    }

    filterAllButton = () => {
        this.setState({
            pitchFilterList: this.props.pitch
        })
    }

    filterOthersButton = () => {
        let category = "Others"
        let result = this.filterOthers(this.props.pitch, category)
        this.setState({
            pitchFilterList: result
        })
    }

    filterOthers = (arr, query) => {
        return arr.filter(el=> el.category.toString().toLowerCase().indexOf(query.toLowerCase()) > -1)
    }

    filterTechButton = () => {
        let category = "Technology"
        let result = this.filterOthers(this.props.pitch, category)
        this.setState({
            pitchFilterList: result
        })
    }

    filterOthers = (arr, query) => {
        return arr.filter(el=> el.category.toString().toLowerCase().indexOf(query.toLowerCase()) > -1)
    }

    filterFoodButton = () => {
        let category = "Food & Beverage"
        let result = this.filterOthers(this.props.pitch, category)
        this.setState({
            pitchFilterList: result
        })
    }

    filterOthers = (arr, query) => {
        return arr.filter(el=> el.category.toString().toLowerCase().indexOf(query.toLowerCase()) > -1)
    }

    filterFinTechButton = () => {
        let category = "FinTech"
        let result = this.filterOthers(this.props.pitch, category)
        this.setState({
            pitchFilterList: result
        })
    }

    filterOthers = (arr, query) => {
        return arr.filter(el=> el.category.toString().toLowerCase().indexOf(query.toLowerCase()) > -1)
    }

    filterEducationButton = () => {
        let category = "Education"
        let result = this.filterOthers(this.props.pitch, category)
        this.setState({
            pitchFilterList: result
        })
    }

    filterOthers = (arr, query) => {
        return arr.filter(el=> el.category.toString().toLowerCase().indexOf(query.toLowerCase()) > -1)
    }

    
    
    render(){
        return (
            <div className="container">
                <div style={content}>
                    <div className="clearfix mb40">
                        <div style={headerFloat}>
                            <h4 style={textStyle}>Search for Investors</h4>
                        </div>
                        <div class="search-wrapper" style={floatRight}>
                            <form accept-charset="UTF-8" method="get">
                                <div class="input-group">
                                    <div class="input-group-addon" style={marginTop3}>
                                        <i class="ion-ios-search"></i>
                                    </div>
                                    <input type="text" class="form-control" name="keyword" maxlength="50" placeholder="Search by Keyword" value={this.state.value} onChange={this.handleChangeValue} />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <Filterbar prop={this.props.pitch} buttonO={this.filterOthersButton} buttonT={this.filterTechButton} buttonFi={this.filterFinTechButton} buttonFo={this.filterFoodButton} buttonE={this.filterEducationButton} buttonA={this.filterAllButton}/>
                        <div className="col-lg-8">
                                <PitchCardList2 pitches={this.state.pitchFilterList}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}




const floatRight = {
    float: 'right',
}

const marginTop3 = {
    marginTop: 3
}

const headerFloat = {
    float: 'left'
}
const textStyle = {
    marginBottom: '0.615rem',
    fontFamily: 'inherit',
    fontWeight: 500,
    lineHeight: 1.2,
    color: 'inherit'
}


const containerStyle = {
    margin: 0,
    padding: 0,
    margin: 'auto'
}

const content = {
    paddingTop: 48,
    paddingBottom: 96
}

const mapStateToProps = (state) => {
    return {
        pitch: state.pitch.profileList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadPitch: () => {
            dispatch(loadProfileAPI())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchInvestors);