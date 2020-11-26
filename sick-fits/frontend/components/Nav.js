import Link from 'next/link'

const Nav = props => (
    <>
        <Link>
            <a href="/sell">
                <p>Sell Page</p>
            </a>
        </Link>
        <Link>
            <a href="/">
                <p>Home Page</p>
            </a>
        </Link>
    </>
)

export default Nav;