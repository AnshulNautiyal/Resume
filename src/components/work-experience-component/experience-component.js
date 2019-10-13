import React from 'react';
import WrapperComponent from '../utility-components/wrapper-component';
import AchievementsList from './achievement-component';

export default (props) => {

    const { 
        mainHeading = "", 
        designation = "", 
        companyName = "", 
        startDate = "", 
        endDate = "", 
        location = "", 
        subHeading = "",
        achievementsList = []

        } = props;

    return (
    <WrapperComponent className="work-exp-section">
            {
                !!mainHeading.length && <h1>{ mainHeading }</h1>
            }
            {
                !!designation.length && <h3>{ designation }</h3>
            }
            {
                !!companyName.length && <h4>{ companyName }</h4>
            }
            {
                !!startDate.length && !!endDate.length && !!location.length && <div>
                                                        <span>{ startDate } – {endDate}</span>
                                                        <span>{location}</span>
                                                    </div>
            }
            {
                !!subHeading.length &&<div>{ subHeading }</div>
            }
            
            <AchievementsList achievementsList={achievementsList}/>
    </WrapperComponent>
)}
