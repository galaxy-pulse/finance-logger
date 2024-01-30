import { ListTemplate } from './classes/ListTemplate.js';
import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/payment.js';
// let docOne: HasFormatter;                                                       //Must have the HasFormatter interface
// let docTwo: HasFormatter;
// docOne = new Invoice('yoshi', 'web work', 250);
// docTwo = new Payment('mario', 'plumbing work', 200);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
//instantiating class
// const invOne = new Invoice('mario', 'working on mario website', 250);
// const invTwo = new Invoice('luigi', 'working on luigi website', 300);
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// console.log(invoices);
let form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type'); //Determine the input types without giving an input
const tofrom = document.querySelector('#tofrom');
const detail = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, detail.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, detail.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
    // console.log(
    //     doc
    //     // type.value,
    //     // tofrom.value,
    //     // detail.value,
    //     // amount.valueAsNumber
    // );
});
//interfaces
//interface IsPerson {
//name: string;
//age: number;
//speak(a: string): void;
//spend(a: number): number;
//}
//const me: IsPerson =  {
//name: 'Me',
//age: 24,
//speak(text: string): void {
//console.log(text);
//},
//spend(amount: number): number {
//console.log('I spent ', amount);
//return amount;
//}
//};
//console.log(me);
