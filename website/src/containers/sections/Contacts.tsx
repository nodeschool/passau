import React from 'react';
import { SectionComponent } from '../Section';
import { Half, Title, Panel, PanelTwitterLink, TwitterIconSetup } from './Utility';

export class Contacts extends SectionComponent{

    static readonly id = "contact";
    static readonly title = "Contacts";

    render() : React.ReactNode{
        return <Half>
            <Title>Contacts</Title>
            <TwitterIconSetup/>
            <Panel header="nodeschool Passau organizers">
                <PanelTwitterLink link="https://twitter.com/huberv84">
                    Valentin Huber
                </PanelTwitterLink>
                <PanelTwitterLink link="https://twitter.com/otmarjatsch">
                    Otmar Jatsch
                </PanelTwitterLink>
                <PanelTwitterLink link="https://twitter.com/Koenix83">
                    Helmut Königseder
                </PanelTwitterLink>
            </Panel>
            </Half>;
    }
}