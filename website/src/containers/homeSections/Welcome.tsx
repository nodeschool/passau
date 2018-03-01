import React from "react";
import SectionComponent from "../Section";
import { MainTitle } from "../Utility";

export default class Welcome extends SectionComponent {

    public static readonly id = "welcome";
    public static readonly title: string = undefined;

    public render(): React.ReactNode {
        return <MainTitle>Welcome to the nodeschool Passau!</MainTitle>;
    }
}
