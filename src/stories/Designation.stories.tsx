import React from 'react';
import Wrapper from './Wrapper';
import DesignationPage from '../pages/DesignationPage';

export default {
    title: 'Designations',
    decorators: [(storyFn: () => JSX.Element) => <Wrapper>{storyFn()}</Wrapper>],
};

export const Default = () => <DesignationPage/>;
