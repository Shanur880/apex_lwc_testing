// Import necessary decorators and Apex method
import { LightningElement, wire, track } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';

// Define the ContactList LWC class
export default class ContactList extends LightningElement {
    // Define tracked properties to hold contacts and error information
    @track contacts;
    @track error;

    // Use wire service to call Apex method imperatively
    @wire(getContacts)
    wiredContacts({ error, data }) {
        // If data is received from the Apex method
        if (data) {
            // Set contacts property to received data
            this.contacts = data;
            // Optionally, handle the response here
        } 
        // If there is an error while fetching contacts
        else if (error) {
            // Log the error to the console
            console.error('Error fetching contacts: ', error);
            // Set the error property to the received error
            this.error = error;
        }
    }
}
