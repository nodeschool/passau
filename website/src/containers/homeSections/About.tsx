import React from 'react';
import SectionComponent from '../Section';
import { Column, Columns, Title } from '../Utility';

export default class About extends SectionComponent{

    static readonly id = "about";
    static readonly title = "About";

    render() : React.ReactNode{
        return <Columns>
            <Column>
                <img src={require('../../img/svg/codesheet.svg')}/>
                <Title>learn to code</Title>
                You would like to get into programming and web technologies with JavaScript and Node.js? Or you are just
                curious what that is all about? Then the <a href="https://nodeschool.io">nodeschool.io</a> lessons are for you!
            </Column>
            <Column>
                <img src={require('../../img/svg/rocket.svg')}/>
                <Title>at your own pace</Title>
                Choose from the wide variety of freely available lessons on nodeschool.io and go through them at your pace.
                If working face-to-face with other interested people suits you more, attend on of our local workshops!
            </Column>
            <Column>
                <img src={require('../../img/svg/heart.svg')}/>
                <Title>for everybody</Title>
                We love to code and like to spread this feeling to everyone who is interested! Therefore we try to make workshope 
                be an awesome experience for everyone! Please respect our <a href="#conduct">Code of Conduct</a> to help us achieve this.
            </Column>
            </Columns>
    }
}