import {myCodeBase} from "../support/myCodeBase";
import {TestModel} from "../support/test.model";

function generateClearAndTypeStepsForPhone(phoneNumbers: string[]): any[] {
    return phoneNumbers.flatMap(phoneNumber => [
        { clear_and_type: { '[placeholder="+"]': phoneNumber } },
        { enable_disable: { 'button[type="submit"]': phoneNumber.length === 12 ? 'true' : 'false' } }
    ]);
}

const phoneNumbers = [' ', '99890', '99890001', '998900011076'];
const dynamicStepsForPhone = generateClearAndTypeStepsForPhone(phoneNumbers);

function generateCheckContainsStepsForEmail(emails: string[]): any[] {
    return emails.flatMap(email => [
        { clear_and_type: { '[placeholder="Email"]': email } },
        { enable_disable: { 'button[type="submit"]': (email.includes('@') && email.includes('.')) ? 'true' : 'false' } }
    ]);
}

const emails = [' ', 'test', 'test@', 'test@commeta.uz'];
const dynamicStepsForEmail = generateCheckContainsStepsForEmail(emails);



const sample: TestModel = {
    general: {
        visit: '/login',
        title: 'Login page tests',
    },
    episodes: [
        [
            {title: 'Login, Check phone number'},
            {check_contains: {'h2': 'Login'}},
            {enable_disable: {'button[type="submit"]': 'false'}},
            ...dynamicStepsForPhone,
        ],
        [
            {title: 'Login, Check email'},
            {check_contains: {'h2': 'Login'}},
            {multi_click: ['#item_email']},
            {enable_disable: {'button[type="submit"]': 'false'}},
            ...dynamicStepsForEmail,
        ],
    ],
};

myCodeBase(sample);
