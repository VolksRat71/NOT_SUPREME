import { mount } from 'enzyme';
import wait from 'waait';
import { MockedProvider } from 'react-apollo/test-utils';
import toJSON from 'enzyme-to-json';
import { ApolloConsumer } from 'react-apollo';
import { fakeUser } from '../lib/testUtils';
import SignUp, { SIGNUP_MUTATION } from '../components/SignUp';
import { CURRENT_USER_QUERY } from '../components/User';

function type(wrapper, name, value) {
    wrapper.find(`input[name="${name}"]`)
        .simulate(
            'change', {
            target: { name, value }
        }
        )
}

const me = fakeUser()
const { email, name } = me;
const mocks = [
    // Sign Up Mock
    {
        request: {
            query: SIGNUP_MUTATION,
            variables: {
                email: email,
                name: name,
                password: 'fakePass',
            }
        },
        result: {
            data: {
                signup: {
                    __typename: 'User',
                    id: 'abc123',
                    email: email,
                    name: name
                }
            }
        }
    },
    {
        request: { query: CURRENT_USER_QUERY },
        result: { data: { me } }
    }
]

describe('<SignUp />', () => {
    test('Renders and matches snapshot ', () => {
        const wrapper = mount(
            <MockedProvider>
                <SignUp />
            </MockedProvider>
        );
        expect(toJSON(wrapper.find('form'))).toMatchSnapshot()
    })

    test('Calls the mutation properly ', async () => {
        let apolloClient;
        const wrapper = mount(
            <MockedProvider mocks={mocks}>
                <ApolloConsumer>
                    {client => {
                        apolloClient = client;
                        return <SignUp />
                    }}
                </ApolloConsumer>
            </MockedProvider>
        );
        await wait();
        wrapper.update();
        type(wrapper, 'name', name);
        type(wrapper, 'email', email);
        type(wrapper, 'password', 'fakePass');
        wrapper.update();
        wrapper.find('form').simulate('submit');
        await wait();
        const user = await apolloClient.query({ query: CURRENT_USER_QUERY });
        expect(user.data.me).toMatchObject(me)
    })
})
