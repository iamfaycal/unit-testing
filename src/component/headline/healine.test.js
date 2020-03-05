import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';

import { findByTestAttr } from '../../../utils/index';

const setup = (props={}) => {
    return shallow(<Headline {...props} />);
}

describe('Headline component', () => {
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