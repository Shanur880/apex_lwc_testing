import { LightningElement } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import FIRST_NAME from '@salesforce/schema/Contact.FirstName';
import LAST_NAME from '@salesforce/schema/Contact.LastName';
import EMAIL from '@salesforce/schema/Contact.Email';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

;

export default class ContactCreator extends LightningElement {
    objectApiName= CONTACT_OBJECT
    fields = [
        FIRST_NAME,
        LAST_NAME,
        EMAIL
    ]
    handelSuccess(event){
    const toastevent = new ShowToastEvent({
        title: "Success",
        message: "Conatact created with record id:"+ event.detail.id,
        variant: "success",

    });
    this.dispatchEvent(toastevent);
   
    
    }           
}