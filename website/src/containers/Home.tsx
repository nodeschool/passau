import React from 'react';
import { Navigation } from './Navigation';
import { Header } from './Header';
import { SectionRenderer } from './SectionRenderer';
import { Section } from './Section';
import { Footer } from './Footer';
import { homeSections } from './sections/HomeSections';

export interface HomeProps {}

class Home extends React.PureComponent<HomeProps, {}> {

    render() : React.ReactNode{
        return <div>
                <Navigation paths={homeSections.filter(function(data: Section) : boolean{
                    return data.title != undefined;
                }).map(function(data: Section) : [string, string, string]{
                        return [data.title, "#" + data.id, data.id];
                    })}/>
                <Header/>
                {homeSections.map(function(data: Section, index: number) : React.ReactNode{
                    return <SectionRenderer toRender={data} isInfo={index % 2 == 0} key={index}/>;
                })}
                <Footer/>
            </div>;
    }
}

export default Home;