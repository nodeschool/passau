import React from 'react';

export class SectionComponent extends React.PureComponent<{}, {}> {}

export type Section = typeof SectionComponent & { id: string, title: string }