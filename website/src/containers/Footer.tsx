import React from 'react';

export default class Footer extends React.PureComponent<{}, {}>{

    render() : React.ReactNode {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="content has-text-centered">
                        <p>thanks for: the great {' '}
                            <a href="https://materialdesignicons.com/">Material Design Icons</a> | the awesome {' '}
                            <a href="https://commons.wikimedia.org/w/index.php?curid=16192765" title="by High Contrast - Eigenes Werk, CC BY 3.0 de">Passau picture</a>
                        </p>
                    </div>
                </div>
            </footer>);
    }
}