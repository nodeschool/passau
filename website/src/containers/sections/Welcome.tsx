import React from 'react';
import { SectionComponent } from '../Section';
import { MainTitle } from './Utility';

export class Welcome extends SectionComponent{

    static readonly id = "welcome";
    static readonly title:string = undefined;

    render() : React.ReactNode{
        return <MainTitle>Welcome to the nodeschool Passau!</MainTitle>;
    }
}