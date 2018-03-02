import React from 'react';
import SectionComponent from '../Section';
import { Title, Half, LineBreak } from '../Utility';

export default class Agenda extends SectionComponent {

    static readonly id = "agenda";
    static readonly title = "Workshop Agenda";

    render(): React.ReactNode {
        return <Half>
            <Title>Workshop Agenda</Title>
            <p>The workshops we host embrace the spirit of letting you learn at your own pace.</p>
            <p>During registration for a workshop you can choose whether you'd like to attend
                the <a href="BeginnersTrack">Beginner's Track</a> or whether you'd like to
                work on one of the <a href="LearningMolecules">Learning Molecules</a> or
                pick from the lessons provided on <a href="https://nodeschool.io">nodeschool.io</a>.</p>
            <p>The mentors lend a helping hand with getting wifi access, setting up node and the nodeschool.io
                lessons and any questions you have regarding JavaScript or Node.js.</p>
        </Half>;
    }
}