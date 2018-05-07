import React from 'react';
import SectionComponent from '../Section';
import { Title, Half, Card } from '../Utility';

export default class Events extends SectionComponent {

    static readonly id = "events";
    static readonly title = "Events";

    render(): React.ReactNode {
        return <Half>
            <Title>Upcoming events</Title>
            <Card header="Nothing planned at the moment - stay tuned">
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