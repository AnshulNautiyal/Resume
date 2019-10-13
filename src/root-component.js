import React from 'react';
import WrapperComponent from './components/utility-components/wrapper-component';
import Introduction from './components/introduction-component';
import ContactParent from './components/contact-component';
import Experience from './components/work-experience-component/index';
import workExp from "./JSON/resume"

export default () => {
    
    const workSkill = workExp["work-skill-section"];
    const experienceData = workSkill.map( (item, index) => <Experience  key={index} {...item}/> );

    return (

        <WrapperComponent className="resume-body">
            <Introduction />
            <ContactParent />
            <WrapperComponent className="work-skill-section">
                <WrapperComponent className="work-skill-section__work">
                    { experienceData }
                </WrapperComponent>
                <WrapperComponent className="work-skill-section__skills">
                    <Experience  mainHeader={true}/>
                </WrapperComponent>
            </WrapperComponent>
            
        </WrapperComponent>
        
    );
}
