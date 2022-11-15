import exp from 'constants';
import { CustomError, HTTPError } from './error';

describe('Given', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let error: CustomError;
    beforeEach(() => {
        error = new HTTPError(418, 'Tea Pot', 'Ja, ja, ja');
    });
    test('should first', () => {
        expect(error).toBeInstanceOf(Error);
        expect(error).toBeInstanceOf(HTTPError);
        expect(error).toHaveProperty('statusCode', 418);
        expect(error).toHaveProperty('statusMessage', 'Tea Pot');
        expect(error).toHaveProperty('message', 'Ja, ja, ja');
        expect(error).toHaveProperty('name', 'HTTPError');
    });
});
