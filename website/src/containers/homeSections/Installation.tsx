import React from 'react';
import SectionComponent from '../Section';
import { Title, Half, Subtitle, ParagraphEnd } from './Utility';

export default class Installation extends SectionComponent{

    static readonly id = "installation";
    static readonly title = "Installation";

    render() : React.ReactNode{
        return <Half>
                <Title>Installation</Title>
                <Subtitle>nvm</Subtitle>
                We recommend that you install a node version manager such that you can upgrade to new versions easily:
                <ul>
                    <li>
                        Windows: <a href="https://github.com/coreybutler/nvm-windows">nvm-windows</a>. 
                        Download nvm-setup.zip from the releases page, extract and run the installer.
                    </li>
                    <li>
                        Linux: <a href="https://github.com/creationix/nvm">nvm</a>
                    </li>
                </ul>
                If you are behind a corporate proxy, open a command-line prompt and configure the proxy with
                <code>nvm proxy &lt;your-proxy&gt;</code>. <ParagraphEnd/>
                An alternative to using nvm-windows is <a href="https://chocolatey.org/">Chocolatey</a>.

                <Subtitle>node and npm</Subtitle>
                
                Open a command-line prompt in admin mode and use nvm to install the latest version of node and npm available
                with nvm with <code>nvm install 8.9.1</code> followed by <code>nvm use 8.9.1</code>.<ParagraphEnd/>
                
                Check that the installation was successfuly with <code>node --version</code>.<ParagraphEnd/>

                If your are behind a corporate proxy, configure npm to use the proxy with <code>npm config set proxy &lt;your-proxy&gt;</code> and
                <code>npm config set https-proxy &lt;your-proxy&gt;</code>.

                <Subtitle>Visual Studio Code</Subtitle>

                As code editor we recommend <a href="https://code.visualstudio.com/">Visual Studio Code</a>, a 
                free and open source IDE available for multiple platforms.

                <Subtitle>Your first nodeschool workshopper</Subtitle>

                Install your first workshopper with e.g. <code>npm install --global javascripting</code>. <ParagraphEnd/>

                Then create a new folder "javascripting" somewhere on our computer and open the folder in Visual Studio
                Code. Open a terminal in Visual Studio Code (press F1 to open the search bar, type in "terminal"
                and select the option to toggle the integrated terminal). In the terminal, type <kbd>javascripting</kbd> and 
                follow the instructions.
            </Half>;
    }
}