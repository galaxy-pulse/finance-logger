import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Payment implements HasFormatter {
    
        constructor(                                                    //This is the shorthand for the below. But you have to have those modifiers.
            readonly recipient: string,
            private details: string,
            public amount: number
        ){}
    
        format() {
            return `${this.recipient} is owed $${this.amount} for ${this.details}`;
        }
    }