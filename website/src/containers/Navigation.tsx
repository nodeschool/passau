import React from 'react';
import { Link } from 'react-static';

export interface NavigationProps{
    paths: [string, string, string][];
}

interface NavigationState{
    open: boolean;
}

export class Navigation extends React.PureComponent<NavigationProps, NavigationState>{

    constructor(props: NavigationProps){
        super(props);
        this.state = { open: false };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() : void{
        this.setState((prevState: Readonly<NavigationState>, props: NavigationProps) => {
            return { open: !prevState.open };
        });
    }

    render() : React.ReactNode {
        return (
        <nav className="navbar" role="navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">nodeschool Passau</a>
                <button className="navbar-burger" onClick={this.toggleMenu} aria-label="Open menu">
                    <svg className="fill-parent" viewBox="0 0 24 24">
                        <path fill="#000000" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"></path>
                    </svg>
                </button>
            </div>

            <div id="navMenu" className={"navbar-menu" + (this.state.open ? " is-active" : "")}>
                <div className="navbar-end">
                    {this.props.paths.map((path: [string, string], index: number, arr: [string, string][]) => {
                        return <Link key={path[2]} className="navbar-item" to={path[1]}>{path[0]}</Link>;
                    })}
                </div>
            </div>
        </nav>
        );
    }
}