import React from 'react';

type Props = { children?: React.ReactNode };

const Columns: React.StatelessComponent<{}> = (props: Props) => {
    return <div className="columns">
            {props.children}
        </div>;
}

const Column: React.StatelessComponent<{}> = (props: Props) => {
    return <div className="column">
            {props.children}
        </div>
}

const Title: React.StatelessComponent<{}> = (props: Props) => {
    return <h1 className="title has-text-centered">
            {props.children}
        </h1>;
}

const Subtitle: React.StatelessComponent<{}> = (props: Props) => {
    return <h2 className="title">
            {props.children}
        </h2>;
}

const MainTitle: React.StatelessComponent<{}> = (props: Props) => {
    return <h1 className="title is-2 has-text-centered">
            {props.children}
        </h1>;
}

const Half: React.StatelessComponent<{}> = (props: Props) => {
    return <div className="columns is-centered">
            <div className="column is-half-desktop">
                {props.children}
            </div>
        </div>
}

const Card: React.StatelessComponent<{ header: React.ReactNode | string }> = (props: Props & { header: React.ReactNode | string}) => {
    if (typeof props.header === "string"){
        return <div className="card">
            <header className="card-header-title">
                <p>{props.header}</p>
            </header>
            <div className="card-content">
                {props.children}
            </div></div>;
    }else{
        return <div className="card">
        <header className="card-header">
            {props.header}
        </header>
        <div className="card-content">
            {props.children}
        </div></div>;
    }
}


const Panel: React.StatelessComponent<{ header: React.ReactNode | string }> = (props: Props & { header: React.ReactNode | string}) => {
    if (typeof props.header === "string"){
        return <div className="panel">
            <div className="panel-heading has-text-centered">
                {props.header}
            </div>
                {props.children}
            </div>;
    }else{
        return <div className="panel">
            <div className="panel-heading">
                {props.header}
            </div>
                {props.children}
            </div>;
    }
}

const PanelTwitterLink: React.StatelessComponent<{ link: string }> = (props: Props & {link: string}) => {
    return <a className="panel-block" href={props.link}>
            <TwitterIcon/>
            {props.children}
        </a>;
}

const LineBreak: React.StatelessComponent<{}> = (props: Props) => {
    return <br/>;
}

const ParagraphEnd: React.StatelessComponent<{}> = (props: Props) => {
    return <p></p>;
}

const TwitterIcon: React.StatelessComponent<{}> = (props: Props) => {
    return <span className="panel-icon" role="presentation">
            <svg height="100%" width="100%">
                <use xlinkHref="#icon-twitter"></use>
            </svg>
        </span>;
}

const TwitterIconSetup: React.StatelessComponent<{}> = (props: Props) => {
    return <svg style={{display: 'none'}}>
            <symbol id="icon-twitter" viewBox="0 0 24 24">
                <path fill="#000000" d="M17.71,9.33C18.19,8.93 18.75,8.45 19,7.92C18.59,8.13 18.1,8.26 17.56,8.33C18.06,7.97 18.47,7.5 18.68,6.86C18.16,7.14 17.63,7.38 16.97,7.5C15.42,5.63 11.71,7.15 12.37,9.95C9.76,9.79 8.17,8.61 6.85,7.16C6.1,8.38 6.75,10.23 7.64,10.74C7.18,10.71 6.83,10.57 6.5,10.41C6.54,11.95 7.39,12.69 8.58,13.09C8.22,13.16 7.82,13.18 7.44,13.12C7.81,14.19 8.58,14.86 9.9,15C9,15.76 7.34,16.29 6,16.08C7.15,16.81 8.46,17.39 10.28,17.31C14.69,17.11 17.64,13.95 17.71,9.33M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z"></path>
            </symbol>
        </svg>;
}

export {Column, Columns, Title, Half, Card, MainTitle, LineBreak, ParagraphEnd, Subtitle, Panel, PanelTwitterLink, TwitterIcon, TwitterIconSetup};