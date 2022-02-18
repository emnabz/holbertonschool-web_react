import { getFullYear, getFooterCopy, getLatestNotifications } from './utils';

describe('Utility functions', () => {

    test('getFullYear returns the correct year', () => {
        expect(getFullYear()).toEqual(2022);
    });
    test('getFooterCopy returns the correct string when the argument is true or false', () => {
        expect(getFooterCopy(true)).toEqual('Holberton School');
    });
    test('getFooterCopy returns the correct string when the argument is true or false', () => {
        expect(getFooterCopy(false)).toEqual('Holberton School main dashboard');
    });
    test('getLatestNotifications returns string', () => {
        expect(getLatestNotifications()).toEqual('<strong>Urgent requirement</strong> - "complete by EOD');
    });
});
