import {myCodeBase} from "../support/myCodeBase";
import {TestModel} from "../support/test.model";

function generateClearAndTypeStepsForPhone(phoneNumbers: string[]): any[] {
    return phoneNumbers.flatMap(phoneNumber => [
        { clear_and_type: { '.vti__input': phoneNumber } },
        { enable_disable: { 'button[type="submit"]': phoneNumber.length >= 7 ? 'true' : 'false' } }
    ]);
}

const phoneNumbers = [' ', '99890', '99890001', '998900011076'];
const dynamicStepsForPhone = generateClearAndTypeStepsForPhone(phoneNumbers);

function generateCheckContainsStepsForEmail(emails: string[]): any[] {
    return emails.flatMap(email => [
        { clear_and_type: { '.flex-col > .bg-gray-300 > .w-full': email } },
        { enable_disable: { 'button[type="submit"]': (email.includes('@') && email.includes('.')) ? 'true' : 'false' } }
    ]);
}

const emails = [' ', 'test', 'test@', 'test@commeta.uz'];
const dynamicStepsForEmail = generateCheckContainsStepsForEmail(emails);



const sample: TestModel = {
    general: {
        visit: '/register',
        title: 'Register page tests',
    },
    episodes: [
        [
            {title: 'Main information page, Check required fields'},
            {check_contains: {'form  p': 'Main information'}},
            {enable_disable: {'button[type="submit"]': 'false'}},
            {multi_input: {'input[placeholder="Name"]': 'Sarvar', 'input[placeholder="Surname"]': 'Vakhobov'}},
            {enable_disable: {'button[type="submit"]': 'true'}},
        ],
        [
            {title: 'Confirm the account, Check phone number and email'},
            {multi_input: {'input[placeholder="Name"]': 'Sarvar', 'input[placeholder="Surname"]': 'Vakhobov'}},
            {multi_click: ['button[type="submit"]']},
            {check_contains: {'form  p': 'Confirm the account'}},
            {enable_disable: {'button[type="submit"]': 'false'}},
            ...dynamicStepsForPhone,
            {multi_click: ['#item_email']},
            {enable_disable: {'button[type="submit"]': 'false'}},
            ...dynamicStepsForEmail,
        ],
    ],
};

myCodeBase(sample);
