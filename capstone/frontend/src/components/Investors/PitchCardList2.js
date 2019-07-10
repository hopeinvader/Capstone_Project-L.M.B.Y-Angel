import * as React from 'react';
import PitchCard2 from './PitchCard2';

export default class PitchCardList2 extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="row">
                {this.props.pitches.map((pitch, i)=> (
                    <PitchCard2
                        key={i}
                        id={pitch.investors_id}
                        minimum_amount={pitch.minimum_amount}
                        maximum_amount={pitch.maximum_amount}
                        about={pitch.about}
                        name={pitch.name}
                        background_photo={pitch.background_photo}
                        logo={pitch.logo}
                    />
                ))}
            </div>
        );
    }
}