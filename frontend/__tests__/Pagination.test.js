import { mount } from 'enzyme';
import wait from 'waait';
import { MockedProvider } from 'react-apollo/test-utils';
import toJSON from 'enzyme-to-json';
import Router from 'next/router'
import { fakeUser } from '../lib/testUtils';
import Pagination, { PAGINATION_QUERY } from '../components/Pagination';

// * Overiding Router prototypes for tests
Router.router = {
    push() { },
    prefetch() { }
}

function makeMocksFor(length) {
    return [
        {
            request: { query: PAGINATION_QUERY },
            result: {
                data: {
                    itemsConnection: {
                        __typename: 'aggregate',
                        aggregate: {
                            count: length,
                            __typename: 'count',
                        },
                    },
                },
            },
        },
    ];
}

describe('<Pagination /> ', () => {
    test('Displays a loading message ', () => {
        const wrapper = mount(
            <MockedProvider mocks={makeMocksFor(1)}>
                <Pagination />
            </MockedProvider>
        )
        expect(wrapper.text()).toContain('Loading...')
    })

    test('Renders Pagination for 18 items  ', async () => {
        const wrapper = mount(
            <MockedProvider mocks={makeMocksFor(18)}>
                <Pagination page={1} />
            </MockedProvider>
        )
        await wait()
        wrapper.update()
        expect(wrapper.find('.totalPages').text()).toEqual('5');
        const pagination = wrapper.find('[data-test="pagination"]');
        expect(toJSON(pagination)).toMatchSnapshot()
    });

    test('disables prev button on first page', async () => {
        const wrapper = mount(
            <MockedProvider mocks={makeMocksFor(18)}>
                <Pagination page={1} />
            </MockedProvider>
        );
        await wait();
        wrapper.update();
        expect(wrapper.find('a.prev').prop('aria-disabled')).toEqual(true);
        expect(wrapper.find('a.next').prop('aria-disabled')).toEqual(false);
    });

    test('disables next button on last page', async () => {
        const wrapper = mount(
            <MockedProvider mocks={makeMocksFor(18)}>
                <Pagination page={5} />
            </MockedProvider>
        );
        await wait();
        wrapper.update();
        expect(wrapper.find('a.prev').prop('aria-disabled')).toEqual(false);
        expect(wrapper.find('a.next').prop('aria-disabled')).toEqual(true);
    });

    test('enables all buttons on a middle page', async () => {
        const wrapper = mount(
            <MockedProvider mocks={makeMocksFor(18)}>
                <Pagination page={3} />
            </MockedProvider>
        );
        await wait();
        wrapper.update();
        expect(wrapper.find('a.prev').prop('aria-disabled')).toEqual(false);
        expect(wrapper.find('a.next').prop('aria-disabled')).toEqual(false);
    });
})
