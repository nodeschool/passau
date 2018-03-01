import React from 'react';
import SectionComponent from '../Section';
import { Title, Half, ParagraphEnd } from './Utility';

export default class CodeOfConduct extends SectionComponent{

    static readonly id = "conduct";
    static readonly title = "Code of Conduct";

    render() : React.ReactNode{
        return <Half>
                <Title>Code of Conduct</Title>
                We, the organizers of Nodeschool Passau, are dedicated to providing a harassment-free community for everyone,
                regardless of sex, gender identity or expression, sexual orientation, disability, physical appearance,
                age, body size, race, nationality, or religious beliefs. We do not tolerate harassment of community
                members in any form. Participants violating these rules may be sanctioned or expelled from the community
                at the discretion of the organizers of Nodeschool Passau. <ParagraphEnd/>

                Harassment includes offensive verbal or written comments related to sex, gender identity or expression,
                sexual orientation, disability, physical appearance, age, body size, race, nationality, or religious
                beliefs, deliberate intimidation, threats, stalking, following, harassing photography or recording,
                sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual
                attention. Sexual language and imagery is not appropriate for any events at Nodeschool Passau meetups
                or in any related communication channels. Community members asked to stop any harassing behavior
                are expected to comply immediately. Sponsors and presenters are also subject to the anti-harassment
                policy.<ParagraphEnd/>
                    
                If a community member engages in harassing behavior, the organizers of Nodeschool Passau may take any
                action they deem appropriate, including warning the offender or expulsion from the community. If
                you are being harassed, notice that someone else is being harassed, or have any concerns, please
                contact an organizer immediately.<ParagraphEnd/>

                If you have questions or feedback about this Code of Conduct please contact one of the <a href="#contacts">organizers</a>.
                <ParagraphEnd/>
                
                The organizers of the above communities developed this Code of Conduct to govern their respective events
                and communication channels. We used <a href="http://www.meetup.com/pdxpython/pages/Code_of_Conduct/">PDX Python's anti-harassment policy</a>
                and the <a href="http://geekfeminism.wikia.com/wiki/Conference_anti-harassment/Policy">Geek Feminism Conference anti-harassment policy</a> as 
                a starting point. This Code of Conduct, like its inspirations, is licensed under 
                the <a href="http://creativecommons.org/publicdomain/zero/1.0/">Creative Commons Zero license.</a>
            </Half>;
    }
}