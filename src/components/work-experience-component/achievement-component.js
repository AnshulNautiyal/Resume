import React from 'react';
import WrapperComponent from '../utility-components/wrapper-component';

export default (props) => {

    const { achievementsList } = props;
    const list = achievementsList.map( (item, index) => {
        return <li key={index}>{item}</li>
    })
    return (
    <WrapperComponent>
        <ul>
            {list}
        </ul>
    </WrapperComponent>
)
}
