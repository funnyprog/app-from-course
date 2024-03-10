import { StoreScheme } from 'app/providers';
import { AsyncThunkAction } from '@reduxjs/toolkit';
import axios, { AxiosStatic } from 'axios';

type ActionCreatorType<Return, Arg, RejectedValue> = (
    arg: Arg
) => AsyncThunkAction<Return, Arg, {rejectValue: RejectedValue}>

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>;

    getState: () => StoreScheme;

    api: jest.MockedFunctionDeep<AxiosStatic>;

    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

    constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();

        this.api = mockedAxios;
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        return action(this.dispatch, this.getState, {
            api: this.api,
        });
    }
}
