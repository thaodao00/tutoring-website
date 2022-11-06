import GoogleMapComponent from '~/components/GoogleMapper/googleMapper';
import ContactsInformation from './ContactsInformation/contactsInformation.js';

function Contacts() {
    return (
        <>
            <GoogleMapComponent />
            <ContactsInformation />
        </>
    );
}

export default Contacts;
