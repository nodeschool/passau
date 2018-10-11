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
                    <p className="title" style={{ color: 'black' }}>Next workshop: <time dateTime="2018-11-20">20th of November</time></p>
                    <p className="subtitle" style={{ color: 'black' }}>
                        Register <a
                            style={{ color: 'black' }}
                            target="_blank"
                            href="https://www.eventbrite.de/e/nodeschool-passau-javascript-nodejs-tickets-51193225315">here</a> for
                            the next workshop about writing command line tools with Node.js</p>
                </div>
                <footer className="card-footer">
                    Past events:
                    <ul>
                        <li>2018-05-04</li>
                    </ul>
                </footer>

            </Card>
        </Half>;
    }
}