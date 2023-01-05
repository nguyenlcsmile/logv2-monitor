import { Action } from '@ngrx/store';
import { OnBoarding } from './information';

export function addInformationReducer(state: OnBoarding[] = [], action) {
    switch (action.type) {
        case 'Monitor':
            return [...state, action.payload];
        default:
            return state;
    }
}