import { LightningElement, track } from 'lwc';

export default class Track extends LightningElement {
    @track
    name = 'World';
    counter = 0;
}