import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';

import { findByTestAttr, checkProps } from '../../../utils/index';

const setup = (props={}) => {
    return shallow(<Headline {...props} />);
}

describe('Headline component', () => {

    describe('Checking PropTypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                header: 'Test header',
                desc: 'Test Desc',
                tempArr: [{
                    firstname: 'Test name',
                    lastname: 'Test lastname',
                    email: 'test@email.com',
                    age: 21,
                    onlineStatus: true
                }]
            };

            const propsError = checkProps(Headline, expectedProps);
            expect(propsError).toBe(undefined);

        });
    })
    

    describe('Have props', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                header: 'Test header',
                description: 'Test description'
            };
            wrapper = setup(props);
        });

        it('Should render without errors', () => {
            const component = findByTestAttr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(1);
        });

        it('Should render an h1', () => {
            const h1 = findByTestAttr(wrapper, 'header');
            expect(h1.length).toBe(1);
        });
        
        it('Should render a description', () => {
            const description = findByTestAttr(wrapper, 'description');
            expect(description.length).toBe(1);
        });
    });

    describe('Have no props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setup();
        });

        it('Should not render', () => {
            const component = findByTestAttr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(0);
        })

    })
    
});