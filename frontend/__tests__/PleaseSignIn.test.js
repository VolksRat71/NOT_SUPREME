import { mount } from 'enzyme';
import wait from 'waait';
import { MockedProvider } from 'react-apollo/test-utils';
import { fakeUser } from '../lib/testUtils';
import PleaseSignIn from '../components/PleaseSignIn';
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
        result: { data: { me: fakeUser() } },
    },
];

describe('<PleaseSignIn/>', () => {
    test('Renders the sign in dialog to logged out users', async () => {
        const wrapper = mount(
            <MockedProvider mocks={notSignedInMocks}>
                <PleaseSignIn />
            </MockedProvider>
        );

        expect(wrapper.find('PleaseSignIn').exists()).toBeTruthy()
        await wait()
        wrapper.update()
        expect(wrapper.find('p').text()).toBe('Please Sign In before continuing.')
    });

    test('Renders the child component when the user is signed in', async () => {
        const Hey = () => <p>Hey!</p>;
        const wrapper = mount(
            <MockedProvider mocks={signedInMocks}>
                <PleaseSignIn>
                    <Hey />
                </PleaseSignIn>
            </MockedProvider>
        );
        expect(wrapper.find('p').text()).toBe('Loading...')
        await wait()
        wrapper.update()
        expect(wrapper.find('p').text()).toBe('Hey!')
    });
});
