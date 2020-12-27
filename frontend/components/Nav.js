import Link from 'next/link';
import { Mutation } from 'react-apollo';
import NavStyles from './styles/NavStyles';
import User from './User';
import SignOut from './SignOut';
import { TOGGLE_CART_MUTATION } from './Cart';

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
                        <Mutation mutation={TOGGLE_CART_MUTATION}>
                            {toggleCart => (
                                <a onClick={toggleCart}>My Cart</a>
                            )}
                        </Mutation>
                        <SignOut />
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