import React from 'react';
import SectionComponent from '../Section';
import { Title, Half } from '../Utility';

export default class Molecule extends SectionComponent {

    static readonly id = "http_server";
    static readonly title = "Learning Molecule: HTTP Server";

    render(): React.ReactNode {
        return <Half>
            <Title>{Molecule.title}</Title>
            <p>When you start building HTTP-based applications in Node.js, the http/https modules are the ones you will interact with.
Now, let's create your first Node.js HTTP server and learn more about the http/https and express module.
            </p>
            <p>Steps:</p>
            <ol>
                <li>create a new folder for this project</li>
                <li>create a <kbd>package.json</kbd> file by running <kbd>yarn init -y</kbd></li>
                <li>Follow the post <a href="https://blog.risingstack.com/your-first-node-js-http-server/">
                    Node Hero - Your First Node.js HTTP Server</a></li>
                <li>Use <kbd>yarn</kbd> instead of <kbd>npm</kbd></li>
            </ol>
        </Half>
    }
}