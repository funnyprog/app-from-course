import { TestAsyncThunk } from 'shared/lib';
import { userActions } from 'entities/user';
import { loginByUsername } from './loginByUsername';

const NAME = 'loginByUsername service testing';

describe(NAME, () => {
    test('success login', async () => {
        const arg = {
            username: 'user',
            password: '123',
        };
        const expectedResult = {
            username: 'user',
            id: 1,
        };

        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(
            Promise.resolve({
                data: expectedResult,
            }),
        );
        const result = await thunk.callThunk(arg);

        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(expectedResult);
        expect(thunk.dispatch).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(expectedResult));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    });

    test('error login', async () => {
        const expectedResult = { status: 403 };

        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve(expectedResult));
        const result = await thunk.callThunk({
            username: 'user',
            password: '123',
        });

        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
        expect(thunk.dispatch).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    });
});
