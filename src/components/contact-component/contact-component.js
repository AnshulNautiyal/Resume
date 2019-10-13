import React from 'react';
import Wrapper from '../utility-components/wrapper-component';


export default (props) => (
        <Wrapper className="user-contact-details">
            <img src={props.icon} alt="user-contact-icon" />
            <p> { props.contact }</p>
        </Wrapper>    
)