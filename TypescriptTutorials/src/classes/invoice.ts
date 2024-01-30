import { HasFormatter } from "../interfaces/HasFormatter";

//classes
export class Invoice implements HasFormatter {
    
        constructor(                                                    //This is the shorthand for the below. But you have to have those modifiers.
            readonly client: string,
            private details: string,
            public amount: number
        ){}
    
        format() {
            return `${this.client} owes $${this.amount} for ${this.details}`;
        }
    }



        //client: string;                 //They'll have errors at first because they don't have values. Add a constructor.
        //details: string;
        //amount: number;
    
        //constructor(c: string, d: string, a: number){               //This assigns a value to get rid of error above.
            //this.client = c;                                        //We use "this" to refer to object based on above class.
            //this.details = d;
            //this.amount = a;
        //}