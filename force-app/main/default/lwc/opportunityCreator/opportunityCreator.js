import { LightningElement } from 'lwc';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
import NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import STAGE_FIELD from '@salesforce/schema/Opportunity.StageName';
import AMOUNT_FIELD from '@salesforce/schema/Opportunity.Amount';

export default class OpportunityCreator extends LightningElement {

    objectApiName = OPPORTUNITY_OBJECT;
    fields = [NAME_FIELD, STAGE_FIELD, AMOUNT_FIELD];

    //handle success
    handleSuccess(event)
{
     const toastevent = new ShowToastEvent({
         title: "Success",
         message: "Opportunity created with record id:"+ event.detail.id,
         variant:'success',

     });
     this.dispatchEvent(toastevent);
}
handleError(event)
{
     const toastevent = new ShowToastEvent({
         title: "Error",
          message: event.detail.message,
          variant: 'error',
    

     });
     this.dispatchEvent(toastevent);

}}