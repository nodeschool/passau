import React from 'react';
import SectionComponent from '../Section';
import { Title, Half } from '../Utility';

export default class About extends SectionComponent {

    static readonly id = "intro";
    static readonly title = "Introduction";

    render(): React.ReactNode {
        return <Half>
            <Title>Learning Molecules</Title>
            <p>Once you got started by attending a <a href="BeginnersTrack">Beginner's Track</a> session,
            you may choose from any of the workshopper modules listed on
            the <a href="https://nodeschool.org">NodeSchool</a> page.</p>
            <p>In order to facilitate discussions with peers in a NodeSchool Passau workshop,
                we provide what we call "Learning Molecules" - ideas for tiny projects you may work on,
                instead of or in addition to the workshopper modules.
            </p>
            <p>In all NodeSchool Passau workshops, a mentor will present one of these Learning
                Molecules to introduce you to the main topics of the molecule.
            </p>
        </Half>
    }
}