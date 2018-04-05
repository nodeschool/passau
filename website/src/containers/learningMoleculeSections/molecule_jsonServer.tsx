import React from 'react';
import SectionComponent from '../Section';
import { Title, Half } from '../Utility';

export default class Molecule extends SectionComponent {

    static readonly id = "json_server";
    static readonly title = "Learning Molecule: JSON Server";

    render(): React.ReactNode {
        return <Half>
            <Title>{Molecule.title}</Title>
            <p>When you build a web app, you'll probably want to be able to demonstrate
                the app without writing a full-blown backend. <a href="https://github.com/typicode/json-server">JSON Server</a> is
                an npm module which facilitates exactly this.
            </p>
            <p>Steps:</p>
            <ol>
                <li>create a new folder for this project</li>
                <li>create a <kbd>package.json</kbd> file by running <kbd>yarn init -y</kbd></li>
                <li>add JSON Server: <kbd>yarn add json-server</kbd></li>
                <li>add a script entry to your <kbd>package.json</kbd>: <kbd>"scripts": {"{"} "start": "json-server --watch db.json" {"}"}</kbd></li>
                <li>Follow the post <a href="https://medium.com/codingthesmartway-com-blog/create-a-rest-api-with-json-server-36da8680136d">
                    Create a REST API With JSON Server</a></li>
            </ol>
        </Half>
    }
}