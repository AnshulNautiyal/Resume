import React from 'react';
import ExperienceDetail from './experience-component';

export default class Experience extends React.Component {


    render() {

        return <ExperienceDetail  { ...this.props }/>
    }
    
};
