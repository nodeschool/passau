import React from 'react';
import { SectionComponent } from '../Section';
import { Title, Half, LineBreak } from './Utility';

export class Agenda extends SectionComponent{

    static readonly id = "agenda";
    static readonly title = "Workshop Agenda";

    render() : React.ReactNode{
        return <Half>
                <Title>Workshop Agenda</Title>
                The workshops we host embrace the spirit of letting you learn at your own pace. Every attendee is free
                to pick from the lessons provided on <a href="https://nodeschool.io">nodeschool.io</a>.<LineBreak/>
                The mentors lend a helping hand with getting wifi access, setting up node and the nodeschool.io lessons and any questions you have regarding JavaScript or Node.js. 
            </Half>;
    }
}