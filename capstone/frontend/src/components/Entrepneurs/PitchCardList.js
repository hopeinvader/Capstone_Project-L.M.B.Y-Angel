import * as React from 'react';
import PitchCard from './PitchCard';

export default class PitchCardList extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="row">
                {this.props.pitches.map((pitch, i)=> (
                    <PitchCard
                        key={i}
                        id={pitch.entrepneurs_id}
                        title={pitch.title}
                        logo={pitch.logo}
                        minimum_amount={pitch.minimum_amount}
                        target_amount={pitch.target_amount}
                        backgroundImage={pitch.photo}
                        body={pitch.body}
                        name={pitch.name}
                        category={pitch.category}
                        background_photo={pitch.background_photo}
                        logo={pitch.logo}
                    />
                ))}
            </div>
        );
    }
}