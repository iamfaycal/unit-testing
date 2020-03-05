import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../utils/index';
import Header from './index';

const setup = (props={}) => {
    return shallow(<Header {...props}/>);
};

describe('Header component', () => {
    let component;
    beforeEach(() => {
        component = setup();
    });

    it('Should renders without errors', () => {
        const wrapper = findByTestAttr(component, 'headerComponent');
        expect(wrapper.length).toBe(1);
    });

    it('Should render a logo', () => {
        const logo = findByTestAttr(component, 'logoImage');
        expect(logo.length).toBe(1);
    });
});