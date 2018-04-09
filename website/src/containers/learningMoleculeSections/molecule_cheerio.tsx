import React from 'react';
import SectionComponent from '../Section';
import { Title, Half } from '../Utility';

export default class Molecule extends SectionComponent {

    static readonly id = "cheerio";
    static readonly title = "Learning Molecule: Cheerio";

    render(): React.ReactNode {
        return <Half>
            <Title>{Molecule.title}</Title>
            <p>With the Node.js module cheerio you can load the html part of a website into your Node.js function and
                work with it like an object. In this tutorial you scrap the news from a website and display it in the console.
            </p>
            <p>Steps:</p>
            <ol>
                <li>create a new folder for this project</li>
                <li>create a <kbd>package.json</kbd> file by running <kbd>yarn init -y</kbd></li>
                <li>add JSON Server: <kbd>yarn add json-server</kbd></li>
                <li>Follow the post <a href="https://www.digitalocean.com/community/tutorials/how-to-use-node-js-request-and-cheerio-to-set-up-simple-web-scraping">
                    How To Use node.js, request and cheerio to Set Up Simple Web-Scraping</a></li>
                <li>Adjust your solution to use your favorite request module instead of the <kbd>request</kbd> module</li>
            </ol>
        </Half>
    }
}