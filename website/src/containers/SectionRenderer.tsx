import React from 'react';
import { Section } from 'src/containers/Section';

export interface SectionRendererProps {
    toRender: Section;
    isInfo: boolean;
}

export class SectionRenderer extends React.PureComponent<SectionRendererProps, {}> {

    render(){
        let className:string = "hero";
        if (this.props.isInfo)
            className = className + " is-info";
        let Content = this.props.toRender;
        return <section id={this.props.toRender.id} className={className}>
                <div className="hero-body container">
                    <Content/>
                </div>
            </section>;
    }
}