import { LightningElement, track } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';

export default class ContactList extends LightningElement {
    @track contacts;
    @track error;

    // Method to fetch contacts imperatively
    fetchContacts() {
        // Call the Apex method imperatively
        getContacts()
            .then(result => {
                // Set the contacts property to the received data
                this.contacts = result;
                // Optionally, handle the response here
            })
            .catch(error => {
                // Set the error property to the received error
                this.error = error;
                // Log the error to the console
                console.error('Error fetching contacts: ', error);
            });
    }

    // Call the fetchContacts method when the component is initialized
    connectedCallback() {
        this.fetchContacts();
    }
}
