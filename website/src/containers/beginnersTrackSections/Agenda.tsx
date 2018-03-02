import React from 'react';
import SectionComponent from '../Section';
import { Title, Half } from '../Utility';

export default class Agenda extends SectionComponent {

    static readonly id = "agenda";
    static readonly title = "Agenda";

    render(): React.ReactNode {
        return <Half>
            <Title>Beginner's Track Agenda</Title>
            <p>The agenda for the beginner's track session is:</p>
            <ul>
                <li>Setup
                        <ul>
                        <li>setting up nvm, node and yarn (+ proxy settings)</li>
                        <li>checking the tool setup</li>
                        <li>setting up Visual Studio Code (VSC) (+ proxy settings)</li>
                        <li>working with the command prompt from within VSC</li>
                    </ul>
                </li>
                <li>the <a href="https://github.com/workshopper/javascripting">javascripting</a> workshopper</li>
                <li>the <a href="https://github.com/workshopper/learnyounode">learnyounode</a> workshopper</li>
            </ul>
        </Half>
    }
}