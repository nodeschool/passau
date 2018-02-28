import React from 'react';
import { SectionComponent } from '../Section';
import { Title, Half, Card } from './Utility';

export class Events extends SectionComponent{

    static readonly id = "events";
    static readonly title = "Events";

    render() : React.ReactNode{
        return <Half>
                <Title>Upcoming events</Title>
                <Card header="nothing planned at the moment">
                    Stay tuned
                </Card>
            </Half>;
    }
}