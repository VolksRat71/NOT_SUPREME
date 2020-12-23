import Link from 'next/link';
import NavStyles from './styles/NavStyles';
import User from './User';

const Nav = props => (
    <User>
        {({ data: { me } }) => (
            <NavStyles>
                <Link href="/items">
                    <a>
                        <p>Shop</p>
                    </a>
                </Link>
                {me && (
                    <>
                        <Link href="/sell">
                            <a>
                                <p>Sell</p>
                            </a>
                        </Link>
                        <Link href="/orders">
                            <a>
                                <p>Orders</p>
                            </a>
                        </Link>
                        <Link href="/me">
                            <a>
                                <p>Account</p>
                            </a>
                        </Link>
                    </>
                )}
                {!me && (
                    <Link href="/signup">
                        <a>
                            <p>Sign In</p>
                        </a>
                    </Link>
                )}
            </NavStyles>
        )}
    </User>
)

export default Nav;