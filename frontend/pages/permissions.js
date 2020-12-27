import PleaseSignIn from '../components/PleaseSignIn';
import Permissions from '../components/Permissions';

const PermissionsPage = props => (
    <>
        <PleaseSignIn>
            <Permissions />
        </PleaseSignIn>
    </>
);


export default PermissionsPage;