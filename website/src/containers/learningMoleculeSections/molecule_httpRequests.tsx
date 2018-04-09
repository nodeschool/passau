import React from 'react';
import SectionComponent from '../Section';
import { Title, Half } from '../Utility';

export default class Molecule extends SectionComponent {

    static readonly id = "http_requests";
    static readonly title = "Learning Molecule: HTTP Requests";

    render(): React.ReactNode {
        return <Half>
            <Title>{Molecule.title}</Title>
            <p>External APIs can be important sources for your application. Send requests to get the relevant informations
                and show it on your website.
            </p>
            <p>Steps:</p>
            <ol>
                <li>Create a new folder for this project</li>
                <li>Create a <kbd>package.json</kbd> file by running <kbd>yarn init -y</kbd></li>
                <li>Follow the post <a href="https://blog.risingstack.com/node-hero-node-js-request-module-tutorial/">
                    Node Hero - Node.js Request Module Tutorial</a></li>
                <li>Use <kbd>yarn</kbd> instead of <kbd>npm</kbd></li>
                <li>Because we don’t have an access key for accuweather, adjust the described solution to use weather api from yahoo.
                    The relevant Endpoint is described here: <a href="https://developer.yahoo.com/weather/">Yahoo Weather API</a></li>
                <li><p>The server should be reachable via <a href="http://localhost/passau">http://localhost/passau</a> and display e.g.</p>
                    <p><kbd>Hello, the weather for passau is Cloudy, with 65°F</kbd></p></li>
                <li>For alternate ways of implementing HTTP requests with Node.js, read the article <a href="https://codeburst.io/4-ways-for-making-http-s-requests-with-node-js-c524f999942d">
                    4 ways for making HTTP(S) requests with Node.js</a></li>
                <li>We recommend using the module <code>node-fetch</code>, because the fetch api is a modern api implemented in all browsers for making 
                HTTP requests from JavaScript</li>
                <li>Read about the browser <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">Fetch API</a>, create a small HTML page and 
                make a request to the weather api (using a hard-coded path) from within the web page</li>
            </ol>
        </Half>
    }
}