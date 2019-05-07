import React from 'react';
import SectionComponent from '../Section';
import { Title, Half, Card } from '../Utility';

export default class Events extends SectionComponent {

    static readonly id = "events";
    static readonly title = "Events";

    render(): React.ReactNode {
        return <Half>
            <Title>Upcoming events</Title>
            <Card>
                <div className="content">
                    <p className="title" style={{ color: 'black' }}>Next workshop: <time dateTime="2019-05-21">21th of May</time></p>
                    <p className="subtitle" style={{ color: 'black' }}>
                        More details and registration at the <a href="https://www.meetup.com/de-DE/Nodeschool-Passau/events/260909843/">meetup event page</a>
                    </p>
                </div>
                <footer className="card-footer">
                   <a href="https://www.meetup.com/de-DE/Nodeschool-Passau/">Nodeschool Passau @ Meetup</a>
                </footer>
            </Card>
        </Half>;
    }
}