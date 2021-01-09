import { mount } from 'enzyme';
import wait from 'waait';
import { MockedProvider } from 'react-apollo/test-utils';
import toJSON from 'enzyme-to-json';
import { fakeCartItem, fakeUser } from '../lib/testUtils';
import { ApolloConsumer } from 'react-apollo';
import RemoveFromCart, { REMOVE_FROM_CART_MUTATION } from '../components/RemoveFromCart';
import { CURRENT_USER_QUERY } from '../components/User';

// Remove from cart uses an alert.
global.alert = console.log;

const mocks = [
    {
        request: { query: CURRENT_USER_QUERY },
        result: {
            data: {
                me: {
                    ...fakeUser(),
                    cart: [fakeCartItem({ id: 'abc123' })]
                }
            }
        }
    },
    {
        request: { query: REMOVE_FROM_CART_MUTATION, variables: { id: 'abc123' } },
        response: {
            data: {
                removeFromCart: {
                    __typename: 'CartItem',
                    id: 'abc123'
                }
            }
        }
    }
];

describe('<RemoveFromCart />', () => {
    test('Renders and matches snapshot', () => {
        const wrapper = mount(
            <MockedProvider>
                <RemoveFromCart id="abc123" />
            </MockedProvider>
        );
        expect(toJSON(wrapper.find('button'))).toMatchSnapshot();
    });

    test('Removes the item from cart', async () => {
        let apolloClient;
        const wrapper = mount(
            <MockedProvider mocks={mocks}>
                <ApolloConsumer>
                    {client => {
                        apolloClient = client;
                        return <RemoveFromCart id="abc123" />;
                    }}
                </ApolloConsumer>
            </MockedProvider>
        );
        const { data: { me: { cart } } } = await apolloClient.query({ query: CURRENT_USER_QUERY });
        expect(cart).toHaveLength(1);
        expect(cart[0].item.price).toBe(5000);
        wrapper.find('button').simulate('click');
        await wait();
        const { data: { me: { cart: cart2 } } } = await apolloClient.query({ query: CURRENT_USER_QUERY });
        expect(cart2).toHaveLength(0);
    });
})
