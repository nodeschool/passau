import React from 'react';

export class Header extends React.PureComponent<{}, {}>{

    render() : React.ReactNode {
        return (
            <header id="header">
                <img role="presentation" src={require('../img/svg/nodeschool_passau.svg')} alt="nodeschool passau avatar"/>
                <div className="hero">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h1 className="title">
                                Nodeschool Passau
                            </h1>
                        </div>
                    </div>
                </div>
            </header>);
    }
}