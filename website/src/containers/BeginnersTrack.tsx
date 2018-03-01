import React from 'react';
import Navigation from './Navigation';
import Header from './Header';
import { TSection } from './Section';
import Footer from './Footer';
import Sections from './beginnersTrackSections';
import SectionRenderer from './SectionRenderer';

export default class BeginnersTrackPage extends React.PureComponent<{}, {}> {

    render(): React.ReactNode {
        return <div>
            <Navigation paths={Sections.filter(function (data: TSection): boolean {
                return data.title != undefined;
            }).map(function (data: TSection): [string, string, string] {
                return [data.title, "#" + data.id, data.id];
            })} />
            <Header />
            {Sections.map(function (data: TSection, index: number): React.ReactNode {
                return <SectionRenderer toRender={data} isInfo={index % 2 == 0} key={index} />;
            })}
            <Footer />
        </div>;
    }
}