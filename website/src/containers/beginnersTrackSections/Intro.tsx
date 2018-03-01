import React from 'react';
import SectionComponent from '../Section';
import { Title, Half } from '../Utility';

export default class About extends SectionComponent {

    static readonly id = "intro";
    static readonly title = "Introduction";

    render(): React.ReactNode {
        return <Half>
            <Title>Introduction</Title>
            <p>
                When you are starting out with JavaScript development, you need to know quite a few things:
            <ul>
                    <li>installing different tools</li>
                    <li>configuring environment variables</li>
                    <li>working with a command prompt (cmd, Powershell or Bash)</li>
                    <li>setting up a code editor or IDE</li>
                </ul>
            </p>
            <p>In order to get you up and running quickly, we devised the <b>Beginner's Track</b>.</p>
            <p>This is an own guided session where one of our mentors will lead you through setting
            up everything you need and the first two workshopper modules.</p>
        </Half>
    }
}