import React, { Component } from 'react'
import Header from './Header';
import Meta from './Meta';

class Page extends Component {
    render() {
        return (
            <>
                <Meta />
                <Header />
                {this.props.children}
            </>
        )
    }
}

export default Page;