import React from 'react';

export default class SectionComponent extends React.PureComponent<{}, {}> {}

export type TSection = typeof SectionComponent & { id: string, title: string }