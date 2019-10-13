import React, { Component } from 'react';
import WrapperComponent from './../utility-components/wrapper-component';
import { Name, Designation, IntroSummary, UserProfile } from './user-intro-component';
import JSONdata from './../../JSON/resume';


export default class Introduction extends Component {

    render() {

        return (

            <WrapperComponent className="resume-user-intro-container">
                
                <WrapperComponent className="resume-user-intro-container__user-detail">

                    <Name 
                        className="resume-user-intro-container__user-detail--name"
                        {...JSONdata["user-intro"]}
                    />
                    <Designation 
                        className="resume-user-intro-container__user-detail--designation"
                        {...JSONdata["user-intro"]}
                    />
                    <IntroSummary 
                        className="resume-user-intro-container__user-detail--summary"
                        {...JSONdata["user-intro"]}    
                    />

                </WrapperComponent>

                <UserProfile 
                        className="resume-user-intro-container__user-profile" 
                        {...JSONdata["user-intro"]}   
                        />

            </WrapperComponent>
        )
    }
    
}
