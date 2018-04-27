import React from 'react';
import SectionComponent from '../Section';
import { Title, Half, Card } from '../Utility';

export default class Events extends SectionComponent{

    static readonly id = "events";
    static readonly title = "Events";

    render() : React.ReactNode{
        return <Half>
                <Title>Upcoming events</Title>
                <Card header="Next workshop: Friday, 4th of May, 13:00 - 16:00">
                    <p>Check out the registration pages for <a href="https://www.eventbrite.de/e/nodeschool-passau-javascript-nodejs-for-beginners-tickets-45189733710">
                    beginners</a> and <a href="https://www.eventbrite.de/e/nodeschool-passau-javascript-nodejs-for-intermediate-tickets-45188647461">intermediate</a> participants!</p>
                   <p>Participation and WIFI is for free, as usual.</p>
                </Card>
            </Half>;
    }
}