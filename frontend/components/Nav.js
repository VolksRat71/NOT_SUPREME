import Link from 'next/link';
import { Mutation } from 'react-apollo';
import NavStyles from './styles/NavStyles';
import User from './User';
import SignOut from './SignOut';
import { TOGGLE_CART_MUTATION } from './Cart';
import CartCount from './CartCount'

const Nav = props => (
    <User>
        {({ data: { me } }) => (
            <NavStyles data-test="nav">
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
                        <SignOut />
                        <Mutation mutation={TOGGLE_CART_MUTATION}>
                            {toggleCart => (
                                <a onClick={toggleCart}>
                                    My Cart
                                    <CartCount count={me.cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0)} />
                                </a>
                            )}
                        </Mutation>
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