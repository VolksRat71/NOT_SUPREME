import { mount } from 'enzyme';
import wait from 'waait';
import { MockedProvider } from 'react-apollo/test-utils';
import toJSON from 'enzyme-to-json';
import Router from 'next/router';
import { fakeItem } from '../lib/testUtils';
import CreateItem, { CREATE_ITEM_MUTATION } from '../components/CreateItem';

const dogImage = 'https://dog.com/dog.png'

// * mock the global fetch res from cloudinary API
global.fetch = jest.fn().mockResolvedValue({
    json: () => ({
        secure_url: dogImage,
        eager: [{ secure_url: dogImage }]
    })
})

describe('<CreateIem/> ', () => {
    test('Renders and matches snapshot ', async () => {
        const wrapper = mount(
            <MockedProvider>
                <CreateItem />
            </MockedProvider>
        )
        const form = wrapper.find('form[data-test="form"]')
        expect(toJSON(form)).toMatchSnapshot()
    })

    test('Form uploads file when changed ', async () => {
        const wrapper = mount(
            <MockedProvider>
                <CreateItem />
            </MockedProvider>
        )
        const input = wrapper.find('input[type="file"]')
        input.simulate('change', {
            target: { files: { files: ['fakePicOfDog.png'] } }
        });
        await wait()
        const component = wrapper.find('CreateItem').instance();
        expect(component.state.image).toBe(dogImage);
        expect(component.state.largeImage).toBe(dogImage);
        expect(global.fetch).toHaveBeenCalled();
        //! RESET THE GLOBAL FETCH WHEN TEST IS COMPLETE!!
        global.fetch.mockReset()
    })

    test('Handle state change ', async () => {
        const wrapper = mount(
            <MockedProvider>
                <CreateItem />
            </MockedProvider>
        )
        wrapper
            .find('#title')
            .simulate('change', {
                target: { value: 'Testing', name: 'title' }
            })
        wrapper
            .find('#price')
            .simulate('change', {
                target: { value: 50000, name: 'price', type: 'number' }
            })
        wrapper
            .find('#description')
            .simulate('change', {
                target: { value: 'This is an Item', name: 'description' }
            })

        const state = wrapper.find('CreateItem').instance().state;
        expect(state).toMatchObject({
            title: 'Testing',
            description: 'This is an Item',
            image: '',
            largeImage: '',
            price: 50000
        })
    })

    xtest('Creates and Item when the form is submitted ', async () => {
        const { title, description, price } = fakeItem();
        const mocks = [{
            request: {
                query: CREATE_ITEM_MUTATION,
                variables: {
                    title: title,
                    description: description,
                    image: '',
                    largeImage: '',
                    price: price
                }
            },
            result: {
                data: {
                    createItem: {
                        ...fakeItem(),
                        id: 'abc123',
                        __typename: 'Item'
                    }
                }
            }
        }]
        const wrapper = mount(
            <MockedProvider mocks={mocks}>
                <CreateItem />
            </MockedProvider>
        );
        wrapper
            .find('#title')
            .simulate('change', {
                target: { value: 'Testing', name: 'title' }
            })
        wrapper
            .find('#price')
            .simulate('change', {
                target: { value: 50000, name: 'price', type: 'number' }
            })
        wrapper
            .find('#description')
            .simulate('change', {
                target: { value: 'This is an Item', name: 'description' }
            })
        Router.router = { push: jest.fn() };
        wrapper.find('form').simulate('submit');
        await wait(50);
        // TODO: Again, Why are we throwing an error on component
        expect(Router.router.push).toHaveBeenCalled()
    })
})

