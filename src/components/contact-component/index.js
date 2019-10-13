import React, { Component } from 'react';
// Import User Component
import Wrapper from '../utility-components/wrapper-component';
import Contact from './contact-component';
// Import User Data
import userInfo from "./../../JSON/resume"
// Import Image
import email from './../../image/email.svg';
import phoneNumber from './../../image/mobile.svg';
import personalSite from './../../image/personalSite.png';
import github from './../../image/github.svg';


export default class ContactParent extends Component {

    render() {
        return (
                <Wrapper className="user-contact-container">
                    <Contact icon={email}        contact={userInfo["user-contact"].email}/>
                    <Contact icon={phoneNumber}  contact={userInfo["user-contact"].phoneNumber}/>
                    <Contact icon={personalSite} contact={userInfo["user-contact"].personalSite}/>
                    <Contact icon={github}       contact={userInfo["user-contact"].github}/>
                </Wrapper>
        )
    }
}