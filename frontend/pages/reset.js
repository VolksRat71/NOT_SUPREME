import ResetPassword from '../components/ResetPassword';

const Reset = props => (
    <>
        <ResetPassword resetToken={props.query.resetToken} />
    </>
);


export default Reset;