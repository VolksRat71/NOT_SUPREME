import { mount } from 'enzyme';
import wait from 'waait';
import toJSON from 'enzyme-to-json';
import { MockedProvider } from 'react-apollo/test-utils';
import { fakeUser, fakeCartItem } from '../lib/testUtils';
import Nav from '../components/Nav';
import { CURRENT_USER_QUERY } from '../components/User';

const notSignedInMocks = [
    {
        request: { query: CURRENT_USER_QUERY },
        result: { data: { me: null } },
    },
];

const signedInMocks = [
    {
        request: { query: CURRENT_USER_QUERY },
        result: {
            data: {
                me: {
                    ...fakeUser(),
                    cart: [],
                },
            },
        },
    },
];


const signedInMocksWithCartItems = [
    {
        request: { query: CURRENT_USER_QUERY },
        result: {
            data: {
                me: {
                    ...fakeUser(),
                    cart: [fakeCartItem(), fakeCartItem(), fakeCartItem()],
                },
            },
        },
    },
];

describe('<Nav />', () => {
    test('Renders a minimal <Nav /> when signed out ', async () => {
        const wrapper = mount(
            <MockedProvider mocks={notSignedInMocks}>
                <Nav />
            </MockedProvider>
        )
        await wait();
        const nav = wrapper.find('[data-test="nav"]')
        expect(toJSON(nav)).toMatchSnapshot()
    })

    test('Renders a full <Nav /> when signed in ', async () => {
        const wrapper = mount(
            <MockedProvider mocks={signedInMocks}>
                <Nav />
            </MockedProvider>
        )
        await wait();
        const nav = wrapper.find('[data-test="nav"]');
        expect(toJSON(nav)).toMatchSnapshot();
    })

    test('Renders the amount of items in the cart', async () => {
        const wrapper = mount(
            <MockedProvider mocks={signedInMocksWithCartItems}>
                <Nav />
            </MockedProvider>
        );
        await wait();
        wrapper.update();
        const nav = wrapper.find('[data-test="nav"]');
        const count = nav.find('div.count');
        expect(toJSON(count)).toMatchSnapshot()
    });
})
